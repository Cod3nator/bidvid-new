import Navbar from "./components/Dash_Navbar";


export const metadata = {
    title: "BidVid",
    description: "Your Ad optimizer",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <>
      <div className="login-layout">
        <Navbar/>
        {children}
      </div>
      </>
    );
  }
  