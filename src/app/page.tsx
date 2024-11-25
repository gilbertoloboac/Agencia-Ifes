import Button from "@/components/Button/Button";
import CardPubliRecente from "@/components/CardsPubliRecentes/CardPubliRecentes";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NewsLetter from "@/components/Newsletter/Newsletter";
import Principal from "@/components/Principal/Principal";

export default function Home() {
  return (
    <div>
      <Principal/>
      <div className="border-b-2 border-sky-500 pt-20"></div>
      <div className="max-w-[1220] ml-32 mr-32 mt-10">
        <div className="flex place-items-baseline justify-between m-auto">
        <h2 className="font-extrabold text-2xl text-gray-800">Publicações Recentes</h2>
        <Button/>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CardPubliRecente/>
          <CardPubliRecente/>
          <CardPubliRecente/>
          <CardPubliRecente/>
          <CardPubliRecente/>
          <CardPubliRecente/>
          <CardPubliRecente/>
          <CardPubliRecente/>
        </div>
      </div>
      <div>
        <NewsLetter/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
      
    
  );
}
