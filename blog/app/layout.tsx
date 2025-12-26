import "./global.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "Ahmad Movahedi | Frontend Developer",
  description:
    "Portfolio of Ahmad Movahedi — a frontend developer specializing in Next.js, React, and modern web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-foreground  bg-[#f8fafc]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
