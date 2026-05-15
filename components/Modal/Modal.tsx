'use client';

import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // Повертає на попередній маршрут (/notes/filter/Work тощо)
  };

  return (
    <div className={css.backdrop} onClick={handleClose}>
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeButton} onClick={handleClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
