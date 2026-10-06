import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Docthea",
  description: "Professional medical care and treatment services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/docthea-favicon.svg?v=10" type="image/svg+xml" />
        <link rel="shortcut icon" href="/docthea-favicon.svg?v=10" type="image/svg+xml" />
      </head>

      <body className={inter.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}