import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dash from './dash/dash.tsx'
import Footer from './footer/footer.tsx'
import Navbar from './navbar/Navbar.tsx'
import Members from './members/Members.tsx'
import MemberDetail from './members/member-card/MemberDetail.tsx'
import { clubEvents } from './data/clubEvents.ts'
import type { ClubEvent } from './types.ts'

function App() {
  const [events] = useState<ClubEvent[]>(clubEvents)

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Dash/>} />
        <Route path='/members' element={<Members/>}>
          <Route path=':id' element={<MemberDetail events={events} />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App