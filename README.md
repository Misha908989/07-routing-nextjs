# NoteHub — HW-07 Next.js Routing

Проєкт NoteHub — домашня робота з маршрутизації в Next.js (App Router).

## Технології

- **Next.js 14** (App Router)
- **TypeScript**
- **TanStack Query** (React Query) для CSR
- **Axios** для HTTP-запитів
- **CSS Modules** для стилізації
- **Prettier** для форматування коду

## Структура проєкту

```
app/
├── layout.tsx                   # Root layout з підтримкою @modal slot
├── page.tsx                     # Редірект на /notes/filter/all
├── not-found.tsx                # 404 сторінка
├── @modal/                      # Паралельний маршрут для модального вікна
│   ├── default.tsx
│   └── (.)notes/[id]/page.tsx   # Перехоплення маршруту /notes/:id
└── notes/
    ├── [id]/page.tsx            # Сторінка нотатки (пряма навігація)
    └── filter/
        ├── layout.tsx           # Layout з паралельними маршрутами
        ├── page.tsx             # Редірект на /notes/filter/all
        ├── @sidebar/            # Паралельний маршрут бічної панелі
        │   ├── page.tsx
        │   └── [...tag]/page.tsx
        └── [...tag]/page.tsx    # Catch-all: фільтрація за тегом

components/
├── Header/
├── Modal/
├── NoteCard/
├── NoteList/
├── NotePreview/
├── SidebarNotes/
└── ReactQueryProvider.tsx

lib/api/
└── notes.ts          # API функції

types/
└── note.ts           # Загальні типи та інтерфейси
```

## Функціонал

- **404 сторінка** — відображається для невідомих маршрутів
- **Паралельні маршрути** — бічна панель з тегами та список нотаток рендеряться незалежно
- **Catch-all маршрути** — `/notes/filter/[...tag]` для фільтрації за будь-яким тегом
- **Перехоплення маршрутів** — при кліку на нотатку відкривається модальне вікно, URL змінюється на `/notes/:id`, фонова сторінка залишається
- **SSR** — початкові дані завантажуються на сервері
- **CSR з TanStack Query** — пагінація та оновлення даних на клієнті

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000)
