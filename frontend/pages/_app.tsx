import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Navbar from "@/components/Navbars/navbar";
import Footer from "@/components/Navbars/footNav"; 
import Dashboard from "./dashboard";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Log the current pathname to debug
  console.log("Current pathname:", router.pathname);
  
  // Define paths where Navbar and Footer should not be displayed
  const hideNavAndFooter = ["/Login", "/Register", "/profile/dashboard"].includes(router.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavAndFooter && <Navbar />}
      
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}
