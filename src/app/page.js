import WhiteCard from "@/components/whitecard/WhiteCard";
import './page.scss'
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
  return (
   <div className="container"> 
   <Navbar />
    <WhiteCard />
   </div>
  );
}
