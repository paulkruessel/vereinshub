# Vereinshub

Repository: https://github.com/paulkruessel/vereinshub

## Projektidee

Vereinshub ist eine Web-App für kleine und mittlere Vereine, die ihre Mitgliederverwaltung, Veranstaltungsplanung und Dokumentenablage bisher über E-Mail-Verteiler, Excel-Listen und Messenger-Gruppen organisieren. Mitglieder finden an einem Ort die Kontaktdaten anderer Mitglieder, melden sich zu Veranstaltungen an, diskutieren darüber und greifen auf Protokolle und andere Vereinsdokumente zu.

## Rollen

| Rolle | Rechte |
|---|---|
| **Mitglied** | Eigenes Profil pflegen, Mitglieder suchen, eigene Veranstaltungen anlegen und bearbeiten, sich zu Veranstaltungen anmelden, kommentieren, Dateien ansehen und hochladen |
| **Admin** | Alle Rechte eines Mitglieds, zusätzlich: neue Mitglieder per Registrierungslink einladen, fremde Veranstaltungen, Kommentare und Dateien bearbeiten oder löschen, Gruppen verwalten |

**Gruppen:** Der Admin kann Gruppen wie *Vorstand* oder *Kassenwart* anlegen und Mitgliedern zuweisen. Gruppen können später z. B. als Zielgruppe für Einladungen oder für Ordner in der Dateiablage genutzt werden.

## Features

- **Login und Registrierung:** Nutzer melden sich mit E-Mail und Passwort an. Neue Mitglieder registrieren sich über einen Einladungslink, den der Admin verschickt.
- **Mitgliederliste:** Mitglieder legen ein eigenes Profil mit Namen, Kontaktinfos und Adresse an und finden andere Mitglieder über eine Suche.
- **Veranstaltungsplaner:** Mitglieder legen Veranstaltungen mit Titel, Ort und Zeit an und laden andere Mitglieder oder Gruppen ein. Eingeladene melden sich per Knopfdruck an und diskutieren in einem Kommentarbereich.
- **Dateiablage:** Mitglieder laden wichtige Dokumente hoch, z. B. Protokolle von Mitgliederversammlungen, und stellen sie anderen zur Verfügung.
- **Dashboard:** Startseite mit einem kleinen Kalender der kommenden Veranstaltungen und Beiträgen zu vergangenen Veranstaltungen.
- **Bonus – E-Mail-Newsletter:** Regelmäßige Zusammenfassung kommender und vergangener Veranstaltungen per E-Mail.

## Prototyp (Meilenstein 1) starten

Der statische HTML/CSS-Prototyp liegt im Ordner [`prototype/`](prototype/) und verwendet kein JavaScript.

```bash
npm run prototype
```

Danach ist der Prototyp unter http://localhost:3000 erreichbar. `serve` liefert `prototype/` als Wurzelverzeichnis aus und unterstützt saubere URLs (`/events/new` → `events/new.html`, `/events/` → `events/index.html`).

## URL-Struktur

Seiten werden nach Ressourcen benannt (englische Nomen im Plural), einzelne Ressourcen über ihren Bezeichner. Dasselbe Schema dient später als Grundlage für die React-Router-Routen (M2) und die REST-API unter `/api/...` (M3).

| URL | Seite | Datei im Prototyp |
|---|---|---|
| `/` | Dashboard | `prototype/index.html` |
| `/login` | Login | `prototype/login.html` |
| `/register` | Registrierung über Einladungslink | `prototype/register.html` |
| `/members/` | Mitgliederliste mit Suche (`/members/?q=...`) | `prototype/members/index.html` |
| `/members/:id` | Mitgliedsprofil, z. B. `/members/anna-schmidt` | `prototype/members/anna-schmidt.html` |
| `/profile` | Eigenes Profil bearbeiten | `prototype/profile.html` |
| `/events/` | Veranstaltungsliste (`/events/?status=past`) | `prototype/events/index.html` |
| `/events/new` | Veranstaltung anlegen | `prototype/events/new.html` |
| `/events/:id` | Veranstaltung mit Anmeldung und Kommentaren | `prototype/events/sommerfest-2026.html` |
| `/files/` | Dateiablage mit Upload | `prototype/files/index.html` |
| `/admin/` | Verwaltung: Einladungen und Gruppen (nur Admin) | `prototype/admin/index.html` |

Filter und Suche sind Query-Parameter (`?q=`, `?status=`), weil sie dieselbe Ressource nur anders darstellen und keine neue Ressource sind.

## Kriterien-Zuordnung Meilenstein 1

_Wird zur Abgabe mit Datei- und Zeilenangaben ergänzt._
