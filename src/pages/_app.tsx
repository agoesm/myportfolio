import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";
import Loading from "@/components/loading";
import Footer from "@/components/elements/footer";
import Navbar from "@/components/elements/navbar";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ibmPlexMono.className}>
      <div className="h-screen border-solid border-30 border-primary overflow-hidden">
        <Navbar />

        <Loading />
        <Component {...pageProps} />

        <Footer />
      </div>
    </main>
  );
}
