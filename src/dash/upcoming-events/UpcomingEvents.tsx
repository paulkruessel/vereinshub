import { Link } from 'react-router-dom';
import type { ClubEvent } from '../../types';
import DashEventRow from './DashEventRow';

interface UpcomingEventsProps {
    events: ClubEvent[];
    currentUserId: number;
}

function UpcomingEvents({ events, currentUserId }: UpcomingEventsProps) {
    return (
        <section className="vh-tile upcoming" aria-labelledby="upcoming-title">
            <div className="vh-tile__head">
                <h2 className="vh-tile__title" id="upcoming-title">Demnächst</h2>
                <Link className="vh-tile__link" to="/events">Alle</Link>
            </div>
            {events.length > 0 ? (
                <ul className="vh-event-list">
                    {events.map(event => (
                        <DashEventRow
                            key={event.id}
                            event={event}
                            isAttending={event.attendeeIds.includes(currentUserId)}
                        />
                    ))}
                </ul>
            ) : (
                <div className="vh-empty">
                    <p className="vh-empty__title">Keine weiteren Termine</p>
                    <p className="vh-empty__text">Danach steht noch nichts im Kalender.</p>
                </div>
            )}
        </section>
    );
}

export default UpcomingEvents;
