import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { ClubEvent } from '../../types';
import { CURRENT_USER_ID } from '../../data/currentUser';
import { toDateInputValue } from '../calendar';

interface EventFormProps {
    onCreate: (data: Omit<ClubEvent, 'id'>) => ClubEvent;
}

function EventForm({ onCreate }: EventFormProps) {
    const navigate = useNavigate();

    // Controlled Inputs: jedes Feld spiegelt genau einen State-Wert
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(() => toDateInputValue(new Date()));
    const [startTime, setStartTime] = useState('18:00');
    const [endTime, setEndTime] = useState('20:00');
    const [description, setDescription] = useState('');
    const [error, setError] = useState<string | null>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault(); // kein Seiten-Reload, wir verarbeiten das Formular selbst

        if (title.trim() === '' || location.trim() === '') {
            setError('Bitte gib einen Titel und einen Treffpunkt an.');
            return;
        }

        // "2026-12-05" + "18:00" -> lokale Zeit (mit Uhrzeit, daher kein UTC-Versatz)
        const startDate = new Date(`${date}T${startTime}`);
        const endDate = new Date(`${date}T${endTime}`);

        if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
            setError('Bitte gib ein gültiges Datum und gültige Uhrzeiten an.');
            return;
        }
        if (endDate <= startDate) {
            setError('Das Ende muss nach dem Beginn liegen.');
            return;
        }

        const created = onCreate({
            title: title.trim(),
            location: location.trim(),
            description: description.trim(),
            startDate,
            endDate,
            organizerId: CURRENT_USER_ID,
            attendeeIds: [CURRENT_USER_ID], // Veranstalter ist immer auch Teilnehmer
        });

        navigate(`/events/${created.id}`);
    }

    return (
        <article className="vh-detail split__side event-detail" aria-labelledby="event-form-title">
            <div className="vh-detail__top">
                <h2 className="vh-detail__title" id="event-form-title">Neuer Termin</h2>
                <Link className="vh-btn vh-btn--ghost vh-btn--icon vh-detail__close" to="/events" aria-label="Formular schließen">
                    <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </Link>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="event-title">Titel</label>
                    <input id="event-title" name="title" type="text" required
                        value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="form-field">
                    <label htmlFor="event-location">Treffpunkt</label>
                    <input id="event-location" name="location" type="text" required
                        value={location} onChange={e => setLocation(e.target.value)} />
                </div>

                <div className="form-field">
                    <label htmlFor="event-date">Datum</label>
                    <input id="event-date" name="date" type="date" required
                        value={date} onChange={e => setDate(e.target.value)} />
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="event-start">Beginn</label>
                        <input id="event-start" name="startTime" type="time" required
                            value={startTime} onChange={e => setStartTime(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="event-end">Ende</label>
                        <input id="event-end" name="endTime" type="time" required
                            value={endTime} onChange={e => setEndTime(e.target.value)} />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="event-description">Beschreibung</label>
                    <textarea id="event-description" name="description" rows={4}
                        value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                {error && <p className="form-error" role="alert">{error}</p>}

                <div className="form-actions">
                    <button type="submit" className="vh-btn">Termin anlegen</button>
                    <Link to="/events">Abbrechen</Link>
                </div>
            </form>
        </article>
    );
}

export default EventForm;
