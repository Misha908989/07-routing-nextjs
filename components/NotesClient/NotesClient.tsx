'use client';

import Link from 'next/link';
import css from './NotesClient.module.css';

// ... your existing imports for notes list, search, etc.

export default function NotesClient() {
  // ... your existing state / query logic for notes list

  return (
    <div className={css.wrapper}>
      {/* Header with Create note link instead of modal button */}
      <div className={css.toolbar}>
        <Link href="/notes/action/create" className={css.createButton}>
          Create note +
        </Link>
        {/* search / filter controls */}
      </div>

      {/* notes list rendering */}
    </div>
  );
}
