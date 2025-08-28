import WhiteCard from "@/components/whitecard/WhiteCard";
import './page.scss'
import Navbar from "@/components/navbar/Navbar";
import ConnectSec from "@/components/connectsection/ConnectSec";


export default function Home() {
  return (
   <div className="container"> 
    <Navbar />
    <div className="inner-cont">
      <div className="left">
        <WhiteCard />
        <ConnectSec />
      </div>
      <div className="right">

      </div>
    </div>
   </div>
  );
}
