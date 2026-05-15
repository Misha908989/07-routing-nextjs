import { fetchNoteById } from '@/lib/api/notes';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { notFound } from 'next/navigation';

interface ModalNotePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ModalNotePage({ params }: ModalNotePageProps) {
  const { id } = await params;

  const note = await fetchNoteById(id).catch(() => null);
  if (!note) return notFound();

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
