import { Montserrat } from "next/font/google";
import "./globals.css";

const mainFont = Montserrat({
  preload: false,
  weight: ['400', '600', '800']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
