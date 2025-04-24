import localFont from "next/font/local";
import "@/styles/reset.scss";
import {
  ScrollProvider,
} from "@/lib/providers/ScrollProvider/ScrollProvider";
import Header from "@/utils/Header/Header";
import Footer from "@/utils/Footer/Footer";

const neueHaasDisplay = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplay/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplay/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-display",
});

export const metadata = {
  title: "RTRTS TMPLATE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html">
      <body className={`${neueHaasDisplay.variable} body`}>
        <ScrollProvider scrollBar></ScrollProvider>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
