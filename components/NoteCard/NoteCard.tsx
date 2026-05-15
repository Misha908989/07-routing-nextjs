import Link from 'next/link';
import { Note } from '@/types/note';
import css from './NoteCard.module.css';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link href={`/notes/${note.id}`} className={css.card}>
      <h3 className={css.title}>{note.title}</h3>
      <p className={css.preview}>{note.content}</p>
      {note.tag && <span className={css.tag}>{note.tag}</span>}
    </Link>
  );
}
