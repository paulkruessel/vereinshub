import './Members.css';

function Members() {
    return (
        <>
            <main className="main--wide">
                {/* Content Header */}
                <header className="page-header">
                    <div className="page-header__title">
                    <p className="page-header__date">
                        <time dateTime="2026-10-21">6 Mitglieder · TSV Musterstadt e.V.</time>
                    </p>
                    <h1>Mitglieder</h1>
                    </div>
                    <div className="page-header__actions">
                    <div className="theme-switch">
                        <input className="theme-switch__input" type="checkbox" id="theme-toggle" />
                        <label htmlFor="theme-toggle" className="theme-switch__label">
                        <span className="vh-sr">Hellen Modus aktivieren</span>
                        <span className="theme-switch__option theme-switch__option--light" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></span>
                        <span className="theme-switch__option theme-switch__option--dark" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"></path></svg></span>
                        </label>
                    </div>
                    <a className="vh-btn new-event-btn" href="/invitations/new">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
                        <span className="sr-mobile">Mitglied einladen</span>
                    </a>
                    </div>
                </header>
                {/* Searchbar with Filter Buttons */}
                <div className="toolbar">
                    <form className="search" action="/members/" method="get" role="search">
                    <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
                    <label htmlFor="member-q" className="vh-sr">Mitglieder durchsuchen</label>
                    <input id="member-q" name="q" type="search" placeholder="Name, E-Mail oder Ort" />
                    <button type="submit" className="vh-sr">Suchen</button>
                    </form>
                    <div className="vh-chip-group" role="group" aria-label="Nach Gruppe filtern">
                    <a className="vh-chip" href="/members/" aria-current="true">Alle <span className="vh-chip__count">6</span></a>
                    <a className="vh-chip" href="/members/?group=vorstand">Vorstand <span className="vh-chip__count">2</span></a>
                    <a className="vh-chip" href="/members/?group=kassenwart">Kassenwart <span className="vh-chip__count">1</span></a>
                    <a className="vh-chip" href="/members/?group=admin">Admin <span className="vh-chip__count">1</span></a>
                    </div>
                </div>
                {/* Searchresults */}
                <section className="vh-tile member-list" aria-labelledby="member-list-title">
                    <h2 className="vh-sr" id="member-list-title">Mitgliederliste</h2>
                    <div className="list-head" aria-hidden="true">
                    <span>Name</span><span>Gruppe</span><span>Ort</span><span></span>
                    </div>
                    <ul className="vh-list">
                    <li>
                        <a className="vh-list-row member-row" href="/members/1">
                        <span className="member-row__main">
                            <span className="vh-avatar vh-avatar--green" aria-hidden="true">AS</span>
                            <span className="vh-list-row__body">
                            <span className="vh-list-row__title">Anna Schmidt</span>
                            <span className="vh-list-row__meta">anna.schmidt@example.org</span>
                            <span className="vh-list-row__meta member-row__meta-mobile">Vorstand · Konstanz</span>
                            </span>
                        </span>
                        <span className="member-row__group"><span className="vh-badge vh-badge--sm">Vorstand</span></span>
                        <span className="member-row__city">Konstanz</span>
                        <svg className="vh-icon vh-list-row__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a className="vh-list-row member-row" href="/members/2">
                        <span className="member-row__main">
                            <span className="vh-avatar" aria-hidden="true">JW</span>
                            <span className="vh-list-row__body">
                            <span className="vh-list-row__title">Jonas Weber</span>
                            <span className="vh-list-row__meta">jonas.weber@example.org</span>
                            <span className="vh-list-row__meta member-row__meta-mobile">Kassenwart · Allensbach</span>
                            </span>
                        </span>
                        <span className="member-row__group"><span className="vh-badge vh-badge--sm">Kassenwart</span></span>
                        <span className="member-row__city">Allensbach</span>
                        <svg className="vh-icon vh-list-row__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a className="vh-list-row member-row" href="/members/4">
                        <span className="member-row__main">
                            <span className="vh-avatar vh-avatar--violet" aria-hidden="true">PK</span>
                            <span className="vh-list-row__body">
                            <span className="vh-list-row__title">Paul Krüssel <span className="member-row__you">(du)</span></span>
                            <span className="vh-list-row__meta">paul@example.org</span>
                            <span className="vh-list-row__meta member-row__meta-mobile">Admin · Konstanz</span>
                            </span>
                        </span>
                        <span className="member-row__group"><span className="vh-badge vh-badge--sm vh-badge--inverse">Admin</span></span>
                        <span className="member-row__city">Konstanz</span>
                        <svg className="vh-icon vh-list-row__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a className="vh-list-row member-row" href="/members/3">
                        <span className="member-row__main">
                            <span className="vh-avatar vh-avatar--amber" aria-hidden="true">LH</span>
                            <span className="vh-list-row__body">
                            <span className="vh-list-row__title">Lena Hoffmann</span>
                            <span className="vh-list-row__meta">lena.hoffmann@example.org</span>
                            <span className="vh-list-row__meta member-row__meta-mobile">Vorstand · Radolfzell</span>
                            </span>
                        </span>
                        <span className="member-row__group"><span className="vh-badge vh-badge--sm">Vorstand</span></span>
                        <span className="member-row__city">Radolfzell</span>
                        <svg className="vh-icon vh-list-row__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a className="vh-list-row member-row" href="/members/5">
                        <span className="member-row__main">
                            <span className="vh-avatar vh-avatar--green" aria-hidden="true">MY</span>
                            <span className="vh-list-row__body">
                            <span className="vh-list-row__title">Mehmet Yılmaz</span>
                            <span className="vh-list-row__meta">mehmet.yilmaz@example.org</span>
                            <span className="vh-list-row__meta member-row__meta-mobile">Konstanz</span>
                            </span>
                        </span>
                        <span className="member-row__group"><span className="member-row__empty">–</span></span>
                        <span className="member-row__city">Konstanz</span>
                        <svg className="vh-icon vh-list-row__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a className="vh-list-row member-row" href="/members/6">
                        <span className="member-row__main">
                            <span className="vh-avatar" aria-hidden="true">SB</span>
                            <span className="vh-list-row__body">
                            <span className="vh-list-row__title">Sophie Braun</span>
                            <span className="vh-list-row__meta">sophie.braun@example.org</span>
                            <span className="vh-list-row__meta member-row__meta-mobile">Singen</span>
                            </span>
                        </span>
                        <span className="member-row__group"><span className="member-row__empty">–</span></span>
                        <span className="member-row__city">Singen</span>
                        <svg className="vh-icon vh-list-row__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
                        </a>
                    </li>
                    </ul>
                </section>
                </main>
        </>
    )
}

export default Members
