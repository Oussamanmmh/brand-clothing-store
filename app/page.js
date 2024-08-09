import Brands from "./_components/brands";
import TopProducts from "./_components/sectionsProducts/topProducts";
import ShoesSections from "./_components/sectionsProducts/shoesSections";
import TshirtSection from "./_components/sectionsProducts/TshirtsSection";
import PantalonsSection from "./_components/sectionsProducts/pantalonsSection";
import BagProducts from "./_components/bagProduct";
import SpinnerLoading from "./_components/spinnerLoading";


export default function Home() {
  
  return (
   <>
      <main className="font-josefin flex flex-col justify-center gap-6">
          {/* <div className="flex justify-center  ">
            <Image src={coverImage} width={450} height={450} alt="cover image " className="rounded-xl "  />
          </div> */}
          <Brands/>
            <TopProducts/>
             <ShoesSections/>
          <BagProducts/>
          <TshirtSection/>
          <PantalonsSection/>
         
         
      </main>
   </> 
   );
}
