import { Link } from "react-router-dom";
import { groupLabels, type ClubEvent, type Member } from "../../types";

interface MemberCardProps {
    member: Member;
    events: ClubEvent[]
}
function MemberCard({ member, events }: MemberCardProps) {
    const initials = member.firstName.charAt(0) + member.lastName.charAt(0);
    const attendingEvents: ClubEvent[] = events.filter(e => e.attendeeIds.includes(member.id));

    return (
        <article className="vh-detail split__side" aria-labelledby="member-name">
            <div className="vh-detail__top">
            <div className="member-profile__head">
                <span className="vh-avatar vh-avatar--green member-profile__avatar" aria-hidden="true">{ initials }</span>
                <div className="vh-detail__heading">
                <h2 className="vh-detail__title" id="member-name">{ member.firstName + ' ' + member.lastName }</h2>
                <p className="vh-detail__subtitle">{member.groups.map(g => groupLabels[g]).join(', ')} · Mitglied seit <time dateTime={ member.dateJoined.getFullYear().toString() }>{ member.dateJoined.getFullYear().toString() }</time></p>
                </div>
            </div>
            <a className="vh-btn vh-btn--ghost vh-btn--icon vh-detail__close" href="/members/" aria-label="Profil schließen"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"></path></svg></a>
            </div>
            <address>
            <dl className="vh-dl">
                <div><dt>E-Mail</dt><dd><a href={ 'mailto:' + member.email }>{ member.email }</a></dd></div>
                {member.phone && <div><dt>Telefon</dt><dd><a href={ 'tel:' + member.phone }>{ member.phone }</a></dd></div>}
                <div><dt>Adresse</dt><dd>{member.street}<br />{member.postalCode + ' ' + member.city}</dd></div>
            </dl>
            </address>
            <section className="vh-detail__section" aria-labelledby="member-events">
            <h3 className="vh-detail__label" id="member-events">Zugesagt</h3>
            {attendingEvents.map(e => 
                <Link key={e.id} className="mini-row" to={'/events/' + e.id} ><time dateTime={e.startDate.toISOString()}>{e.startDate.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' })}</time> {e.title}</Link>
            )}
            </section>
            <a className="vh-btn vh-btn--block" href={ 'mailto:' + member.email }>E-Mail schreiben</a>
        </article>
    )
}

export default MemberCard;