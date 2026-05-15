import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // slug[0] = filter type (e.g. 'tag'), slug[1] = filter value (e.g. 'Work')
  const filterType = slug[0] ?? 'all';
  const filterValue = slug[1] ?? '';

  const label = filterValue
    ? `${filterType}: ${filterValue}`
    : filterType;

  return {
    title: `Notes filtered by ${label} — NoteHub`,
    description: `Browse NoteHub notes filtered by ${label}. Find exactly what you need quickly.`,
    openGraph: {
      title: `Notes filtered by ${label} — NoteHub`,
      description: `Browse NoteHub notes filtered by ${label}. Find exactly what you need quickly.`,
      url: `https://your-app.vercel.app/notes/filter/${slug.join('/')}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'NoteHub',
        },
      ],
    },
  };
}

export default async function FilterPage({ params }: Props) {
  const { slug } = await params;

  // Your existing page rendering logic here
  return (
    <main>
      <h1>Filtered Notes: {slug.join(' / ')}</h1>
      {/* NotesClient or notes list component */}
    </main>
  );
}
