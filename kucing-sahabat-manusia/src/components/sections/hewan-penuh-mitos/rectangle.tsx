"use client";
import Paragraph from "@/components/reusable/paragraph";
import { Inter } from "next/font/google";
import Ornament3 from "./ornament3";

export const interFont = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function Rectangle() {
    return (
        <div className="absolute py-9 pl-9 pr-6 left-[27%] top-[-7%] item-center w-[46%] xl:block bg-[#2C2C2C]">
            <Paragraph
                className={`z-30 text-white ${interFont.className} relative font-[400] text-[17px]`}
            >
                <Ornament3 />
                <p>
                    Masyarakat di berbagai daerah mengenal mitos mengenai kucing
                </p>
                <p>
                    Di Jawa, ada naskah bernama <i className={`text-[#FAD30D] font-[700]`}>Serat Ngalamating Kucing</i>. 
                    Isinya adalah catatan mengenai hubungan antara warna 
                    kucing tertentu dengan nasib yang akan menimpa 
                    pemiliknya.
                </p>
                <p>
                    Di luar Jawa, salah satu mitos tentang kucing yang 
                    dikenal, adalah punya cerita Sulawesi Selatan 
                    <i className={`text-[#FAD30D] font-[700]`}> Meong Palo Karellae</i> atau 
                    <i className={`text-[#FAD30D] font-[700]`}> kucing belang tiga</i>. 
                    Cerita rakyat ini tercatat dalam berjudul kitab  
                    <i className={`text-[#FAD30D] font-[700]`}> Sureq La Galigo</i>
                </p>
                <p className={`font-[600] text-[21px]`}>
                    Ada pula kepercayaan bahwa kucing memiliki sembilan nyawa
                </p>
                <p>
                    Penjelasan logisnya, kucing memiliki tubuh yang lentur. 
                    Kucing terdiri dari susunan tulang dan otot yang lentur 
                    sehingga cukup fleksibel. Kondisi tersebut yang menyebabkan 
                    sebagian besar kucing selamat meskipun jatuh dari ketinggian.
                </p>
            </Paragraph>
        </div>
    );
}
