import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";
import Navbar from "./components/Navbar";
import {config} from  "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bug Management Portal",
  description: "This is a Bug Management Portal, Developed by Vinit Patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
      <div className="flex flex-col h-screen max-h-screen">
          <Navbar />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">

        {children}
        </div>
        </div>
        </AuthProvider>
        </body>
        
    </html>
  );
}
