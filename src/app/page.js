import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainComponent from "@/components/home/MainComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full h-screen bg-[#FEFEFE] flex flex-col items-center gap-2">
      <div className="bg-[#162664] w-full h-fit py-2 text-center"><p className="text-white text-xs md:text-sm ">Looking for a new Career?  <Link href={`/`} className=" font-semibold underline   "> Get in touch</Link> </p></div>
      <Header/>
      <MainComponent/>
      <Footer/>
    </main>
  );
}
