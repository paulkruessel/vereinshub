import type { Member } from "../types";

export const members: Member[] = [
    {
        id: 1,
        firstName: 'Anna',
        lastName: 'Schmidt',
        email: 'anna.schmidt@example.org',
        phone: '+49 151 000 000 01',
        street: 'Musterweg 1',
        postalCode: '78462',
        city: 'Konstanz',
        dateJoined: new Date('2019-01-01T00:00'),
        groups: ['vorstand'],
        role: 'member'
    },
    {
        id: 2,
        firstName: 'Jonas',
        lastName: 'Weber',
        email: 'jonas.weber@example.org',
        phone: '+49 151 000 000 02',
        street: 'Musterweg 2',
        postalCode: '78476',
        city: 'Allensbach',
        dateJoined: new Date('2021-01-01T00:00'),
        groups: ['kassenwart'],
        role: 'member'
    },
    {
        id: 3,
        firstName: 'Paul',
        lastName: 'Krüssel',
        email: 'paul.kruessel@example.org',
        phone: '+49 151 000 000 03',
        street: 'Musterweg 3',
        postalCode: '78462',
        city: 'Konstanz',
        dateJoined: new Date('2023-01-01T00:00'),
        groups: [],
        role: 'admin'
    },
    {
        id: 4,
        firstName: 'Lena',
        lastName: 'Hoffmann',
        email: 'lena.hoffmann@example.org',
        phone: '+49 151 000 000 03',
        street: 'Musterweg 3',
        postalCode: '78462',
        city: 'Konstanz',
        dateJoined: new Date('2017-01-01T00:00'),
        groups: ['vorstand'],
        role: 'member'
    },
    {
        id: 5,
        firstName: 'Mehmet',
        lastName: 'Yilmaz',
        email: 'mehmet.yilmaz@example.org',
        phone: '+49 151 000 000 05',
        street: 'Musterweg 5',
        postalCode: '78462',
        city: 'Konstanz',
        dateJoined: new Date('2024-01-01T00:00'),
        groups: [],
        role: 'member'
    },
    {
        id: 6,
        firstName: 'Sophia',
        lastName: 'Braun',
        email: 'sophia.braun@example.org',
        phone: '+49 151 000 000 06',
        street: 'Musterweg 6',
        postalCode: '78224',
        city: 'Singen',
        dateJoined: new Date('2025-01-01T00:00'),
        groups: [],
        role: 'member'
    },
]