import { fetchNoteById } from '@/lib/api/notes';
import NotePreview from '@/components/NotePreview/NotePreview';
import { notFound } from 'next/navigation';

interface NotePageProps {
  params: {
    id: string;
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const note = await fetchNoteById(id).catch(() => null);
  if (!note) return notFound();

  return (
    <div style={{ maxWidth: 600, margin: '48px auto', padding: '0 16px' }}>
      <NotePreview note={note} />
    </div>
  );
}
