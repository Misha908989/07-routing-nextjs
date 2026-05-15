'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NOTE_TAGS } from '@/types/note';
import css from './SidebarNotes.module.css';

export default function SidebarNotes() {
  const pathname = usePathname();

  return (
    <nav className={css.sidebar}>
      <h2 className={css.title}>Filter by tag</h2>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link
            href="/notes/filter/all"
            className={`${css.menuLink} ${pathname === '/notes/filter/all' ? css.active : ''}`}
          >
            All notes
          </Link>
        </li>
        {NOTE_TAGS.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag}`}
              className={`${css.menuLink} ${pathname === `/notes/filter/${tag}` ? css.active : ''}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
