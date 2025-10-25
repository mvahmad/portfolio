import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmad Movahedi | Frontend Developer",
  description:
    "Portfolio of Ahmad Movahedi — a frontend developer specializing in Next.js, React, and modern web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
