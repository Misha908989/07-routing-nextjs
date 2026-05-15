import Link from 'next/link';
import { Note } from '@/types/note';
import css from './NoteCard.module.css';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link href={`/notes/${note.id}`} className={css.card}>
      <div className={css.tag}>{note.tag}</div>
      <h3 className={css.title}>{note.title}</h3>
      <p className={css.content}>{note.content}</p>
      <time className={css.date}>{new Date(note.createdAt).toLocaleDateString('uk-UA')}</time>
    </Link>
  );
}
