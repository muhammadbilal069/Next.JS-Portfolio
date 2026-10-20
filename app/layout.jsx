import '../src/index.css'

export const metadata = {
  title: 'Bilal khan — Full-Stack Developer',
  description: 'Personal portfolio of Bilal khan, a full-stack developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
