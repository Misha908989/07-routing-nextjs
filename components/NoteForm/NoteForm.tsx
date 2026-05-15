'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useNoteStore } from '@/lib/store/noteStore';
import { createNote } from '@/lib/api/notes';
import css from './NoteForm.module.css';

const TAG_OPTIONS = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function NoteForm() {
  const router = useRouter();
  const { draft, setDraft, clearDraft } = useNoteStore();
  const isHydrated = useRef(false);

  useEffect(() => {
    isHydrated.current = true;
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDraft({ [name]: value });
  };

  const handleSubmit = async (formData: FormData) => {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const tag = formData.get('tag') as string;

    try {
      await createNote({ title, content, tag });
      clearDraft();
      router.back();
    } catch (error) {
      console.error('Failed to create note:', error);
    }
  };

  const handleCancel = () => {
    // Draft is NOT cleared — user can return to continue editing
    router.back();
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <div className={css.formGroup}>
        <label className={css.label} htmlFor="title">
          Title
        </label>
        <input
          id="title"
          className={css.input}
          type="text"
          name="title"
          placeholder="Enter note title"
          value={draft.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label className={css.label} htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          className={css.textarea}
          name="content"
          placeholder="Enter note content"
          rows={8}
          value={draft.content}
          onChange={handleChange}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label className={css.label} htmlFor="tag">
          Tag
        </label>
        <select
          id="tag"
          className={css.select}
          name="tag"
          value={draft.tag}
          onChange={handleChange}
        >
          {TAG_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={css.actions}>
        <button type="button" className={css.cancelButton} onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className={css.submitButton}>
          Create note
        </button>
      </div>
    </form>
  );
}
