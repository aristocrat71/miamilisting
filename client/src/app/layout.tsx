import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";

export const metadata: Metadata = {
  title: "Miami-Dade County",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* MaterializeCSS CDN */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          rel="stylesheet"
        />
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Font Awesome for Back to Top arrow */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Roboto Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>
          <div className="container" style={{ width:"100vw", maxWidth: "100vw", padding: 0 }}>
            {children}
          </div>
        </main>
        <Footer />
        <BackToTop />
        {/* Materialize JS (for dropdowns, etc.) */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </html>
  );
}
