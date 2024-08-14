import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobs Community",
  description: "Jobs Community is a platform for job seekers and employers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      
    <html lang="en">
      <body className={inter.className}>
        {/* toaster */}
        {/* header */}
        <header className="border-b ">
          <Header />
        </header>
        <div className="bg-[#f4f2eb] ">
          <main>
            {children}
          </main>
        </div>
        <footer>
          <Footer />
        </footer>        
        </body>
    </html>
    </ClerkProvider>
  );
}
