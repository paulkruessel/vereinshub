import './Navbar.css';

function Navbar() {
    const username = 'Paul Krüssel';
    const splitUsername = username.split(' ');
    const initials = splitUsername[0].charAt(0) + splitUsername[splitUsername.length - 1].charAt(0);

    return(
        <>
            <header className="site-header">
                {/* Logo */}
                <a className="logo" href="/">
                    <span className="logo__mark" aria-hidden="true">v</span>
                    <span className="logo__text">vereinshub</span>
                </a>
                {/* Navigation */}
                <nav className="main-nav" aria-label="Hauptnavigation">
                    <ul className="vh-nav">
                    <li><a className="vh-nav-item" href="/" aria-current="page"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"></path></svg>Übersicht</a></li>
                    <li><a className="vh-nav-item" href="/members/"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 19v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"></path></svg>Mitglieder</a></li>
                    <li><a className="vh-nav-item" href="/events/"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"></rect><path d="M16 3v4M8 3v4M3 11h18"></path></svg><span className="sr-mobile">Veranstaltungen</span><span className="nav-label--short" aria-hidden="true">Termine</span></a></li>
                    <li><a className="vh-nav-item" href="/files/"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span className="sr-mobile">Dateiablage</span><span className="nav-label--short" aria-hidden="true">Dateien</span></a></li>
                    <li><a className="vh-nav-item" href="/admin/"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 4v5c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V7z"/></svg>Verwaltung</a></li>
                    </ul>
                </nav>
                {/* Profile */}
                <a className="profile-card" href="/profile">
                    <span className="vh-avatar vh-avatar--violet" aria-hidden="true">{ initials }</span>
                    <span className="profile-card__text sr-mobile">
                    <span className="profile-card__name">{ username }</span>
                    <span className="profile-card__club">TSV Musterstadt e.V.</span>
                    </span>
                </a>
            </header>
        </>
    )
}

export default Navbar