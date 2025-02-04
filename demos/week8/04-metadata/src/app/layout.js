import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//this metadata object will add metadata to the whole app
//openGraph is a way to optimise metadata for social media as a preview
//you can add a specific openGraph property in all of your metadata objects and generateMetadata functions
export const metadata = {
  title: "Users App",
  description: "Where all users converge.",
  openGraph: {
    title: "Users App",
    description:
      "Where all users converge. Join now for the best social experience!",
    type: "website",
    url: "#",
    images: ["image-url"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* this children parameter is a placeholder for every page in my app */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
