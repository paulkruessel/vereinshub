import { Link } from 'react-router-dom';
import type { ClubEvent } from '../../types';
import { members } from '../../data/members';
import { toDateInputValue } from '../../events/calendar';

interface ClubNewsProps {
    events: ClubEvent[];
}

function ClubNews({ events }: ClubNewsProps) {
    return (
        <section className="vh-tile posts" aria-labelledby="posts-title">
            <div className="vh-tile__head">
                <h2 className="vh-tile__title" id="posts-title">Aus dem Verein</h2>
                <Link className="vh-tile__link" to="/events">Alle Termine</Link>
            </div>
            {events.length > 0 ? (
                events.map(event => {
                    const organizer = members.find(m => m.id === event.organizerId);
                    const attendees = event.attendeeIds.length;

                    return (
                        <article key={event.id} className="post">
                            <span className="vh-avatar" aria-hidden="true">
                                {organizer ? organizer.firstName.charAt(0) + organizer.lastName.charAt(0) : '?'}
                            </span>
                            <div className="post__body">
                                <header className="post__meta">
                                    {organizer && (
                                        <>
                                            <Link className="post__author" to={`/members/${organizer.id}`}>
                                                {organizer.firstName} {organizer.lastName}
                                            </Link>{' '}
                                            zu{' '}
                                        </>
                                    )}
                                    <Link className="post__event" to={`/events/${event.id}`}>{event.title}</Link> ·{' '}
                                    <time dateTime={toDateInputValue(event.startDate)}>
                                        {event.startDate.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })}
                                    </time>
                                </header>
                                <p className="post__text">{event.description}</p>
                                <footer>
                                    <Link className="post__comments" to={`/events/${event.id}`}>
                                        {attendees} {attendees === 1 ? 'war' : 'waren'} dabei
                                    </Link>
                                </footer>
                            </div>
                        </article>
                    );
                })
            ) : (
                <div className="vh-empty">
                    <p className="vh-empty__title">Noch nichts los</p>
                    <p className="vh-empty__text">Hier erscheinen vergangene Termine.</p>
                </div>
            )}
        </section>
    );
}

export default ClubNews;
