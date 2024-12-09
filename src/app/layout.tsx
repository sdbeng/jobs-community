import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/footer";

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>        
        <header className="border-b ">
          <Header />
        </header>
        <div className="bg-[#f4f2eb] flex-grow">
          <main className="container mx-auto px-4  py-8">
            {children}
          </main>
          <ToastContainer />
        </div>
        <footer className="mt-auto">
          <Footer />
        </footer>        
        </body>
    </html>
    </ClerkProvider>
  );
}
