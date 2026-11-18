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
- **Dashboard:** Startseite mit einem kleinen Kalender der kommenden Veranstaltungen und Beiträgen zu vergangenen Veranstaltungen.
- **Bonus - Dateiablage:** Mitglieder laden wichtige Dokumente hoch, z. B. Protokolle von Mitgliederversammlungen, und stellen sie anderen zur Verfügung. Da dies das Aufsetzen eines separaten MinIO-Servers benötigt, ist die Implementierung zwar geplant, aber eher für ein Release v1.1.
- **Bonus - E-Mail-Newsletter:** Regelmäßige Zusammenfassung kommender und vergangener Veranstaltungen per E-Mail. Dies erfordert aber das Aufsetzen eines IMAP-Servers, weshalb es zunächst nicht im Projekt-Scope ist, sondern eher ein Feature für v1.1 wäre.

## Meilenstein 1: Statischer Prototyp

Der Prototyp liegt im Ordner [`prototype/`](prototype/) und besteht nur aus HTML und CSS, ohne JavaScript.

### Starten

Voraussetzung: Node.js.

```bash
npm run prototype
```

Danach ist der Prototyp unter http://localhost:3000 erreichbar. `serve` liefert `prototype/` als Wurzelverzeichnis aus und unterstützt saubere URLs (`/events/1` → `events/1.html`, `/events/` → `events/index.html`). Ein direktes Öffnen der HTML-Dateien funktioniert nicht, da alle Pfade absolut sind (`/css/style.css`).

### Fertige Seiten

| URL | Seite | Datei im Prototyp | Beschreibung |
|---|---|---|---|
| `/` | Dashboard | `index.html` | Die Homepage des Projekts. Wenn ein Nutzer eingeloggt ist, sieht er hier die nächste Veranstaltung, sowie neue Beiträge von anderen Nutzern und eine kleine Kalenderübersicht. |
| `/login` | Login | `login.html` | Ist ein Nutzer nicht angemeldet, wird er auf diese Seite weitergeleitet, um sich mit E-Mail und Passwort anzumelden. |
| `/events/` | Veranstaltungen | `events/index.html` | Eine vergrößerte Kalenderübersicht. Hier kann der Nutzer eingetragene Veranstaltungen sehen und darauf klicken, um mehr darüber zu erfahren. |
| `/events/:id` | Konkrete Veranstaltung | `events/1.html` bis `events/6.html` | Infos zur Veranstaltung wie Ort, Zeit und Veranstalter, wer sich bereits angemeldet hat, eigene Zu- oder Absage sowie Kommentare. |
| `/members/` | Mitglieder | `members/index.html` | Liste aller Mitglieder, durchsuchbar und nach Gruppen filterbar. |
| `/members/:id` | Mitgliederprofil | `members/1.html` bis `members/6.html` | Allgemeine Infos, Kontaktdaten und die vom Mitglied zugesagten Veranstaltungen. |
| jede unbekannte URL | Not Found | `404.html` | Wird bei ungültigen URLs (auch den noch fehlenden Seiten) mit HTTP-Status 404 ausgeliefert und bietet Links zurück in die App. |

### Seiten, die noch implementiert werden müssen

| URL | Seite | Beschreibung |
|---|---|---|
| `/files/` | Dateiablage | Bonus-Feature, siehe oben. |
| `/admin/` | Verwaltung | Admins können hier Nutzer und Gruppen verwalten. |
| `/profile` | Profil bearbeiten | Der Nutzer kann hier sein eigenes Profil verwalten. |
| `/register` | Registrierung | Hier kann sich ein Nutzer registrieren, nachdem er einen Einladungslink erhalten hat. |
| `/invitations/new` | Einladung erstellen | Hier kann ein berechtigter Nutzer einen Einladungslink erstellen und an eine E-Mail versenden. |
| `/events/new` | Veranstaltung erstellen | Ein Nutzer kann hier eine neue Veranstaltung erstellen. |
| `/password-reset` | Passwort zurücksetzen | Hier kann ein Nutzer sein Passwort zurücksetzen, falls er es vergessen hat. |
| `/imprint`, `/privacy` | Impressum und Datenschutzerklärung | Proforma |

### URL-Struktur und HTTP

- Ressourcen werden als Nomen im Plural benannt: Sammlung `/events/` → einzelne Ressource `/events/1` → Unterressource `/events/1/comments`.
- Ressourcen erhalten eine numerische ID statt eines sprechenden Namens. Die ID bleibt stabil, wenn sich z. B. der Titel einer Veranstaltung ändert, und entspricht später dem Primärschlüssel in der Datenbank.
- Suche und Filter sind Query-Parameter (`?q=`, `?group=`, `?status=`, `?month=`), da sie dieselbe Ressource nur anders darstellen.
- Lesende Formulare (Suche) nutzen `GET`, schreibende (Login, Zusage, Kommentar) `POST`. Beim Login landen die Zugangsdaten so nicht in der URL.
- Unbekannte URLs werden mit echtem Status 404 statt 200 beantwortet.

### Kriterien-Zuordnung

| Kriterium | Umsetzung | Datei:Zeile |
|---|---|---|
| **Repository** | Eigenes Repo mit regelmäßigen Commits, README | dieses README, `git log` |
| **HTML: `header`** | Seitenkopf mit Logo und Navigation, Kopf des Hauptinhalts | `prototype/index.html:14`, `:37` |
| **HTML: `nav`** | Hauptnavigation | `prototype/index.html:19` |
| **HTML: `main`** | Hauptinhalt | `prototype/index.html:36` |
| **HTML: `section`** | Kalender-Kachel | `prototype/index.html:86` |
| **HTML: `article`** | Nächster Termin, Beitrag mit eigenem `header` und `footer`, Kommentar | `prototype/index.html:66`, `:162`, `:171`, `prototype/events/2.html:204` |
| **HTML: `footer`** | Seiten-Footer | `prototype/index.html:193` |
| **HTML: Formular mit `label for` und `name`** | Login | `prototype/login.html:23-37` |
| | Suche (`GET`) | `prototype/index.html:53-56`, `prototype/members/index.html:60` |
| | Zusage und Kommentar (`POST`) | `prototype/index.html:143`, `prototype/events/2.html:211` |
| **CSS: Grid** | Seitenleiste und Inhalt | `prototype/css/style.css:485` |
| | Monatskalender | `prototype/css/style.css:369`, `:844` |
| | Spalten der Mitgliederliste | `prototype/css/style.css:1149` |
| **CSS: Flexbox** | Kachel-Raster, Kalender mit Detail-Panel | `prototype/css/style.css:279`, `:685` |
| | Bausteine (Button, Kachel, Terminzeile) | `prototype/css/components.css:32`, `:208`, `:276` |
| **CSS: Media Queries** | Mobile-first, ab 48em und ab 64em | `prototype/css/style.css:481`, `:609`, `:1134`, `:1521` |
| **CSS: Typografie und Farben** | Schrift-, Farb- und Abstands-Tokens (dunkles und helles Theme) | `prototype/css/tokens.css:15`, `:31`, `:77`, `:116` |
| **HTTP: URL-Struktur** | Sammlung → Ressource | `prototype/events/2.html:148`, `prototype/members/1.html:81` |
| | Query-Parameter als Filter | `prototype/members/index.html:66`, `prototype/events/2.html:63` |
| | Unterressource per `POST` | `prototype/events/2.html:211` |
| | 404-Seite | `prototype/404.html:79` |

## Meilenstein 2: React-App

Der Prototyp aus M1 lebt jetzt als React-App mit TypeScript in `src/`. Die Daten kommen in diesem Meilenstein noch aus lokalen Mock-Dateien (`src/data/`) und werden im React-State gehalten. Backend, Datenbank und Login folgen in M3.

### Starten

Voraussetzung: aktuelles Node.js (LTS) mit npm.

```bash
npm install
npm run dev
```

Danach ist die App unter http://localhost:5173 erreichbar.

| Befehl | Zweck |
|---|---|
| `npm run dev` | Entwicklungsserver (Vite) mit Hot Reload |
| `npm run build` | Typprüfung mit `tsc -b` und Produktions-Build nach `dist/` |
| `npm run lint` | ESLint mit `typescript-eslint` und den React-Hooks-Regeln |
| `npm run preview` | gebauten Stand aus `dist/` lokal ausliefern |
| `npm run prototype` | statischen Prototyp aus M1 starten |

Eingeloggt ist fest das Mitglied *Paul Krüssel* (ID 3, Rolle Admin, `src/data/currentUser.ts`). Die Mock-Daten enthalten 6 Mitglieder und 26 Veranstaltungen von September 2026 bis Januar 2027.

### Routen

| URL | Komponente | Inhalt |
|---|---|---|
| `/` | `Dash` | Dashboard: Countdown zum nächsten Termin, Mini-Kalender, kommende Termine, zuletzt vergangene Termine |
| `/members` | `Members` | Mitgliederliste mit Suche und Gruppenfilter |
| `/members/:id` | `MemberDetail` → `MemberCard` | Profil als Seitenpanel neben der Liste |
| `/members?q=…` | `Members` | Liste mit vorausgefüllter Suche (Suchfeld im Dashboard) |
| `/events` | `Events` | Monatskalender mit Blättern zwischen den Monaten |
| `/events/:id` | `EventDetail` → `EventCard` | Termindetails als Seitenpanel neben dem Kalender |
| `/events/new` | `EventForm` | Formular für einen neuen Termin, ebenfalls als Seitenpanel |
| jede andere URL | `NotFoundPage` | 404-Ansicht |

`/members/:id`, `/events/:id` und `/events/new` sind verschachtelte Routen. Die Elternseite bleibt sichtbar und rendert das Kind über `<Outlet />` im Seitenpanel. Welches Mitglied oder welcher Termin geöffnet ist, steht damit in der URL: Reload, Zurück-Button und geteilte Links funktionieren ohne zusätzlichen State.

### Aufbau

```
src/
├── App.tsx              Router und gemeinsamer State (Events, aktueller User)
├── types.ts             Domänentypen Member, ClubEvent, GroupId
├── data/                Mock-Daten und aktueller User
├── dash/                Dashboard und seine Kacheln
├── members/             Mitgliederliste, Zeile, Profilkarte, Filterlogik
├── events/              Kalender, Detailkarte, Formular, Datumslogik (calendar.ts)
├── navbar/, footer/     Rahmen der App
├── theme-switch/        Hell/Dunkel-Umschalter
└── not-found-page/      404-Ansicht
```

- **State hochgezogen:** Die Liste der Veranstaltungen liegt als einziger State in `App` und wird per Props an Dashboard, Kalender, Detailkarten und Mitgliederprofil gegeben. Das Formular meldet neue Termine über den Callback `onCreate` zurück. So erscheint ein neuer Termin sofort im Kalender, auf dem Dashboard und im Profil des Veranstalters.
- **Abgeleitete Werte statt doppeltem State:** Gefilterte Mitgliederliste, kommende Termine, Countdown und Status werden bei jedem Render aus dem State berechnet, nicht separat gespeichert.
- **Logik getrennt von der Darstellung:** Filter- und Datumslogik liegen als reine Funktionen in `members/filterMembers.ts` und `events/calendar.ts`. Sie hängen nicht von React ab und lassen sich in M4 direkt testen.
- **Route-Komponente und Anzeige-Komponente:** `MemberDetail` und `EventDetail` lesen die ID aus der URL und suchen die Daten zusammen, `MemberCard` und `EventCard` zeigen nur an, was sie per Props bekommen.

### Kriterien-Zuordnung

| Kriterium | Umsetzung | Datei:Zeile |
|---|---|---|
| **Tooling: npm und Vite** | Skripte für Dev-Server, Build, Lint | `package.json:6-12` |
| **Tooling: TypeScript aktiv genutzt** | Domänentypen und Union-Types | `src/types.ts:1`, `:9`, `:23` |
| | `Record` erzwingt ein Label für jede Gruppe | `src/types.ts:3` |
| | eigener Filtertyp aus Union und `GroupId` | `src/members/filterMembers.ts:3` |
| | `Omit<ClubEvent, 'id'>`: Formular liefert Termin ohne ID, `App` vergibt sie | `src/App.tsx:22` |
| | typisierte Props-Interfaces in jeder Komponente, z. B. | `src/members/member-row/MemberRow.tsx:4`, `src/events/month-calendar/MonthCalendar.tsx:6` |
| | strenge Compiler-Optionen | `tsconfig.app.json:14`, `:20-21` |
| **Komponenten** | Seite → Liste → Zeile | `src/members/Members.tsx:87-88`, `src/members/member-row/MemberRow.tsx:10` |
| | Dashboard aus vier Kachel-Komponenten | `src/dash/dash.tsx:45-52` |
| | Kalender als eigene Komponente | `src/events/Events.tsx:58`, `src/events/month-calendar/MonthCalendar.tsx:16` |
| | wiederverwendbare Komponenten (`ThemeSwitch` auf drei Seiten) | `src/theme-switch/ThemeSwitch.tsx`, `src/dash/dash.tsx:36` |
| **Daten über Props** | Mitglied und Termine an die Profilkarte | `src/members/member-card/MemberDetail.tsx:14`, `src/members/member-card/MemberCard.tsx:8` |
| | Callbacks als Props (Monat blättern, Termin anlegen) | `src/events/Events.tsx:62-63`, `src/App.tsx:38` |
| **`useState`** | Suchtext und Gruppenfilter | `src/members/Members.tsx:21-22` |
| | Formularfelder und Fehlermeldung | `src/events/event-form/EventForm.tsx:15-21` |
| | angezeigter Monat im Kalender | `src/events/Events.tsx:16` |
| | gemeinsame Termin-Liste und aktueller User | `src/App.tsx:19-20` |
| | Update auf Basis des vorherigen States | `src/App.tsx:24` |
| **`useEffect`** | Theme mit `<html data-theme>` und `localStorage` synchronisieren | `src/theme-switch/ThemeSwitch.tsx:18-25` |
| **Durchgängige Nutzeraktion: Filter** | Eingabe → State → `filterMembers` → Liste, inkl. leerem Zustand | `src/members/Members.tsx:25`, `:55`, `:66`, `:98-100`, `src/members/filterMembers.ts:16` |
| **Durchgängige Nutzeraktion: Formular → Liste** | Validierung, neuer Termin, Sprung zur Detailansicht | `src/events/event-form/EventForm.tsx:23-54`, `src/App.tsx:22-26` |
| **Formular mit `label htmlFor` und `name`** | Terminformular | `src/events/event-form/EventForm.tsx:66-99` |
| **React Router: mehr als drei Routen** | Übersicht, Liste, Detail, Formular, 404 | `src/App.tsx:32-44` |
| | verschachtelte Routen mit `<Outlet />` | `src/App.tsx:34-40`, `src/members/Members.tsx:104`, `src/events/Events.tsx:65` |
| | `useParams` für Detailansichten | `src/members/member-card/MemberDetail.tsx:11`, `src/events/event-card/EventDetail.tsx:13` |
| | `useNavigate` nach dem Absenden | `src/events/event-form/EventForm.tsx:54`, `src/dash/dash-search/DashSearch.tsx:11` |
| | Query-Parameter `?q=` als Startwert der Suche | `src/members/Members.tsx:20-21` |
| | `NavLink` markiert die aktive Seite (`aria-current`) | `src/navbar/Navbar.tsx:20-24` |
| | Catch-all-Route für 404 | `src/App.tsx:43` |

### Bewusste Grenzen in M2

- **Keine Persistenz:** Neue Termine leben nur im React-State und sind nach einem Reload wieder weg. Das ist für M2 vorgesehen. In M3 lädt die App die Daten per `fetch` aus dem eigenen Backend.
- **Fester User:** Der eingeloggte User ist fest eingestellt (ID 3). Login und Rollenprüfung folgen in M3. Die Rechte aus dem Rollenkonzept (z. B. nur Admins laden Mitglieder ein) sind deshalb noch nicht durchgesetzt.
- **404 nur im Client:** Anders als im statischen Prototyp antwortet der Vite-Server bei einer Single-Page-App auf jede URL mit `index.html` und Status 200. Erst React Router zeigt die 404-Ansicht. Echte 404-Statuscodes liefert ab M3 das Backend für unbekannte API-Ressourcen.
- **Noch nicht umgesetzt:** Zu- und Absagen, Kommentare, Gruppen-Einladungen, Dateiablage, Verwaltung und Profil bearbeiten. Die Links in der Navigation zu `/files`, `/admin` und `/profile` führen deshalb auf die 404-Ansicht. Der Bereich „Aus dem Verein“ auf dem Dashboard zeigt bis zur Einführung von Kommentaren die zuletzt vergangenen Termine.
- **Unbekannte IDs:** `/members/99` und `/events/99` zeigen nur einen kurzen Hinweis im Seitenpanel statt einer gestalteten Fehleransicht.
