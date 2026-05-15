import { NOTE_TAGS } from '@/types/note';
import css from './SidebarNotes.module.css';

export default function SidebarNotes() {
  return (
    <nav className={css.sidebar}>
      <h2 className={css.title}>Filter by tag</h2>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <a href={`/notes/filter/all`} className={css.menuLink}>
            All notes
          </a>
        </li>
        {NOTE_TAGS.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <a href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
