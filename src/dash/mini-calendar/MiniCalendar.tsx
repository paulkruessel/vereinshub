import { Link } from 'react-router-dom';
import type { ClubEvent } from '../../types';
import { getWeekdayOffset, isSameDay, startOfMonth } from '../../events/calendar';

interface MiniCalendarProps {
    events: ClubEvent[];
    today: Date;
}

const weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

function MiniCalendar({ events, today }: MiniCalendarProps) {
    const month = startOfMonth(today);
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1));
    const title = month.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
    const monthName = month.toLocaleDateString('de-DE', { month: 'long' });

    return (
        <section className="vh-tile calendar" aria-labelledby="calendar-title">
            <h2 className="vh-tile__title" id="calendar-title">{title}</h2>
            <ol className="calendar__weekdays" aria-hidden="true">
                {weekdays.map(day => <li key={day}>{day}</li>)}
            </ol>
            <ol className="calendar__days">
                {days.map((day, index) => {
                    const dayEvents = events
                        .filter(e => isSameDay(e.startDate, day))
                        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
                    const isToday = isSameDay(day, today);

                    const classes = [];
                    if (isToday) classes.push('is-today');
                    if (dayEvents.length > 0) classes.push('has-event');

                    return (
                        <li
                            key={day.getDate()}
                            className={classes.join(' ') || undefined}
                            style={index === 0 ? { gridColumnStart: getWeekdayOffset(month) + 1 } : undefined}
                        >
                            {dayEvents.length > 0 ? (
                                <Link
                                    to={`/events/${dayEvents[0].id}`}
                                    aria-label={`${day.getDate()}. ${monthName}: ${dayEvents.map(e => e.title).join(', ')}`}
                                    aria-current={isToday ? 'date' : undefined}
                                >
                                    {day.getDate()}
                                </Link>
                            ) : (
                                <span aria-current={isToday ? 'date' : undefined}>{day.getDate()}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}

export default MiniCalendar;
