import Link from "next/link";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";

export default function Home(){
  return(
    <div>
  <Hero/>
  <About/>
  <Product/>
   <Contact/> 
  
    </div>
  );
}