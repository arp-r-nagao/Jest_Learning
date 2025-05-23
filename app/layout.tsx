import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Header} from './components/layout/header';
import {Dock} from './components/layout/dock';
import {Providers} from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="h-screen flex flex-col overflow-scroll">
          <Header />
          <div className="flex-grow flex justify-center items-center px-5">
            <Providers>{children}</Providers>
          </div>
          <Dock />
        </main>
      </body>
    </html>
  );
}
