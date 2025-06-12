import { baseUrl } from "@/constants/meta";

export default function Footer() {
    return (
        <div className="relative flex flex-col items-center w-full py-8 text-base text-center text-red-500 bg-white xl:text-2xl overflow-clip space-y-8">
            <div className="sharethis-inline-share-buttons" />
            <div>
                <span className="text-lg">Dibuat oleh </span>
                <span className="font-bold">Good News From Indonesia</span>
            </div>
            <div className="">
                <img src={`${baseUrl}/assets/gnfi.svg`} alt="Logo GNFI" className="h-[80px]" />
            </div>
            <footer
                className="relative flex items-end justify-center"
            >
                <div className="relative z-10 p-6 mx-auto lg:w-1/2 lg:px-0 lg:py-12">
                    <p className="font-bold text-center">Editor</p>
                    <p className="mb-6 text-center">Aulli Atmam</p>
                    <p className="font-bold text-center">Penulis</p>
                    <p className="mb-6 text-center">Aslamatur Rizqiyah, Afdal Hasan, Muhammad Fazer Mileneo, Firdarainy Nuril Izzah & Rizky Kusumo</p>
                    <p className="font-bold text-center">Desain & Visual</p>
                    <p className="mb-6 text-center">Arco Pradipta & Ario Priagung Nugroho</p>
                    <p className="font-bold text-center">Web Developer</p>
                    <p className="mb-6 text-center">Danar Widi Utomo & Fika Nur Aini</p>
                </div>
            </footer>
            <div className="flex flex-col">
                <span className="text-lg">Diterbitkan pada</span>
                <span className="font-bold">8 April 2025</span>
            </div>
            {/* @ts-ignore */}
            <div className="donation-container" program="gnfi-insight-bangun-wawasan-lewat-data-dan-cerita"></div>
        </div>
    );
}
