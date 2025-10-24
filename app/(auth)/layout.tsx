import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

export default function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="font-poppins max-w-screen-2xl mx-auto ">
          {children}
        </main>
      </body>
    </html>
  )
}

const inter = Inter({ subsets: ['latin'] });
