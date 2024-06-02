import Image from "next/image";

const Features = () => {
    return (
        <div className="container py-10">
            <div className="flex justify-center items-center">
                <div>
                    <Image className="my-20" src={"/assets/keunggulan.png"} alt="login" width={360} height={450}></Image>
                </div>
                <div className="">
                    <div className="font-bold text-xl text-gray-700 ">Keunggulan Kami</div>
                    <div className="font-regular text-sm text-gray-700">Cakapind Menghadirkan lebih dari sekadar visual menarik.<br />
                        Dengan Inovasi yang menggetarkan dan detail yang mengesankan,<br /> Cakapind menawarkan lebih dari hanya media promosi.
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className=" mt-5 inline-block font-semibold bg-transparent border-2 rounded-large py-4">
                            <div className="flex justify-center items-center gap-2 ">
                                <Image src={"/assets/ufo.svg"} alt="icon" width={32} height={32}></Image>
                                <p>
                                    Pekerjaan Cepat dan Tepat
                                </p>
                            </div>
                        </div>
                        <div className=" mt-5 inline-block font-semibold bg-transparent border-2 rounded-large py-4">
                            <div className="flex justify-center items-center gap-2">
                                <Image src={"/assets/magicstaff.svg"} alt="icon" width={32} height={32}></Image>
                                <p>
                                    Transaksi Mudah dan Cepat
                                </p>
                            </div>
                        </div>
                        <div className=" mt-5 inline-block font-semibold bg-transparent border-2 rounded-large py-4">
                            <div className="flex justify-center items-center gap-2">
                                <Image src={"/assets/behel.svg"} alt="icon" width={32} height={32}></Image>
                                <p>
                                    Design Modern dan Custom
                                </p>
                            </div>
                        </div>
                        <div className=" mt-5 inline-block font-semibold bg-transparent border-2 rounded-large py-4">
                            <div className="flex justify-center items-center gap-2">
                                <Image src={"/assets/kubus.svg"} alt="icon" width={32} height={32}></Image>
                                <p>
                                    Keamanan dan Kenyamanan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Features;