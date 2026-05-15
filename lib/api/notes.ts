import axios from 'axios';
import { Note } from '@/types/note';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://notehub-public.goit.study/api';

// Отримати список нотаток (з опціональним фільтром по тегу)
export async function fetchNotes(tag?: string): Promise<Note[]> {
  const params = tag ? { tag } : {};
  const { data } = await axios.get<Note[]>(`${API_BASE_URL}/notes`, { params });
  return data;
}

// Отримати одну нотатку по ID
export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await axios.get<Note>(`${API_BASE_URL}/notes/${id}`);
  return data;
}
