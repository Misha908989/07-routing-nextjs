import { Note } from '@/types/note';
import css from './NotePreview.module.css';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  return (
    <article className={css.article}>
      <div className={css.tag}>{note.tag}</div>
      <h1 className={css.title}>{note.title}</h1>
      <p className={css.content}>{note.content}</p>
      <time className={css.date}>
        Created: {new Date(note.createdAt).toLocaleDateString('uk-UA')}
      </time>
    </article>
  );
}
