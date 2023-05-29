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
      <body className="w-full h-screen font-montserrat bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textGreen/60">
        {children}
      </body>
    </html>
  )
}
