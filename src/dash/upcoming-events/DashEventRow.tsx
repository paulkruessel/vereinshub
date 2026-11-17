import { Link } from 'react-router-dom';
import type { ClubEvent } from '../../types';

interface DashEventRowProps {
    event: ClubEvent;
    isAttending: boolean;
}

function DashEventRow({ event, isAttending }: DashEventRowProps) {
    const weekday = event.startDate.toLocaleDateString('de-DE', { weekday: 'short' }).replace('.', '');
    const day = event.startDate.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
    const time = event.startDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

    return (
        <li className="vh-event-row">
            <time className="vh-event-row__date" dateTime={event.startDate.toISOString()}>
                {weekday}<span className="vh-event-row__day">{day}</span>
            </time>
            <div className="vh-event-row__body">
                <Link className="vh-event-row__title" to={`/events/${event.id}`}>{event.title}</Link>
                <span className="vh-event-row__meta">{time} · {event.location}</span>
            </div>
            {isAttending ? (
                <span className="vh-badge vh-badge--sm vh-badge--success"><span className="vh-badge__dot"></span>Zugesagt</span>
            ) : (
                <span className="vh-badge vh-badge--sm vh-badge--warning"><span className="vh-badge__dot"></span>Offen</span>
            )}
        </li>
    );
}

export default DashEventRow;
