'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api/notes';
import { Note } from '@/types/note';
import NoteCard from '@/components/NoteCard/NoteCard';
import css from './NoteList.module.css';
import { useState } from 'react';

interface NoteListProps {
  initialNotes: Note[];
  totalPages: number;
  tag?: string;
}

export default function NoteList({ initialNotes, totalPages: initialTotalPages, tag }: NoteListProps) {
  const [page, setPage] = useState(1);

  const resolvedTag = tag === 'all' ? undefined : tag;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', resolvedTag, page],
    queryFn: () => fetchNotes(resolvedTag, page),
    initialData: page === 1 ? { notes: initialNotes, totalPages: initialTotalPages, totalNotes: 0 } : undefined,
  });

  const notes = data?.notes ?? initialNotes;
  const totalPages = data?.totalPages ?? initialTotalPages;

  if (isLoading) return <p className={css.message}>Loading notes...</p>;
  if (isError) return <p className={css.message}>Failed to load notes.</p>;
  if (!notes.length) return <p className={css.message}>No notes found.</p>;

  return (
    <div>
      <ul className={css.grid}>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteCard note={note} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={css.pagination}>
          <button
            className={css.pageButton}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ← Prev
          </button>
          <span className={css.pageInfo}>
            {page} / {totalPages}
          </span>
          <button
            className={css.pageButton}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
