import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dash from './dash/dash.tsx'
import Footer from './footer/footer.tsx'
import Navbar from './navbar/Navbar.tsx'
import Members from './members/Members.tsx'
import MemberDetail from './members/member-card/MemberDetail.tsx'
import Events from './events/Events.tsx'
import { clubEvents } from './data/clubEvents.ts'
import type { ClubEvent, Member } from './types.ts'
import EventDetail from './events/event-card/EventDetail.tsx'
import EventForm from './events/event-form/EventForm.tsx'
import NotFoundPage from './not-found-page/NotFoundPage.tsx'
import { CURRENT_USER_ID } from './data/currentUser.ts'
import { members } from './data/members.ts'

const EVENTS_STORAGE_KEY = 'vereinshub-events'

// Liest die gespeicherten Events; ohne Eintrag (oder bei Fehlern) die Mock-Daten
function readStoredEvents(): ClubEvent[] {
  try {
    const stored = localStorage.getItem(EVENTS_STORAGE_KEY)
    if (!stored) return clubEvents
    // JSON kennt kein Date -> Datumsfelder wieder in Date-Objekte umwandeln
    const parsed = JSON.parse(stored) as ClubEvent[]
    return parsed.map(e => ({
      ...e,
      startDate: new Date(e.startDate),
      endDate: e.endDate ? new Date(e.endDate) : undefined
    }))
  } catch {
    return clubEvents
  }
}

function App() {
  const [events, setEvents] = useState<ClubEvent[]>(readStoredEvents)

  // Neue Events und An-/Abmeldungen ändern beide `events` -> bei jeder Änderung speichern
  useEffect(() => {
    try {
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events))
    } catch {
      // Speichern nicht möglich: Änderungen gelten dann nur bis zum Reload
    }
  }, [events])
  const [currentUser] = useState<Member | undefined>(() => members.find(m => m.id === CURRENT_USER_ID))

  function addEvent(data: Omit<ClubEvent, 'id'>): ClubEvent {
    const newEvent: ClubEvent = { ...data, id: Math.max(0, ...events.map(e => e.id)) + 1 }
    setEvents(prev => [...prev, newEvent])
    return newEvent   // damit das Formular zur Detailseite springen kann
  }

  // Meldet den eingeloggten User für ein Event an bzw. wieder ab
  function toggleAttendance(eventId: number) {
    setEvents(prev => prev.map(e => {
      if (e.id !== eventId) return e
      const attendeeIds = e.attendeeIds.includes(CURRENT_USER_ID)
        ? e.attendeeIds.filter(id => id !== CURRENT_USER_ID)
        : [...e.attendeeIds, CURRENT_USER_ID]
      return { ...e, attendeeIds }
    }))
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Dash events={events} currentUser={currentUser} />} />
        <Route path='/members' element={<Members/>}>
          <Route path=':id' element={<MemberDetail events={events} />} />
        </Route>
        <Route path='/events' element={<Events events={events} />}>
          <Route path='new' element={<EventForm onCreate={addEvent} />} />
          <Route path=':id' element={<EventDetail events={events} onToggleAttendance={toggleAttendance} />} />
        </Route>

        {/* 404 immer als letzte Route */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App