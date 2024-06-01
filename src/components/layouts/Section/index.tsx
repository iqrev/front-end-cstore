import Image from "next/image"

const HeroSection = () => {
    return (
      <div className="container py-10">
          <div className="flex justify-center items-center ">
            <div>
              <div>Cakapind</div>
                <div className="font-bold text-xl uppercase">Menyediakan Produk Custom</div>
                <div className="font-regular text-sm">Kartu ucakapn costum, Amplop costum, Merchandise <br />costum, X banner, Kemasan costum, Topi costum, pin dan <br />  Gantungan kunci, Kalender, Totebag, Selempang dan Tumbler.</div>
                <a href= "#" className=" mt-5 inline-block font-semibold bg-transparent border-2 rounded-full shadow-lg px-4 py-2 hover:bg-gray-200">Selengkapnya</a>
            </div>
            <div>
              <Image className="my-20" src={"/assets/img-hero.png"} alt="login" width={360} height={450}></Image>
            </div>
      </div>
      </div>
      
    
    );
  };
  
  export default HeroSection;