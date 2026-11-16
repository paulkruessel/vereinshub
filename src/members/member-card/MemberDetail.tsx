import { useParams } from "react-router-dom";
import { members } from "../../data/members";
import type { ClubEvent } from "../../types";
import MemberCard from "./MemberCard";

interface MemberDetailProps {
    events: ClubEvent[];
}

function MemberDetail({ events }: MemberDetailProps) {
    const { id } = useParams();
    const member = members.find(m => m.id === Number(id));
    if (!member) return <p>Mitglied nicht gefunden</p>; // TODO: Hier 404 Page anbinden
    return <MemberCard member={member} events={events} />;
}

export default MemberDetail;