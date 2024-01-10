import { Inter } from 'next/font/google'
import './globals.css';
import Navbar from './components/Navbar';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyNextApp',
  description: 'Next.Js app créee par GANDEGA Samba',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className='flex justify-center mt-6 w-full'>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
