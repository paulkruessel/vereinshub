import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import type { ClubEvent } from '../types';
import { addMonths, startOfMonth } from './calendar';
import MonthCalendar from './month-calendar/MonthCalendar';
import ThemeSwitch from '../theme-switch/ThemeSwitch';

interface EventsProps {
    events: ClubEvent[];
}

function Events({ events }: EventsProps) {
    const { id } = useParams();
    // Lazy Initializer: wird nur beim ersten Render ausgewertet.
    // Wird direkt /events/:id aufgerufen, startet der Kalender im Monat dieses Events.
    const [month, setMonth] = useState(() => {
        const selected = events.find(e => e.id === Number(id));
        return startOfMonth(selected ? selected.startDate : new Date());
    });

    // Ändert sich die ID in der URL (z. B. nach dem Anlegen eines Termins oder per Zurück-Button),
    // springt der Kalender in den Monat des ausgewählten Events.
    // State während des Renderns anpassen statt useEffect: siehe react.dev "You Might Not Need an Effect"
    const [prevId, setPrevId] = useState(id);
    if (id !== prevId) {
        setPrevId(id);
        const selected = events.find(e => e.id === Number(id));
        if (selected) setMonth(startOfMonth(selected.startDate));
    }

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
                    <ThemeSwitch />
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
