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
    },
    {
        id: 7,
        title: 'Vorstandssitzung November',
        description: 'Monatliche Sitzung des Vorstands: Haushaltsplanung 2027 und Vorbereitung der Weihnachtsfeier.',
        location: 'Vereinsheim',
        startDate: new Date('2026-11-19T19:30'),
        endDate: new Date('2026-11-19T21:30'),
        organizerId: 1,
        attendeeIds: [1, 4]
    },
    {
        id: 8,
        title: 'Lauftreff am See',
        description: 'Lockere Runde am Seeufer, etwa 8 km in gemütlichem Tempo. Jede Geschwindigkeit ist willkommen.',
        location: 'Parkplatz Seepromenade',
        startDate: new Date('2026-11-22T10:00'),
        endDate: new Date('2026-11-22T11:30'),
        organizerId: 5,
        attendeeIds: [5, 3, 6]
    },
    {
        id: 9,
        title: 'Kassenprüfung',
        description: 'Die Kassenprüfer sehen sich die Belege des laufenden Jahres an. Bitte offene Quittungen vorher abgeben.',
        location: 'Vereinsheim, Büro',
        startDate: new Date('2026-11-25T18:00'),
        endDate: new Date('2026-11-25T20:00'),
        organizerId: 2,
        attendeeIds: [2, 1]
    },
    {
        id: 10,
        title: 'Adventskranzbinden',
        description: 'Wir binden gemeinsam Adventskränze für das Vereinsheim und zum Mitnehmen. Tannengrün ist vorhanden, Deko gerne mitbringen.',
        location: 'Vereinsheim',
        startDate: new Date('2026-11-28T14:00'),
        endDate: new Date('2026-11-28T17:00'),
        organizerId: 4,
        attendeeIds: [4, 6, 3]
    },
    {
        id: 11,
        title: 'Jugendtraining Hallenfußball',
        description: 'Offenes Training für die Jugendgruppen mit kleinem Turnier zum Abschluss. Hallenschuhe nicht vergessen.',
        location: 'Sporthalle Musterstadt',
        startDate: new Date('2026-12-02T17:00'),
        endDate: new Date('2026-12-02T19:00'),
        organizerId: 4,
        attendeeIds: [4, 5]
    },
    {
        id: 12,
        title: 'Glühweinstand Weihnachtsmarkt',
        description: 'Der Verein betreibt einen Stand auf dem Weihnachtsmarkt. Wir suchen Helferinnen und Helfer für die Schichten.',
        location: 'Marktplatz Musterstadt',
        startDate: new Date('2026-12-05T15:00'),
        endDate: new Date('2026-12-05T21:00'),
        organizerId: 2,
        attendeeIds: [2, 1, 3, 5]
    },
    {
        id: 13,
        title: 'Nikolausfeier für Kinder',
        description: 'Der Nikolaus besucht die Jugendgruppen. Für jedes Kind gibt es ein kleines Säckchen.',
        location: 'Vereinsheim',
        startDate: new Date('2026-12-06T15:00'),
        endDate: new Date('2026-12-06T17:00'),
        organizerId: 6,
        attendeeIds: [6, 4]
    },
    {
        id: 14,
        title: 'Skatabend',
        description: 'Gemütlicher Kartenabend mit kleinen Preisen für die Bestplatzierten. Anfänger sind ausdrücklich willkommen.',
        location: 'Vereinsheim, Stube',
        startDate: new Date('2026-12-10T19:00'),
        endDate: new Date('2026-12-10T23:00'),
        organizerId: 5,
        attendeeIds: [5, 2]
    },
    {
        id: 15,
        title: 'Weihnachtsfeier',
        description: 'Jahresabschluss mit Essen, Rückblick auf das Vereinsjahr und Ehrungen langjähriger Mitglieder.',
        location: 'Gasthaus Zur Linde',
        startDate: new Date('2026-12-12T18:30'),
        endDate: new Date('2026-12-12T23:30'),
        organizerId: 1,
        attendeeIds: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 16,
        title: 'Vorstandssitzung Dezember',
        description: 'Letzte Sitzung des Jahres: Bilanz und Terminplanung für das erste Halbjahr 2027.',
        location: 'Vereinsheim',
        startDate: new Date('2026-12-17T19:30'),
        endDate: new Date('2026-12-17T21:00'),
        organizerId: 1,
        attendeeIds: [1, 4]
    },
    {
        id: 17,
        title: 'Winterwanderung zwischen den Jahren',
        description: 'Rund 10 km durch den Wald mit Einkehr in der Hütte. Bei Schnee bitte an passende Schuhe denken.',
        location: 'Treffpunkt Bahnhof Konstanz',
        startDate: new Date('2026-12-28T10:00'),
        endDate: new Date('2026-12-28T15:00'),
        organizerId: 4,
        attendeeIds: [4, 3, 6]
    },
    {
        id: 18,
        title: 'Silvesterlauf',
        description: 'Traditioneller 5-km-Lauf zum Jahresende, anschließend Sekt und Berliner im Vereinsheim.',
        location: 'Sportplatz Musterstadt',
        startDate: new Date('2026-12-31T11:00'),
        endDate: new Date('2026-12-31T13:00'),
        organizerId: 5,
        attendeeIds: [5, 1, 2, 3]
    },
    {
        id: 19,
        title: 'Neujahrsempfang',
        description: 'Wir stoßen auf das neue Jahr an. Der Vorstand stellt die Pläne für 2027 vor.',
        location: 'Vereinsheim',
        startDate: new Date('2027-01-06T11:00'),
        endDate: new Date('2027-01-06T13:00'),
        organizerId: 1,
        attendeeIds: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 20,
        title: 'Christbaumsammelaktion',
        description: 'Die Jugendgruppen sammeln gegen eine Spende die Weihnachtsbäume im Ort ein. Wir brauchen Fahrer mit Anhänger.',
        location: 'Vereinsheim, Hof',
        startDate: new Date('2027-01-09T09:00'),
        endDate: new Date('2027-01-09T13:00'),
        organizerId: 6,
        attendeeIds: [6, 4, 2]
    },
    {
        id: 21,
        title: 'Lauftreff am See',
        description: 'Erster Lauftreff im neuen Jahr, etwa 8 km. Bei Glätte laufen wir eine kürzere Runde.',
        location: 'Parkplatz Seepromenade',
        startDate: new Date('2027-01-10T10:00'),
        endDate: new Date('2027-01-10T11:30'),
        organizerId: 5,
        attendeeIds: [5, 3]
    },
    {
        id: 22,
        title: 'Vorstandssitzung Januar',
        description: 'Vorbereitung der Mitgliederversammlung im Frühjahr und Planung des Sommerfests.',
        location: 'Vereinsheim',
        startDate: new Date('2027-01-14T19:30'),
        endDate: new Date('2027-01-14T21:30'),
        organizerId: 1,
        attendeeIds: [1, 4]
    },
    {
        id: 23,
        title: 'Erste-Hilfe-Auffrischung',
        description: 'Kurs für Übungsleitende und alle Interessierten. Die Teilnahme wird bescheinigt.',
        location: 'Vereinsheim, Seminarraum',
        startDate: new Date('2027-01-16T09:00'),
        endDate: new Date('2027-01-16T13:00'),
        organizerId: 2,
        attendeeIds: [2, 4]
    },
    {
        id: 24,
        title: 'Hallenturnier Jugend',
        description: 'Turnier der Jugendgruppen gegen die Nachbarvereine. Zuschauer und Kuchenspenden sind herzlich willkommen.',
        location: 'Sporthalle Musterstadt',
        startDate: new Date('2027-01-23T10:00'),
        endDate: new Date('2027-01-23T16:00'),
        organizerId: 4,
        attendeeIds: [4, 6, 5]
    },
    {
        id: 25,
        title: 'Schlittschuhlaufen',
        description: 'Gemeinsamer Ausflug in die Eishalle für alle Altersgruppen. Schlittschuhe können vor Ort ausgeliehen werden.',
        location: 'Eishalle Konstanz',
        startDate: new Date('2027-01-24T14:00'),
        endDate: new Date('2027-01-24T17:00'),
        organizerId: 6,
        attendeeIds: [6, 3]
    },
    {
        id: 26,
        title: 'Arbeitseinsatz Winter',
        description: 'Geräteraum ausmisten, Kleinreparaturen im Vereinsheim und Inventur. Für Suppe ist gesorgt.',
        location: 'Vereinsheim',
        startDate: new Date('2027-01-30T09:00'),
        endDate: new Date('2027-01-30T13:00'),
        organizerId: 2,
        attendeeIds: [2, 1, 5]
    }
];
