import JotaiProvider from "@/providers/providers";

import "./globals.css";

import NavBar from "@/components/NavBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col w-screen h-screen">
          <NavBar />
          <JotaiProvider>{children}</JotaiProvider>
        </main>
      </body>
    </html>
  );
}
