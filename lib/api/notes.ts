import axios from 'axios';
import { Note, NotesResponse } from '@/types/note';

const BASE_URL = 'https://notehub-public-api.onrender.com/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchNotes = async (tag?: string, page = 1): Promise<NotesResponse> => {
  const params: Record<string, string | number> = { page, perPage: 12 };
  if (tag && tag !== 'all') {
    params.tag = tag;
  }
  const { data } = await axiosInstance.get<NotesResponse>('/notes', { params });
  return data;
};

export const fetchNoteById = async (id: number): Promise<Note> => {
  const { data } = await axiosInstance.get<Note>(`/notes/${id}`);
  return data;
};
