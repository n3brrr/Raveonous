import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <h1 className="bg-[#C49847] py-5 text-white text-3xl font-bold text-center">Ravenous</h1>
        {children}
      </body>
    </html>
  );
}
