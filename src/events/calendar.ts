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
    const leadingDays = getWeekdayOffset(monthStart);
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

/** Datum im Format "YYYY-MM-DD" in lokaler Zeit, z. B. für <input type="date"> */
export function toDateInputValue(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() ist 0-basiert
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function getUpcomingEvents(events: ClubEvent[], now: Date): ClubEvent[] {
    return events
        .filter(e => e.startDate >= now)
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
}

export function daysUntil(date: Date, now: Date): number {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}

export function getWeekdayOffset(monthStart: Date): number {
    return (new Date(monthStart.getFullYear(), monthStart.getMonth(), 1).getDay() + 6) % 7;
}

export function getPastEvents(events: ClubEvent[], now: Date): ClubEvent[] {
    return events
        .filter(e => (e.endDate ?? e.startDate) < now)
        .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}
