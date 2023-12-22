import "../styles/globals.css";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (

    <SessionProvider session={pageProps.session}>
      <Layout {...pageProps}>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    
  );
}
