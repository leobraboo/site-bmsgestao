import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['300', '400', '500', '600'], subsets: ['latin'] })

export const metadata = {
  title: 'BMS Gestão',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
