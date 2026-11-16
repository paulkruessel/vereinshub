import { useParams } from "react-router-dom";
import { members } from "../../data/members";
import { clubEvents } from "../../data/clubEvents";
import MemberCard from "./MemberCard";

function MemberDetail() {
    const { id } = useParams();
    const member = members.find(m =>  m.id === Number(id));
    if (!member) return <p>Mitglied nicht gefunden</p> // TODO: Hier 404 Page anbinden
    return <MemberCard member={member} events={clubEvents} />;
}

export default MemberDetail;