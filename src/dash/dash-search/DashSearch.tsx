import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function DashSearch() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const trimmed = query.trim();
        navigate(trimmed ? `/members?q=${encodeURIComponent(trimmed)}` : '/members');
    }

    return (
        <form className="search" role="search" onSubmit={handleSubmit}>
            <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
            <label htmlFor="search-q" className="vh-sr">Mitglieder suchen</label>
            <input
                id="search-q"
                name="q"
                type="search"
                placeholder="Mitglieder suchen"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button type="submit" className="vh-sr">Suchen</button>
        </form>
    );
}

export default DashSearch;
