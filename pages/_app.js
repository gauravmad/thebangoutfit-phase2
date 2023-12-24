import "../styles/globals.css";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { StateContext } from "../context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StateContext>
        <Layout {...pageProps}>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </SessionProvider>
  );
}
