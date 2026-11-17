import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dash from './dash/dash.tsx'
import Footer from './footer/footer.tsx'
import Navbar from './navbar/Navbar.tsx'
import Members from './members/Members.tsx'
import MemberDetail from './members/member-card/MemberDetail.tsx'
import Events from './events/Events.tsx'
import { clubEvents } from './data/clubEvents.ts'
import type { ClubEvent } from './types.ts'
import EventDetail from './events/event-card/EventDetail.tsx'
import EventForm from './events/event-form/EventForm.tsx'
import NotFoundPage from './not-found-page/NotFoundPage.tsx'

function App() {
  const [events, setEvents] = useState<ClubEvent[]>(clubEvents)

  function addEvent(data: Omit<ClubEvent, 'id'>): ClubEvent {
    const newEvent: ClubEvent = { ...data, id: Math.max(0, ...events.map(e => e.id)) + 1 }
    setEvents(prev => [...prev, newEvent])
    return newEvent   // damit das Formular zur Detailseite springen kann
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Dash/>} />
        <Route path='/members' element={<Members/>}>
          <Route path=':id' element={<MemberDetail events={events} />} />
        </Route>
        <Route path='/events' element={<Events events={events} />}>
          <Route path='new' element={<EventForm onCreate={addEvent} />} />
          <Route path=':id' element={<EventDetail events={events} />} />
        </Route>

        {/* 404 immer als letzte Route */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App