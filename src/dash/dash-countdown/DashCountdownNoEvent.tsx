import { Link } from 'react-router-dom';

function DashCountdownNoEvent() {
    return (
        <article className="vh-tile vh-tile--raised next-event" aria-labelledby="next-event-title">
            <div className="next-event__body">
                <p className="vh-date">Nächster Termin</p>
                <h2 className="next-event__title" id="next-event-title">Kein Termin geplant</h2>
                <div className="next-event__meta">
                    <Link className="vh-btn" to="/events/new">Termin anlegen</Link>
                </div>
            </div>
        </article>
    );
}

export default DashCountdownNoEvent;
