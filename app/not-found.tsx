import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | NoteHub',
  description: 'The page you are looking for does not exist. Return to NoteHub and manage your notes.',
  openGraph: {
    title: '404 — Page Not Found | NoteHub',
    description: 'The page you are looking for does not exist. Return to NoteHub and manage your notes.',
    url: 'https://your-app.vercel.app/404',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub — Page Not Found',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <main>
      <h1>404 — Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to NoteHub</Link>
    </main>
  );
}
