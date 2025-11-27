import { PhotoGridDesc, PhotoGridItem, PhotoGridTitle } from "@/components/post/photo-grid-item";

export function SectionFourPhotoGrid() {
    const data = [
        {
            imageUrl: `/assets/kanker-berbahaya-tetapi-bisa-dicegah/surgery.jpg`,
            title: "Pembedahan",
            desc: "Hampir seluruh jenis kanker stadium awal bisa diobati dengan  pembedahan, kadang ditambah radioterapi.",
        },
        {
            imageUrl: `/assets/kanker-berbahaya-tetapi-bisa-dicegah/radiotherapy.jpg`,
            title: "Radioterapi",
            desc: "Dilakukan dengan sinar laser berkekuatan tinggi untuk membakar sel-sel kanker hingga mati.",
        },
        {
            imageUrl: `/assets/kanker-berbahaya-tetapi-bisa-dicegah/chemotherapy.jpg`,
            title: "Kemoterapi",
            desc: "Pengobatan zat-zat kimia atau obat-obatan untuk meracuni sel Kanker. Bisa dilakukan sebagai terapi utama atau tambahan.",
        },
        {
            imageUrl: `/assets/kanker-berbahaya-tetapi-bisa-dicegah/hormone.jpg`,
            title: "Terapi Hormon",
            desc: "Biasa digunakan untuk mengobati kanker yang yang dipicu oleh kelebihan hormon.",
        },
        {
            imageUrl: `/assets/kanker-berbahaya-tetapi-bisa-dicegah/target.jpg`,
            title: "Terapi Bertarget",
            desc: "Dilakukan dengan obat-obatan untuk menghambat protein atau enzim tertentu yang mendorong pengembangbiakan dan penyebaran tumor.",
        },
    ];
    return <div className="max-w-4xl mx-auto bg-[#711DB0]">
        <div className="flex flex-wrap justify-center gap-6 xl:gap-10">
            {data.map((item, i) => {
                return (
                    <PhotoGridItem imageUrl={item.imageUrl} key={item.title} delay={i / 4}>
                        <PhotoGridTitle title={item.title} />
                        <PhotoGridDesc desc={item.desc} />
                    </PhotoGridItem>
                );
            })}
        </div>
    </div>
}