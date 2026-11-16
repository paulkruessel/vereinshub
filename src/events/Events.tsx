import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import type { ClubEvent } from '../types';
import { addMonths, startOfMonth } from './calendar';
import MonthCalendar from './month-calendar/MonthCalendar';

interface EventsProps {
    events: ClubEvent[];
}

function Events({ events }: EventsProps) {
    const [month, setMonth] = useState(() => startOfMonth(new Date()));
    const { id } = useParams();

    const eventsInMonth = events.filter(e =>
        e.startDate.getFullYear() === month.getFullYear() && e.startDate.getMonth() === month.getMonth()
    ).length;
    const monthName = month.toLocaleDateString('de-DE', { month: 'long' });

    return (
        <main className="main--wide">
            {/* Content Header */}
            <header className="page-header">
                <div className="page-header__title">
                    <p className="page-header__date">
                        {eventsInMonth} {eventsInMonth === 1 ? 'Termin' : 'Termine'} im {monthName}
                    </p>
                    <h1>Veranstaltungen</h1>
                </div>
                {/* Header Actions */}
                <div className="page-header__actions">
                    <div className="theme-switch">
                        <input className="theme-switch__input" type="checkbox" id="theme-toggle" />
                        <label htmlFor="theme-toggle" className="theme-switch__label">
                            <span className="vh-sr">Hellen Modus aktivieren</span>
                            <span className="theme-switch__option theme-switch__option--light" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></span>
                            <span className="theme-switch__option theme-switch__option--dark" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"></path></svg></span>
                        </label>
                    </div>
                    <Link className="vh-btn new-event-btn" to="/events/new">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
                        <span className="sr-mobile">Neuer Termin</span>
                    </Link>
                </div>
            </header>

            {/* Large Calendar with events marked + selected event */}
            <div className="split">
                <MonthCalendar
                    month={month}
                    events={events}
                    activeEventId={id ? Number(id) : undefined}
                    onPreviousMonth={() => setMonth(m => addMonths(m, -1))}
                    onNextMonth={() => setMonth(m => addMonths(m, 1))}
                />
                <Outlet />
            </div>
        </main>
    );
}

export default Events;
