import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dash from './dash/dash.tsx'
import Footer from './footer/footer.tsx'
import Navbar from './navbar/Navbar.tsx'
import Members from './members/Members.tsx'
import MemberDetail from './members/member-card/MemberDetail.tsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Dash/>} />
        <Route path='/members' element={<Members/>}>
          <Route path=':id' element={<MemberDetail />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
