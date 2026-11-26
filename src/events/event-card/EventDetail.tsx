import { useParams } from 'react-router-dom';
import { members } from '../../data/members';
import { CURRENT_USER_ID } from '../../data/currentUser';
import type { ClubEvent } from '../../types';
import { getEventStatus } from '../calendar';
import EventCard from './EventCard';

interface EventDetailProps {
    events: ClubEvent[];
    onToggleAttendance: (eventId: number) => void;
}

function EventDetail({ events, onToggleAttendance }: EventDetailProps) {
    const { id } = useParams();
    const event = events.find(e => e.id === Number(id));
    if (!event) return <p>Veranstaltung nicht gefunden</p>; // TODO: Hier 404 Page anbinden

    const organizer = members.find(m => m.id === event.organizerId);
    const attendees = members.filter(m => event.attendeeIds.includes(m.id));
    const status = getEventStatus(event, CURRENT_USER_ID, new Date());

    return <EventCard event={event} status={status} organizer={organizer} attendees={attendees}
        onToggleAttendance={() => onToggleAttendance(event.id)} />;
}

export default EventDetail;