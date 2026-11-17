import './dash.css';
import ThemeSwitch from '../theme-switch/ThemeSwitch';
import type { ClubEvent, Member } from '../types';
import { Link } from 'react-router-dom';
import NotFoundPage from '../not-found-page/NotFoundPage';
import DashCountdown from './dash-countdown/DashCountdown';
import DashCountdownNoEvent from './dash-countdown/DashCountdownNoEvent';
import { getPastEvents, getUpcomingEvents, toDateInputValue } from '../events/calendar';
import DashSearch from './dash-search/DashSearch';
import MiniCalendar from './mini-calendar/MiniCalendar';
import UpcomingEvents from './upcoming-events/UpcomingEvents';
import ClubNews from './club-news/ClubNews';

interface DashProps {
    events: ClubEvent[],
    currentUser?: Member,
}

function Dash({ events, currentUser }: DashProps) {
    if (!currentUser) return <NotFoundPage />
    const now = new Date();
    const upcomingEvents = getUpcomingEvents(events, now);
    const nextEvent = upcomingEvents.at(0);
    return (
        <>
            <main>
                {/* Content Header */}
                <header className="page-header">
                    <div className="page-header__title">
                    <p className="page-header__date">
                        <time dateTime={toDateInputValue(now)}>{`${now.toLocaleDateString('de-DE', { weekday: 'short' })} · ${now.toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' })}`}</time>
                    </p>
                    <h1>Guten Tag, {currentUser.firstName}.</h1>
                    </div>
                    <div className="page-header__actions">
                    <ThemeSwitch />
                    <DashSearch />
                    <Link className="vh-btn new-event-btn" to="/events/new">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
                        <span className="sr-mobile">Neuer Termin</span>
                    </Link>
                    </div>
                </header>
                <div className="dashboard-grid">
                    {nextEvent ? (
                        <DashCountdown event={nextEvent} currentUser={currentUser} />
                    ) : (
                        <DashCountdownNoEvent />
                    )}
                    <MiniCalendar events={events} today={now} />
                    <UpcomingEvents events={upcomingEvents.slice(1, 4)} currentUserId={currentUser.id} />
                    <ClubNews events={getPastEvents(events, now).slice(0, 2)} />
                </div>
                </main>
        </>
    )
}

export default Dash