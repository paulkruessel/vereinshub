import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import './Members.css';
import { members } from '../data/members';
import { groupLabels } from '../types';
import { filterMembers, matchesFilter, type MemberFilter } from './filterMembers';
import MemberRow from './member-row/MemberRow';

// TODO M3: kommt später aus dem Login/AuthContext
const CURRENT_USER_ID = 3;

const filterOptions: { value: MemberFilter; label: string }[] = [
    { value: 'alle', label: 'Alle' },
    { value: 'vorstand', label: groupLabels.vorstand },
    { value: 'kassenwart', label: groupLabels.kassenwart },
    { value: 'admin', label: 'Admin' },
];

function Members() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<MemberFilter>('alle');
    const { id } = useParams();

    const visibleMembers = filterMembers(members, searchTerm, filter);

    return (
        <main className="main--wide">
            {/* Content Header */}
            <header className="page-header">
                <div className="page-header__title">
                    <p className="page-header__date">{members.length} Mitglieder · TSV Musterstadt e.V.</p>
                    <h1>Mitglieder</h1>
                </div>
                <div className="page-header__actions">
                    <div className="theme-switch">
                        <input className="theme-switch__input" type="checkbox" id="theme-toggle" />
                        <label htmlFor="theme-toggle" className="theme-switch__label">
                            <span className="vh-sr">Hellen Modus aktivieren</span>
                            <span className="theme-switch__option theme-switch__option--light" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></span>
                            <span className="theme-switch__option theme-switch__option--dark" aria-hidden="true"><svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"></path></svg></span>
                        </label>
                    </div>
                    <Link className="vh-btn new-event-btn" to="/invitations/new">
                        <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
                        <span className="sr-mobile">Mitglied einladen</span>
                    </Link>
                </div>
            </header>

            {/* Searchbar with Filter Buttons */}
            <div className="toolbar">
                <form className="search" role="search" onSubmit={e => e.preventDefault()}>
                    <svg className="vh-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
                    <label htmlFor="member-q" className="vh-sr">Mitglieder durchsuchen</label>
                    <input
                        id="member-q"
                        name="q"
                        type="search"
                        placeholder="Name, E-Mail oder Ort"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="vh-sr">Suchen</button>
                </form>
                <div className="vh-chip-group" role="group" aria-label="Nach Gruppe filtern">
                    {filterOptions.map(option => (
                        <button
                            key={option.value}
                            type="button"
                            className="vh-chip"
                            aria-pressed={filter === option.value}
                            onClick={() => setFilter(option.value)}
                        >
                            {option.label}{' '}
                            <span className="vh-chip__count">
                                {members.filter(m => matchesFilter(m, option.value)).length}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Searchresults + Detail */}
            <div className="split">
                <section className="vh-tile member-list split__main" aria-labelledby="member-list-title">
                    <h2 className="vh-sr" id="member-list-title">Mitgliederliste</h2>
                    {visibleMembers.length > 0 ? (
                        <>
                            <div className="list-head" aria-hidden="true">
                                <span>Name</span><span>Gruppe</span><span>Ort</span><span></span>
                            </div>
                            <ul className="vh-list">
                                {visibleMembers.map(member => (
                                    <MemberRow
                                        key={member.id}
                                        member={member}
                                        isActive={member.id === Number(id)}
                                        isCurrentUser={member.id === CURRENT_USER_ID}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <div className="vh-empty">
                            <p className="vh-empty__title">Keine Mitglieder gefunden</p>
                            <p className="vh-empty__text">Passe die Suche oder den Filter an.</p>
                        </div>
                    )}
                </section>
                <Outlet />
            </div>
        </main>
    );
}

export default Members;