import { Link } from 'react-router-dom';
import type { ClubEvent, Member } from '../../types';
import { members } from '../../data/members';
import { daysUntil } from '../../events/calendar';

interface DashCountdownProps {
    event: ClubEvent;
    currentUser: Member;
}

const MAX_AVATARS = 3;

function getInitials(member: Member): string {
    return member.firstName.charAt(0) + member.lastName.charAt(0);
}

function getCountdownLabel(days: number): string {
    if (days === 0) return 'Der nächste Termin ist heute';
    if (days === 1) return 'Tag bis zum nächsten Termin';
    return 'Tage bis zum nächsten Termin';
}

function DashCountdown({ event, currentUser }: DashCountdownProps) {
    const days = daysUntil(event.startDate, new Date());
    const attendees = members.filter(m => event.attendeeIds.includes(m.id));
    const visibleAttendees = attendees.slice(0, MAX_AVATARS);
    const hiddenAttendees = attendees.length - visibleAttendees.length;
    const isAttending = event.attendeeIds.includes(currentUser.id);

    const weekday = event.startDate.toLocaleDateString('de-DE', { weekday: 'short' }).replace('.', '');
    const day = event.startDate.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
    const time = event.startDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

    return (
        <article className="vh-tile vh-tile--raised next-event" aria-labelledby="next-event-title">
            <p className="next-event__countdown">
                <span className="vh-countdown">{days}</span>
                <span className="next-event__countdown-label">{getCountdownLabel(days)}</span>
            </p>
            <div className="next-event__body">
                <time className="vh-date" dateTime={event.startDate.toISOString()}>{`${weekday} ${day} · ${time}`}</time>
                <h2 className="next-event__title" id="next-event-title">
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </h2>
                <div className="next-event__meta">
                    {attendees.length > 0 && (
                        <p className="vh-avatar-stack">
                            <span className="vh-sr">
                                {attendees.length} {attendees.length === 1 ? 'Mitglied hat' : 'Mitglieder haben'} zugesagt:
                            </span>
                            {visibleAttendees.map(m => (
                                <span key={m.id} className="vh-avatar vh-avatar--sm" title={`${m.firstName} ${m.lastName}`}>
                                    {getInitials(m)}
                                </span>
                            ))}
                            {hiddenAttendees > 0 && (
                                <span className="vh-avatar vh-avatar--sm vh-avatar--count">+{hiddenAttendees}</span>
                            )}
                        </p>
                    )}
                    {isAttending ? (
                        <span className="vh-badge vh-badge--success"><span className="vh-badge__dot"></span>Du bist dabei</span>
                    ) : (
                        <span className="vh-badge vh-badge--warning"><span className="vh-badge__dot"></span>Offen</span>
                    )}
                </div>
            </div>
        </article>
    );
}

export default DashCountdown;
