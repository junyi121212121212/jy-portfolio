import '../styles/globals.css';

export const metadata = {
  title: 'My CV',
  description: 'A portfolio website showcasing my CV and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}