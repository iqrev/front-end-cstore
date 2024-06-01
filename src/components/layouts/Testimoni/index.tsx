import Image from "next/image";

const Testimoni = () => {
    return (
        <div className="container mx-auto ">
            <h1 className="uppercase text-center text-orange-300 font-semibold text-lg">Testimoni</h1>
            <h1 className="text-center font-bold text-3xl text-gray-700">Apa kata Mereka?</h1>
            <div className="flex justify-center gap-2">
                <hr className="h-0.5 bg-orange-300 w-4/12 "/>
                <hr className="h-0.5 bg-orange-300 w-1/5"/>
            </div>
            <div className="grid grid-cols-2 gap-4 my-10 text-gray-700">
                <div className="rounded-large border hover:bg-slate-100">
                    <div className="flex gap-4 my-10 px-10 ">
                        <div className="flex-none">
                            <Image className="mx-auto" src={"/assets/starlord.png"} alt="testimoni" width={100} height={100}></Image>
                            <p className="text-2xl font-semibold text-center">Star Lord</p>
                            <p className="uppercase text-center">Pengusaha</p>
                        </div>
                        <div className="flex-auto">
                            <Image className="" src={"/assets/Star Rating.png"} alt="bintang" width={200} height={100}></Image>
                            <p className="">Sejak menggunakan jasa manajemen media sosial dari Cakapind,, interaksi di akun bisnis kami meningkat drastis. Kami mendapatkan banyak followers baru dan engagement rate yang lebih tinggi. Layanan ini sangat direkomendasikan!</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-large border hover:bg-slate-100">
                    <div className="flex gap-4 my-10 px-10 ">
                        <div className="flex-none ">
                            <Image className="mx-auto" src={"/assets/dianne.png"} alt="testimoni" width={100} height={100}></Image>
                            <p className="text-2xl font-semibold">Dianne Russel</p>
                            <p className="uppercase text-center">UMKM</p>
                        </div>
                        <div className="flex-auto">
                            <Image className="" src={"/assets/Star Rating.png"} alt="bintang" width={200} height={100}></Image>
                            <p className="">Desain produk kami kini jauh lebih menarik berkat jasa desain kustom dari Cakapind. Hasil kerjanya sangat detail dan profesional. Kami pasti akan menggunakan layanan ini lagi untuk proyek-proyek berikutnya!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimoni;
