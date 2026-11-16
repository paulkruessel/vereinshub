import type { ClubEvent } from "../types";

export const clubEvents: ClubEvent[] = [
    {
        id: 1,
        title: 'Herbstwanderung zum Bodanrück',
        location: 'Treffpunkt Bahnhof Konstanz Gleis 1',
        startDate: new Date('2026-10-24T10:00'),
        endDate: new Date('2026-10-24T16:00'),
        organizerId: 4,
        attendeeIds: [1, 2, 3, 4]
    },
    {
        id: 2,
        title: 'Mitgliederversammlung 2026',
        location: 'Vereinsheim',
        startDate: new Date('2026-10-30T19:00'),
        endDate: new Date('2026-10-30T21:00'),
        organizerId: 2,
        attendeeIds: [1, 2, 4]
    },
    {
        id: 3,
        title: 'Laternenlauf mit den Jugendgruppen',
        location: 'Schulhof der Grundschule Musterstadt',
        startDate: new Date('2026-11-14T18:00'),
        endDate: new Date('2026-11-14T19:30'),
        organizerId: 4,
        attendeeIds: [4, 6]
    },
    {
        id: 4,
        title: 'Sommerfest 2026',
        location: 'Vereinsgelände',
        startDate: new Date('2026-09-12T14:00'),
        endDate: new Date('2026-09-12T22:00'),
        organizerId: 1,
        attendeeIds: [1, 2, 5]
    },
    {
        id: 5,
        title: 'Arbeitseinsatz Vereinsheim',
        location: 'Vereinsheim',
        startDate: new Date('2026-10-05T09:00'),
        endDate: new Date('2026-10-05T13:00'),
        organizerId: 2,
        attendeeIds: [1, 2]
    },
    {
        id: 6,
        title: 'Hallenputz',
        location: 'Sporthalle Musterstadt',
        startDate: new Date('2026-10-27T18:00'),
        endDate: new Date('2026-10-27T20:00'),
        organizerId: 1,
        attendeeIds: [1, 4]
    }
];
