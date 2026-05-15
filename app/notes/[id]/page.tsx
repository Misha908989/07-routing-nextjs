import { Metadata } from 'next';
import { fetchNoteById } from '@/lib/api/notes';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const note = await fetchNoteById(id);

    return {
      title: `${note.title} — NoteHub`,
      description: note.content
        ? note.content.slice(0, 155) + (note.content.length > 155 ? '...' : '')
        : `View details of the note "${note.title}" in NoteHub.`,
      openGraph: {
        title: `${note.title} — NoteHub`,
        description: note.content
          ? note.content.slice(0, 155) + (note.content.length > 155 ? '...' : '')
          : `View details of the note "${note.title}" in NoteHub.`,
        url: `https://your-app.vercel.app/notes/${id}`,
        images: [
          {
            url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
            width: 1200,
            height: 630,
            alt: note.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Note Not Found — NoteHub',
      description: 'The requested note could not be found in NoteHub.',
    };
  }
}

export default async function NoteDetailPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <main>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <span>{note.tag}</span>
    </main>
  );
}
