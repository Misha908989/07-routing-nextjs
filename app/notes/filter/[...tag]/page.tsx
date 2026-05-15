import { fetchNotes } from '@/lib/api/notes';
import NoteList from '@/components/NoteList/NoteList';

interface FilterPageProps {
  params: {
    tag: string[];
  };
}

export default async function FilterPage({ params }: FilterPageProps) {
  const tag = params.tag?.[0];
  const resolvedTag = tag === 'all' ? undefined : tag;

  const data = await fetchNotes(resolvedTag, 1);

  return <NoteList initialNotes={data.notes} totalPages={data.totalPages} tag={tag} />;
}
