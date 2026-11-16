import type { GroupId, Member } from '../types';

export type MemberFilter = 'alle' | 'admin' | GroupId;

export function matchesFilter(member: Member, filter: MemberFilter): boolean {
    if (filter === 'alle') return true;
    if (filter === 'admin') return member.role === 'admin';
    return member.groups.includes(filter);
}

function matchesSearchTerm(member: Member, normalizedQuery: string): boolean {
    const haystack = `${member.firstName} ${member.lastName} ${member.email} ${member.city}`.toLowerCase();
    return haystack.includes(normalizedQuery);
}

export function filterMembers(members: Member[], searchTerm: string, filter: MemberFilter): Member[] {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return members
        .filter(m => matchesFilter(m, filter))
        .filter(m => normalizedQuery === '' || matchesSearchTerm(m, normalizedQuery));
}