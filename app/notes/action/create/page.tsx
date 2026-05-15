import { Metadata } from 'next';
import NoteForm from '@/components/NoteForm/NoteForm';
import css from './page.module.css';

export const metadata: Metadata = {
  title: 'Create Note — NoteHub',
  description: 'Create a new note in NoteHub. Fill in the title, content, and tag to save your note.',
  openGraph: {
    title: 'Create Note — NoteHub',
    description: 'Create a new note in NoteHub. Fill in the title, content, and tag to save your note.',
    url: 'https://your-app.vercel.app/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub — Create Note',
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
