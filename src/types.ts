export type GroupId = 'vorstand' | 'kassenwart' | 'jugend'

export interface Member {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    street: string;
    postalCode: number;
    city: string;
    groups: GroupId[];
    role: 'member' | 'admin'
}

export interface ClubEvent {
    id: number;
    title: string;
    location: string;
    start: string;
    organizerId: number;
    attendeeIds: number[];
}