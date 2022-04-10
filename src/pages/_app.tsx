import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { globalStyles } from "../styles/config";

import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
