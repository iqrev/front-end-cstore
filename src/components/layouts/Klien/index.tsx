import Image from "next/image"

const Klien = () => {
    return (
        <div className="container mx-auto text-gray-700">
            <h1 className="font-bold text-xl text-center text-gray-700 mt-10 mb-5">Klient Kami</h1>
            <p className="text-center">Solusi cetak, branding, iklan yang selalu mementingkan kualitas dan kreatifitas dengan harga terbaik untuk anda.</p>
            <div className="grid grid-cols-3 gap-4 my-10 ">
                <div className="rounded-large border hover:bg-slate-100">
                    <a href="#">
                    <Image className="font-semibold" src={"/assets/maduclbofficial.png"} alt="klien" width={380} height={450}></Image> 
                    <h1 className="font-semibold text-lg px-5 pt-5 pb-1">Maduclbofficial</h1>
                    <p className="px-5 pb-9">Sosial Media Management</p>   
                    </a>
                </div>
                <div className="rounded-large border hover:bg-slate-100">
                    <a href="#">
                    <Image  className="" src={"/assets/rawabento.png"} alt="klien" width={380} height={450}></Image>
                    <h1 className="font-semibold text-lg px-5 pt-5 pb-1">Rawabento</h1>
                    <p className="px-5 pb-9">Sosial Media Management</p>
                    </a>
                </div>
                <div className="rounded-large border hover:bg-slate-100">
                    <a href="#">
                    <Image className="" src={"/assets/cakapinspirasi.png"} alt="klien" width={380} height={450}></Image>
                    <h1 className="font-semibold text-lg px-5 pt-5 pb-1">Cakapinspirasi</h1>
                    <p className="px-5 pb-9">Sosial Media Management</p>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Klien;