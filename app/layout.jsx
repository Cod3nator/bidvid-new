import "./globals.css";
import { Bounce, ToastContainer } from "../utils/nextToast.js";
import "react-toastify/dist/ReactToastify.css";
import {GoogleTagManager} from "@next/third-parties/google";
export const metadata = {
  title: "BidVid",
  description: "Your Ad optimizer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body>
         <GoogleTagManager gtmId="GTM-MZ2T8MVC" />
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={5500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
