import { baseUrl } from "@/constants/meta";

export default function Footer() {
    return (
        <div className="text-red-500 bg-white w-full text-center py-8 text-base xl:text-2xl relative overflow-clip flex flex-col items-center space-y-8">

            <div className="sharethis-inline-share-buttons" />
            <div>
                <span className="text-lg">Dibuat oleh </span>
                <span className="font-bold">Good News From Indonesia</span>
            </div>
            <div className="">
                <img src={`${baseUrl}/assets/gnfi.svg`} alt="Logo GNFI" className="h-[80px]" />
            </div>
            <footer
                className="relative flex justify-center items-end"
            >
                <div className="lg:w-1/2 p-6 lg:px-0 lg:py-12 mx-auto relative z-10">
                    <p className="text-center font-bold">Editor</p>
                    <p className="text-center mb-6">Akhyari Hananto</p>
                    <p className="text-center font-bold">Penulis</p>
                    <p className="text-center mb-6">Akhyari Hananto</p>
                    <p className="text-center font-bold">Desain & Visual</p>
                    <p className="text-center mb-6">Tim Kreatif GNFI</p>
                    <p className="text-center font-bold">Web Developer</p>
                    <p className="text-center mb-6">Danar Widi Utomo & Fika Nur Aini</p>
                </div>
            </footer>
            <div className="flex flex-col">
                <span className="text-lg">Diterbitkan pada</span>
                <span className="font-bold">30 September 2025</span>
            </div>
            {/* @ts-ignore */}
            <div className="donation-container" program="gnfi-insight-bangun-wawasan-lewat-data-dan-cerita" button-style="background:#ff0000 !important;"></div>
        </div>
    );
}
