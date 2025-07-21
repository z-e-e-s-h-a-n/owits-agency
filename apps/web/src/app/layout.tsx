import { Open_Sans } from "next/font/google";

import "@workspace/ui/globals.css";
import "./globals.css";
import Provider from "@/providers";

const primaryFont = Open_Sans({
  subsets: ["latin"],
  variable: "--primary-font",
  weight: ["300", "400", "500", "700", "800"],
});

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primaryFont.variable} font-primary antialiased `}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export default RootLayout;
