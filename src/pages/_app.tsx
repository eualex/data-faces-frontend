import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { globalStyles } from "../styles/config";

import 'react-toastify/dist/ReactToastify.css'
import { PrisionerProvider } from "@/context/PrisionerContext";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <PrisionerProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </PrisionerProvider>
  );
}

export default MyApp;
