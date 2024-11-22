import Navbar from "./components/Dash_Navbar";


export const metadata = {
    title: "BidVid",
    description: "Your Ad optimizer",
  };
  
  export default function DashboardLayout({ children }) {
    return (
     
      <div className="dash-layout" style={{height:"100%", width:"100%"}}>
        {children}
      </div>
   
    );
  }
  