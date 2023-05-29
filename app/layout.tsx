import './globals.css'

export const metadata = {
  title: 'Deepak',
  description: 'This is the portfolio website of Deepak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
