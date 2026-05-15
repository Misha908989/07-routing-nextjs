import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Your personal notes hub',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
          {modal}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
