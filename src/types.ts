export type GroupId = 'vorstand' | 'kassenwart' | 'jugend'

export const groupLabels: Record<GroupId, string> = {
    vorstand: 'Vorstand',
    kassenwart: 'Kassenwart',
    jugend: 'Jugend'
}

export interface Member {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    street: string;
    postalCode: string;
    city: string;
    dateJoined: Date;
    groups: GroupId[];
    role: 'member' | 'admin'
}

export interface ClubEvent {
    id: number;
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate?: Date
    organizerId: number;
    attendeeIds: number[];
}