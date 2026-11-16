import { Link } from 'react-router-dom';
import { groupLabels, type Member } from '../../types';

interface MemberRowProps {
    member: Member;
    isActive: boolean;
    isCurrentUser: boolean;
}

function MemberRow({ member, isActive, isCurrentUser }: MemberRowProps) {
    const initials = member.firstName.charAt(0) + member.lastName.charAt(0);
    const isAdmin = member.role === 'admin';

    const labels = member.groups.map(g => groupLabels[g]);
    if (isAdmin) labels.push('Admin');
    const mobileMeta = [...labels, member.city].join(' · ');

    return (
        <li>
            <Link
                className="vh-list-row member-row"
                to={`/members/${member.id}`}
                aria-current={isActive ? 'true' : undefined}
            >
                <span className="member-row__main">
                    <span className="vh-avatar" aria-hidden="true">{initials}</span>
                    <span className="vh-list-row__body">
                        <span className="vh-list-row__title">
                            {member.firstName} {member.lastName}
                            {isCurrentUser && <span className="member-row__you"> (du)</span>}
                        </span>
                        <span className="vh-list-row__meta">{member.email}</span>
                        <span className="vh-list-row__meta member-row__meta-mobile">{mobileMeta}</span>
                    </span>
                </span>
                <span className="member-row__group">
                    {member.groups.map(g => (
                        <span key={g} className="vh-badge vh-badge--sm">{groupLabels[g]}</span>
                    ))}
                    {isAdmin && <span className="vh-badge vh-badge--sm vh-badge--inverse">Admin</span>}
                    {labels.length === 0 && <span className="member-row__empty">-</span>}
                </span>
                <span className="member-row__city">{member.city}</span>
                <svg className="vh-icon vh-list-row__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
            </Link>
        </li>
    );
}

export default MemberRow;