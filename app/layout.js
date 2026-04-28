import "./globals.css";

export const metadata = {
  title: "Storivo Builder | Design Your Dream Store",
  description: "Modern drag-and-drop commerce builder powered by Storivo.",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className="h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
