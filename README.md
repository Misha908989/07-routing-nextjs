# NoteHub — HW-07 Routing

## Структура маршрутів

```
app/
├── not-found.tsx                          # 404 сторінка
├── not-found.module.css
└── notes/
    ├── [id]/
    │   ├── page.tsx                       # Пряме відкриття нотатки /notes/123
    │   └── page.module.css
    └── filter/
        ├── layout.tsx                     # Layout з @sidebar слотом
        ├── layout.module.css
        ├── @sidebar/
        │   ├── page.tsx                   # SidebarNotes — меню тегів
        │   └── SidebarNotes.module.css
        ├── [...tag]/
        │   ├── page.tsx                   # Список нотаток з фільтрацією (SSR)
        │   └── page.module.css
        └── (.)notes/
            └── [id]/
                └── page.tsx               # Intercepting route → Modal

components/
├── Modal/
│   ├── Modal.tsx
│   └── Modal.module.css
├── NoteCard/
│   ├── NoteCard.tsx
│   └── NoteCard.module.css
└── NotePreview/
    ├── NotePreview.tsx
    └── NotePreview.module.css

types/
└── note.ts

lib/api/
└── notes.ts
```

## Ключові концепції

### Паралельні маршрути (@sidebar)
Папка `@sidebar` є іменованим слотом. `layout.tsx` отримує `sidebar` як prop і
відображає SidebarNotes поряд з основним контентом. При навігації між тегами
sidebar не перерендерюється.

### Catch-all маршрут ([...tag])
`params.tag` — масив сегментів. Перший елемент — обраний тег.
Якщо тег `all`, запит до API відправляється без параметра тегу.

### Intercepting route ((.)notes/[id])
При клієнтській навігації Next.js показує Modal поверх поточної сторінки.
При прямому заходженні за URL — рендерить `app/notes/[id]/page.tsx`.

### Закриття модального вікна
`router.back()` повертає на попередній маршрут, а не на фіксований URL.

## Налаштування

Вкажи базовий URL API у `.env.local`:
```
NEXT_PUBLIC_API_BASE_URL=https://notehub-public.goit.study/api
```

## CSS стилі
Скопіюй стилі з офіційного репозиторію:
https://github.com/goitacademy/react-notehub-styles/tree/hw-07
