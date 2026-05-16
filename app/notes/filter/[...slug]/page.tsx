import type { Metadata } from "next";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { NoteTag } from "@/types/note";
import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tagParam = slug?.[0] ?? "all";
  const label = tagParam === "all" ? "All notes" : `Tag: ${tagParam}`;
  return {
    title: `${label} | NoteHub`,
    description: `Viewing notes${tagParam !== "all" ? ` filtered by tag: ${tagParam}` : ""}.`,
    openGraph: {
      title: `${label} | NoteHub`,
      description: `Viewing notes${tagParam !== "all" ? ` filtered by tag: ${tagParam}` : ""}.`,
      url: `https://notehub.app/notes/filter/${slug?.join("/")}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        },
      ],
    },
  };
}

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;
  const tagParam = slug?.[0];
  // "all" means no tag filter — don't pass tag to API
  const tag = tagParam && tagParam !== "all" ? (tagParam as NoteTag) : undefined;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes(1, "", tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
