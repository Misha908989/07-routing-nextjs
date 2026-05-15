import { fetchNoteById } from '@/lib/api/notes';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { notFound } from 'next/navigation';

interface ModalNotePageProps {
  params: {
    id: string;
  };
}

export default async function ModalNotePage({ params }: ModalNotePageProps) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const note = await fetchNoteById(id).catch(() => null);
  if (!note) return notFound();

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
