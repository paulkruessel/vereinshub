import { Link } from 'react-router-dom';
import type { ClubEvent, Member } from '../../types';
import type { EventStatus } from '../calendar';

interface EventCardProps {
    event: ClubEvent;
    status: EventStatus;
    organizer?: Member;
    attendees: Member[];
}

const statusBadges: Record<EventStatus, { label: string; className: string }> = {
    yes: { label: 'Du bist dabei', className: 'vh-badge--success' },
    open: { label: 'Offen', className: 'vh-badge--warning' },
    past: { label: 'Vergangen', className: '' },
};

function getInitials(member: Member): string {
    return member.firstName.charAt(0) + member.lastName.charAt(0);
}

function formatTime(date: Date): string {
    return date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
}

function EventCard({ event, status, organizer, attendees }: EventCardProps) {
    const badge = statusBadges[status];
    const timeRange = event.endDate
        ? `${formatTime(event.startDate)} - ${formatTime(event.endDate)} Uhr`
        : `ab ${formatTime(event.startDate)} Uhr`;
    const isPast = status === 'past';

    return (
        <article className="vh-detail split__side event-detail" aria-labelledby="event-title">
            <div className="vh-detail__top">
                <span className={`vh-badge vh-badge--sm ${badge.className}`}>
                    <span className="vh-badge__dot"></span>{badge.label}
                </span>
                <Link className="vh-btn vh-btn--ghost vh-btn--icon vh-detail__close" to="/events" aria-label="Details schließen">
                    <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </Link>
            </div>

            <div className="vh-detail__heading">
                <time className="vh-detail__eyebrow" dateTime={event.startDate.toISOString()}>
                    {event.startDate.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <h2 className="vh-detail__title" id="event-title">{event.title}</h2>
            </div>

            <dl className="vh-dl vh-dl--icons">
                <div>
                    <dt><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg><span className="vh-sr">Uhrzeit</span></dt>
                    <dd>{timeRange}</dd>
                </div>
                <div>
                    <dt><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg><span className="vh-sr">Treffpunkt</span></dt>
                    <dd>{event.location}</dd>
                </div>
                {organizer && (
                    <div>
                        <dt><span className="vh-avatar vh-avatar--sm" aria-hidden="true">{getInitials(organizer)}</span><span className="vh-sr">Organisation</span></dt>
                        <dd>Organisiert von <Link to={`/members/${organizer.id}`}>{organizer.firstName} {organizer.lastName}</Link></dd>
                    </div>
                )}
            </dl>

            <p className="event-detail__desc">{event.description}</p>

            <section className="vh-detail__section" aria-label="Zusagen">
                <p className="event-detail__attendees">
                    <span>{attendees.length} {isPast ? 'waren dabei' : attendees.length === 1 ? 'Zusage' : 'Zusagen'}</span>
                    <span className="vh-avatar-stack">
                        {attendees.map(m => (
                            <span key={m.id} className="vh-avatar" title={`${m.firstName} ${m.lastName}`}>{getInitials(m)}</span>
                        ))}
                    </span>
                </p>
            </section>
        </article>
    );
}

export default EventCard;