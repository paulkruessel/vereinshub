import { Link } from 'react-router-dom';
import type { ClubEvent } from '../../types';
import { CURRENT_USER_ID } from '../../data/currentUser';
import { getEventStatus, getMonthGrid, isSameDay } from '../calendar';

interface MonthCalendarProps {
    month: Date;             // erster Tag des angezeigten Monats
    events: ClubEvent[];
    activeEventId?: number;
    onPreviousMonth: () => void;
    onNextMonth: () => void;
}

const weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

function MonthCalendar({ month, events, activeEventId, onPreviousMonth, onNextMonth }: MonthCalendarProps) {
    const today = new Date();
    const days = getMonthGrid(month);
    const title = month.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });

    return (
        <section className="vh-tile month-calendar split__main" aria-labelledby="calendar-title">
            <div className="month-calendar__head">
                <div className="month-calendar__nav">
                    <button type="button" className="vh-btn vh-btn--ghost vh-btn--icon" onClick={onPreviousMonth} aria-label="Vorheriger Monat">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <h2 className="month-calendar__title" id="calendar-title">{title}</h2>
                    <button type="button" className="vh-btn vh-btn--ghost vh-btn--icon" onClick={onNextMonth} aria-label="Nächster Monat">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>
                <ul className="vh-legend">
                    <li><span className="vh-status-dot vh-status-dot--yes"></span>Zugesagt</li>
                    <li><span className="vh-status-dot vh-status-dot--open"></span>Offen</li>
                    <li><span className="vh-status-dot vh-status-dot--past"></span>Vergangen</li>
                </ul>
            </div>

            <ol className="month-calendar__weekdays" aria-hidden="true">
                {weekdays.map(day => <li key={day}>{day}</li>)}
            </ol>

            <ol className="month-calendar__grid">
                {days.map(day => {
                    const isOutside = day.getMonth() !== month.getMonth();
                    const isToday = isSameDay(day, today);
                    const dayEvents = events
                        .filter(e => isSameDay(e.startDate, day))
                        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

                    const classes = ['month-calendar__day'];
                    if (isOutside) classes.push('is-outside');
                    if (isToday) classes.push('is-today');

                    return (
                        <li key={day.toDateString()} className={classes.join(' ')}>
                            <span className="month-calendar__num" aria-current={isToday ? 'date' : undefined}>
                                {day.getDate()}
                            </span>
                            {dayEvents.length > 0 && (
                                <ul className="month-calendar__events">
                                    {dayEvents.map(e => (
                                        <li key={e.id}>
                                            <Link
                                                className={`month-calendar__event month-calendar__event--${getEventStatus(e, CURRENT_USER_ID, today)}`}
                                                to={`/events/${e.id}`}
                                                aria-current={e.id === activeEventId ? 'true' : undefined}
                                            >
                                                <span className="month-calendar__dot"></span>
                                                <span className="month-calendar__label">
                                                    <time dateTime={e.startDate.toISOString()}>
                                                        {e.startDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                                                    </time>{' '}
                                                    {e.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}

export default MonthCalendar;
