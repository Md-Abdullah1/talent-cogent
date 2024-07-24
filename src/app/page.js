import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full min-h-screen bg-[#FEFEFE] flex flex-col items-center gap-2">
      <div className="bg-[#162664] w-full h-fit py-2 text-center"><p className="text-white text-sm">Looking for a new Career?  <Link href={`/`} className=" font-semibold underline   "> Get in touch</Link> </p></div>
      <Header/>
      <Footer/>
    </main>
  );
}
