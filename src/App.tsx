import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dash from './dash/dash.tsx'
import Footer from './footer/footer.tsx'
import Navbar from './navbar/Navbar.tsx'
import Members from './members/Members.tsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Dash/>} />
        <Route path='/members' element={<Members/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
