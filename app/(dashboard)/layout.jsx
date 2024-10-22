import Navbar from "./dashboard/components/Dash_Navbar";


export const metadata = {
    title: "BidVid",
    description: "Your Ad optimizer",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <>
      <div className="login-layout">
        {children}
      </div>
      </>
    );
  }
  