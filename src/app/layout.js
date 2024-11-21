import "./globals.css";

export const metadata = {
  title: "Enes Altan",
  description: "Build by Enes Altan. Powered by Flexit",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className="h-full">
     <div id="root">{children}</div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" defer></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" defer></script>
      </body>
    </html>
  );
}
