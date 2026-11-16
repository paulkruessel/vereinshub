import type { ClubEvent } from "../types";

export const clubEvents: ClubEvent[] = [
    {
        id: 1,
        title: 'Herbstwanderung zum Bodanrück',
        description: 'Rund 12 km über den Bodanrück mit Einkehr am Mittag. Festes Schuhwerk und Regenjacke einpacken.',
        location: 'Treffpunkt Bahnhof Konstanz Gleis 1',
        startDate: new Date('2026-10-24T10:00'),
        endDate: new Date('2026-10-24T16:00'),
        organizerId: 4,
        attendeeIds: [1, 2, 3, 4]
    },
    {
        id: 2,
        title: 'Mitgliederversammlung 2026',
        description: 'Jahreshauptversammlung mit Bericht des Vorstands, Kassenbericht und Wahl der Kassenprüfer. Anträge bitte bis zum 23.10. an den Vorstand.',
        location: 'Vereinsheim',
        startDate: new Date('2026-10-30T19:00'),
        endDate: new Date('2026-10-30T21:00'),
        organizerId: 2,
        attendeeIds: [1, 2, 4]
    },
    {
        id: 3,
        title: 'Laternenlauf mit den Jugendgruppen',
        description: 'Gemeinsamer Laternenumzug durchs Dorf mit anschließendem Kinderpunsch am Vereinsheim. Laternen können vorher vor Ort gebastelt werden.',
        location: 'Schulhof der Grundschule Musterstadt',
        startDate: new Date('2026-11-14T18:00'),
        endDate: new Date('2026-11-14T19:30'),
        organizerId: 4,
        attendeeIds: [4, 6]
    },
    {
        id: 4,
        title: 'Sommerfest 2026',
        description: 'Grillen, Kinderspiele und Livemusik auf dem Vereinsgelände. Salate und Kuchen wurden über die Liste in der Dateiablage abgesprochen.',
        location: 'Vereinsgelände',
        startDate: new Date('2026-09-12T14:00'),
        endDate: new Date('2026-09-12T22:00'),
        organizerId: 1,
        attendeeIds: [1, 2, 5]
    },
    {
        id: 5,
        title: 'Arbeitseinsatz Vereinsheim',
        description: 'Zaun streichen, die Hütte winterfest machen und Laub rechen. Werkzeug ist vorhanden, Arbeitshandschuhe bitte selbst mitbringen.',
        location: 'Vereinsheim',
        startDate: new Date('2026-10-05T09:00'),
        endDate: new Date('2026-10-05T13:00'),
        organizerId: 2,
        attendeeIds: [1, 2]
    },
    {
        id: 6,
        title: 'Hallenputz',
        description: 'Geräteraum aufräumen und alle Bälle prüfen, bevor die Hallensaison startet. Dauert etwa zwei Stunden.',
        location: 'Sporthalle Musterstadt',
        startDate: new Date('2026-10-27T18:00'),
        endDate: new Date('2026-10-27T20:00'),
        organizerId: 1,
        attendeeIds: [1, 4]
    }
];
