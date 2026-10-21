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
