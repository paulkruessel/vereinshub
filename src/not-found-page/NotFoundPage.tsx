import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <main className="error-page">
            { /* Error Graphic */}
            <div className="error">
                <div className="error__digits" aria-hidden="true">
                <div className="error__digit">
                    <span className="error__weekday">Mo</span>
                    <span className="error__number">4</span>
                </div>
                <div className="error__digit">
                    <span className="error__weekday">Di</span>
                    <span className="error__number">0</span>
                </div>
                <div className="error__digit">
                    <span className="error__weekday">Mi</span>
                    <span className="error__number">4</span>
                </div>
                </div>

                <header className="error__intro">
                <p className="error__code">Fehler 404</p>
                <h1 className="error__title">Diese Seite steht nicht im Kalender.</h1>
                <p className="error__lead">
                    Vielleicht wurde der Termin oder die Datei gelöscht, oder der Link
                    hat einen Tippfehler. Von hier kommst du schnell weiter.
                </p>
                </header>
                {/* To Dashboard Button */}
                <div className="error__actions">
                <Link to="/" className="vh-btn"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"></path></svg>Zur Übersicht</Link>
                </div>
            </div>
            </main>
        </>
    )
}

export default NotFoundPage;