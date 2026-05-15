import css from './SidebarNotes.module.css';

// Теги описані безпосередньо в коді (бекенд не має ендпоінту для тегів)
const TAGS = ['Work', 'Personal', 'Meeting', 'Travel', 'Shopping', 'Health'];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <a href="/notes/filter/all" className={css.menuLink}>
          All notes
        </a>
      </li>
      {TAGS.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <a href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}
