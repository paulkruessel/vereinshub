import './Navbar.css';

function Navbar() {
    return(
        <nav className='navbar'>
            <ul>
                <li><a href='/'>Dashboard</a></li>
                <li><a href='/members'>Mitglieder</a></li>
                <li><a href='/events'>Veranstaltungen</a></li>
                <li><a href='files'>Dateiablage</a></li>
            </ul>
        </nav>
    )
}

export default Navbar