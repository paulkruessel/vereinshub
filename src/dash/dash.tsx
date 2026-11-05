import './dash.css';

function Dash() {
    return (
        <>
            <main>
                {/* Content Header */}
                <header className="page-header">
                    <div className="page-header__title">
                    <p className="page-header__date">
                        <time dateTime="2026-10-21">Mi · 21. Okt 2026</time>
                    </p>
                    <h1>Guten Tag, Paul.</h1>
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
                    <form className="search" action="/members/" method="get" role="search">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
                        <label htmlFor="search-q" className="vh-sr">Mitglieder suchen</label>
                        <input id="search-q" name="q" type="search" placeholder="Mitglieder suchen" />
                        <button type="submit" className="vh-sr">Suchen</button>
                    </form>
                    <a className="vh-btn new-event-btn" href="/events/new">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
                        <span className="sr-mobile">Neuer Termin</span>
                    </a>
                    </div>
                </header>
                <div className="dashboard-grid">
                    {/* Next Event Tile */}
                    <article className="vh-tile vh-tile--raised next-event" aria-labelledby="next-event-title">
                    <p className="next-event__countdown">
                        <span className="vh-countdown">3</span>
                        <span className="next-event__countdown-label">Tage bis zum nächsten Termin</span>
                    </p>
                    <div className="next-event__body">
                        <time className="vh-date" dateTime="2026-10-24T10:00">Sa 24.10. · 10:00</time>
                        <h2 className="next-event__title" id="next-event-title"><a href="/events/1">Herbstwanderung am Bodanrück</a></h2>
                        <div className="next-event__meta">
                        <p className="vh-avatar-stack">
                            <span className="vh-sr">12 Mitglieder haben zugesagt:</span>
                            <span className="vh-avatar vh-avatar--sm vh-avatar--green" title="Anna Schmidt">AS</span>
                            <span className="vh-avatar vh-avatar--sm" title="Jonas Weber">JW</span>
                            <span className="vh-avatar vh-avatar--sm vh-avatar--amber" title="Lena Hoffmann">LH</span>
                            <span className="vh-avatar vh-avatar--sm vh-avatar--count">+9</span>
                        </p>
                        <span className="vh-badge vh-badge--success"><span className="vh-badge__dot"></span>Du bist dabei</span>
                        </div>
                    </div>
                    </article>
                    {/* Small Calendar Tile */}
                    <section className="vh-tile calendar" aria-labelledby="calendar-title">
                    <h2 className="vh-tile__title" id="calendar-title">Oktober 2026</h2>
                    <ol className="calendar__weekdays" aria-hidden="true">
                        <li aria-hidden="true">Mo</li>
                        <li aria-hidden="true">Di</li>
                        <li aria-hidden="true">Mi</li>
                        <li aria-hidden="true">Do</li>
                        <li aria-hidden="true">Fr</li>
                        <li aria-hidden="true">Sa</li>
                        <li aria-hidden="true">So</li>
                    </ol>
                    <ol className="calendar__days">
                        <li><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>6</span></li>
                        <li><span>7</span></li>
                        <li><span>8</span></li>
                        <li><span>9</span></li>
                        <li><span>10</span></li>
                        <li><span>11</span></li>
                        <li><span>12</span></li>
                        <li><span>13</span></li>
                        <li><span>14</span></li>
                        <li><span>15</span></li>
                        <li><span>16</span></li>
                        <li><span>17</span></li>
                        <li><span>18</span></li>
                        <li><span>19</span></li>
                        <li><span>20</span></li>
                        <li className="is-today"><span aria-current="date">21</span></li>
                        <li><span>22</span></li>
                        <li><span>23</span></li>
                        <li className="has-event"><a href="/events/1" aria-label="24. Oktober: Herbstwanderung am Bodanrück">24</a></li>
                        <li><span>25</span></li>
                        <li><span>26</span></li>
                        <li><span>27</span></li>
                        <li><span>28</span></li>
                        <li><span>29</span></li>
                        <li className="has-event"><a href="/events/2" aria-label="30. Oktober: Mitgliederversammlung">30</a></li>
                        <li><span>31</span></li>
                    </ol>
                    </section>
                    {/* Upcoming Events Tile */}
                    <section className="vh-tile upcoming" aria-labelledby="upcoming-title">
                    <div className="vh-tile__head">
                        <h2 className="vh-tile__title" id="upcoming-title">Demnächst</h2>
                        <a className="vh-tile__link" href="/events/">Alle</a>
                    </div>
                    <ul className="vh-event-list">
                        <li className="vh-event-row">
                        <time className="vh-event-row__date" dateTime="2026-10-30T19:00">Fr<span className="vh-event-row__day">30.10</span></time>
                        <div className="vh-event-row__body">
                            <a className="vh-event-row__title" href="/events/2">Mitgliederversammlung 2026</a>
                            <span className="vh-event-row__meta">19:00 · Vereinsheim</span>
                        </div>
                        <form className="attend-form" action="/events/2/attendees" method="post">
                            <button type="submit" className="vh-btn vh-btn--secondary vh-btn--sm">Zusagen</button>
                        </form>
                        </li>
                        <li className="vh-event-row">
                        <time className="vh-event-row__date" dateTime="2026-11-14T18:00">Sa<span className="vh-event-row__day">14.11</span></time>
                        <div className="vh-event-row__body">
                            <a className="vh-event-row__title" href="/events/3">Laternenlauf mit den Jugendgruppen</a>
                            <span className="vh-event-row__meta">18:00 · Treffpunkt Schulhof</span>
                        </div>
                        <span className="vh-badge vh-badge--sm vh-badge--warning"><span className="vh-badge__dot"></span>Offen</span>
                        </li>
                    </ul>
                    </section>
                    {/* New Posts Tile */}
                    <section className="vh-tile posts" aria-labelledby="posts-title">
                    <div className="vh-tile__head">
                        <h2 className="vh-tile__title" id="posts-title">Aus dem Verein</h2>
                        <a className="vh-tile__link" href="/events/?status=past">Alle vergangenen</a>
                    </div>
                    <article className="post">
                        <span className="vh-avatar vh-avatar--green" aria-hidden="true">AS</span>
                        <div className="post__body">
                        <header className="post__meta">
                            <a className="post__author" href="/members/1">Anna Schmidt</a>
                            zu <a className="post__event" href="/events/4">Sommerfest 2026</a> ·
                            <time dateTime="2026-09-14">14.09.</time>
                        </header>
                        <p className="post__text">Danke an alle Helferinnen und Helfer! Die Fotos liegen ab sofort in der Dateiablage</p>
                        <footer>
                            <a className="post__comments" href="/events/4#comments">4 Kommentare</a>
                        </footer>
                        </div>
                    </article>
                    <article className="post">
                        <span className="vh-avatar vh-avatar--green" aria-hidden="true">JW</span>
                        <div className="post__body">
                        <header className="post__meta">
                            <a className="post__author" href="/members/2">Jonas Weber</a>
                            zu <a className="post__event" href="/events/5">Arbeitseinsatz Vereinsheim</a> ·
                            <time dateTime="2026-10-05">05.10.</time>
                        </header>
                        <p className="post__text">Der Zaun ist gestrichen und die Hütte winterfest. Nächster Termin im Frühjahr</p>
                        <footer>
                            <a className="post__comments" href="/events/5#comments">1 Kommentar</a>
                        </footer>
                        </div>
                    </article>
                    </section>
                </div>
                </main>
        </>
    )
}

export default Dash