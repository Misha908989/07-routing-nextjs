import { fetchNotes } from '@/lib/api/notes';
import NoteList from '@/components/NoteList/NoteList';

interface FilterPageProps {
  params: Promise<{
    tag: string[];
  }>;
}

export default async function FilterPage({ params }: FilterPageProps) {
  const { tag: tagArr } = await params;
  const tag = tagArr?.[0];
  const resolvedTag = tag === 'all' ? undefined : tag;

  const data = await fetchNotes(resolvedTag, 1);

  return <NoteList initialNotes={data.notes} totalPages={data.totalPages} tag={tag} />;
}
