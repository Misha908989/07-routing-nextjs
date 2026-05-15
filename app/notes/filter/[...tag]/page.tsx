import { fetchNotes } from '@/lib/api/notes';
import NoteCard from '@/components/NoteCard/NoteCard';
import css from './page.module.css';

interface Props {
  params: { tag: string[] };
}

export default async function FilterPage({ params }: Props) {
  const [selectedTag] = params.tag;

  // Бекенд не розуміє тег "all" — при "all" тег не передаємо
  const tag = selectedTag === 'all' ? undefined : selectedTag;
  const notes = await fetchNotes(tag);

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteCard note={note} />
        </li>
      ))}
    </ul>
  );
}
