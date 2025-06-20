"use client";
import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from "framer-motion";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden font-sora">
      <div
        className="relative w-full justify-center bg-cover bg-top pt-6 md:pt-20 lg:py-32 lg:pb-4"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.1.jpg)` }}
      >
        <div className="max-w-4xl mx-auto pb-28 relative z-10">
          <div className="w-[70%] space-y-8">
            <div className="text-6xl font-extrabold pr-20">Lebih dari sekadar hobi</div>
            <div className="text-3xl font-semibold pr-[8rem]">Yang mulanya dari hobi pribadi, bersepeda bisa mengarah ke ajang silaturahmi.</div>
            <div className="text-xl font-medium pr-[8rem]">Komunitas sepeda yang diikuti goweser lintas usia buktinya menjamur di mana-mana. Agenda yang dimiliki mereka pun beragam, seperti meramaikan event sepeda gembira (fun bike), piknik bareng sambil bersepeda, sampai touring keluar kota.</div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[30rem] bg-cover bg-right" style={{ backgroundImage: `url(${baseUrl}/assets/4.3.png)` }}>
        <div className="h-full absolute w-full bg-gradient-to-l from-[20%] from-[#12150c]" />
        <div className="max-w-7xl h-full mx-auto relative flex flex-col">
          <img src={baseUrl + '/assets/4.2.png'} alt="Gowes" className="h-fit -top-[7.4rem] absolute object-bottom mt-auto w-full" />
          <div className="ml-auto w-[55%] my-auto space-y-8">
            <div className="text-xl text-white">Kompetisi sering pula digelar antarsesama penghobi. Sekalipun bukan atlet dan terkadang tak ada hadiah dijanjikan, pesepeda kerap dipancing beradu gengsi.</div>
            <div className="text-xl text-white"><b>Salasakahiji, Bentang Jawa, dan Lintang Flores</b> adalah beberapa event bagi penggila sepeda di Indonesia yang ingin memacu adrenalin lewat kompetisi.</div>
          </div>
        </div>
      </div>
      <div className="relative w-full pt-20 pb-20 bg-cover bg-bottom" style={{ backgroundImage: `url(${baseUrl}/assets/4.4.jpg)` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-4xl text-white font-bold px-6">Dan bersepeda jauh dari kata rugi karena pundi-pundi rupiah bisa diraih.</div>
          <div className="space-y-8 py-12">
            <div className="bg-[#ffbc25] shadow-lg rounded-[3rem] flex items-start p-6 space-x-8">
              <img src={baseUrl + '/assets/4.5.png'} alt="" className="-mt-8" />
              <div className="text-xl tracking-wide mt-4 leading-normal">Bisa dilihat di Tanjung Priok, Jakarta Utara, <b>ojek sepeda</b> tetap eksis meski harus bersaing dengan transportasi bermotor.</div>
            </div>
            <div className="bg-[#ffbc25] shadow-lg rounded-[3rem] flex items-start p-6 space-x-8">
              <img src={baseUrl + '/assets/4.6.png'} alt="" className="-mt-8" />
              <div className="text-xl tracking-wide mt-4 leading-normal">Lalu di lingkup kepariwisataan sepeda suka dihadirkan sebagai hiburan memanjakan turis yang ingin merasakan sensasi <b>bersepeda di alam</b> pedesaan Indonesia.</div>
            </div>
          </div>
        </div>
        <Paragraph block={{
          component: COMPONENT_PARAGRAPH,
          componentProps: {
            className: "max-w-[65ch] mx-auto text-white font-sans",
            children: (<>
              <p>Satu hal yang layak ditegaskan ialah sepeda kuat kaitannya sebagai transportasi penyambung hidup. Di samping atlet profesional, sepeda artinya bagi orang-orang biasa semisal bapak-bapak di kawasan Tanjung Priok, Jakarta Utara. Di tengah ketatnya persaingan melawan kendaraan bermotor, mereka masih memiliki semangat dan daya energi mencari lembar-lembar rupiah sebagai tukang ojek sepeda. Selain itu, jangan lupa bisnis kepariwisataan kerap didukung dengan fasilitas sepeda. Seperti yang dilakukan Muntowil dengan Towilfiets-nya di Yogyakarta yang mana ia menyediakan sepeda onthel bagi wisatawan untuk tur keliling desa.</p>
              <p>Kesadaran akan lingkungan juga memicu pemakaian sepeda pada era modern. Komunitas semacam Bike to Work (B2W) Indonesia lantas muncul di mana mereka menggalakkan kampanye pergi bekerja dengan cara bersepeda sebagai salah satu bentuk kepedulian kesehatan dan lingkungan.</p>
              <p>Banyak tantangan untuk mengembalikan budaya bersepeda masyarakat Indonesia. Biasanya, cuaca menjadi alasan klasik untuk tidak memakai transportasi ini dalam keseharian. Namun, harapan untuk menuju ke sana kelihatannya masih ada. Booming sepeda pada pandemi Covid-19 lalu dan semakin sadarnya orang Indonesia akan kesehatan dengan cara berolahraga mendorong pemerintah ikut mendukung kebijakan pengadaan jalur sepeda di beberapa kota di Indonesia.</p>
            </>)
          }
        }} />
      </div>
      <div className="absolute top-0 h-[10%] w-full bg-gradient-to-b from-[#d4d6de]" />

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
