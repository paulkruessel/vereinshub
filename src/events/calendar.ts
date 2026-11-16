import type { ClubEvent } from '../types';

export type EventStatus = 'yes' | 'open' | 'past';

/** Erster Tag des Monats, 00:00 Uhr lokale Zeit */
export function startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

/** Verschiebt einen Monatsanfang um `amount` Monate (auch negativ) */
export function addMonths(monthStart: Date, amount: number): Date {
    return new Date(monthStart.getFullYear(), monthStart.getMonth() + amount, 1);
}

export function isSameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
}

/**
 * Alle Tage, die im Monatsraster angezeigt werden: volle Wochen von Montag bis Sonntag,
 * inklusive der Tage aus Vor- und Folgemonat, die die erste und letzte Woche auffüllen.
 */
export function getMonthGrid(monthStart: Date): Date[] {
    const year = monthStart.getFullYear();
    const month = monthStart.getMonth();

    // getDay(): 0 = Sonntag ... 6 = Samstag -> umrechnen auf 0 = Montag ... 6 = Sonntag
    const leadingDays = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = Math.ceil((leadingDays + daysInMonth) / 7) * 7;

    // new Date() rechnet Überläufe selbst um, z. B. Tag 0 = letzter Tag des Vormonats
    return Array.from({ length: totalCells }, (_, i) => new Date(year, month, 1 - leadingDays + i));
}

export function getEventStatus(event: ClubEvent, userId: number, now: Date): EventStatus {
    const end = event.endDate ?? event.startDate;
    if (end < now) return 'past';
    return event.attendeeIds.includes(userId) ? 'yes' : 'open';
}
