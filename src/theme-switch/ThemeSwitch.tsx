import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'vereinshub-theme';

function readStoredTheme(): Theme {
    try {
        return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
    } catch {
        return 'dark';
    }
}

function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>(readStoredTheme);
    
    useEffect(() => {
        document.documentElement.dataset.theme = theme; // -> <html data-theme="light">
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Speichern nicht möglich: Theme gilt dann nur bis zum Reload
        }
    }, [theme]);

    const isLight = theme === 'light';

    return (
        <div className="theme-switch">
            <input
                className="theme-switch__input"
                type="checkbox"
                id="theme-toggle"
                checked={isLight}
                onChange={e => setTheme(e.target.checked ? 'light' : 'dark')}
            />
            <label htmlFor="theme-toggle" className="theme-switch__label">
                <span className="vh-sr">{isLight ? 'Dunklen Modus aktivieren' : 'Hellen Modus aktivieren'}</span>
                <span className="theme-switch__option theme-switch__option--light" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></span>
                <span className="theme-switch__option theme-switch__option--dark" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"></path></svg></span>
            </label>
        </div>
    );
}

export default ThemeSwitch;
