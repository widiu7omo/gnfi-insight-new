import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { LucideAArrowDown } from "lucide-react";

const meta = {
    title: "Insight/Carousel",
    component: Carousel,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
    args: {
        items: [],
        indicator: <LucideAArrowDown />

    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
    args: {
        items: [
            {
                name: "Gula Pasir",
                image: "string;",
                desc: <>
                    <p>Gula pasir merupakan gula yang paling jamak digunakan di Indonesia. Berbentuk butir-butir kecil, gula pasir terbuat dari tebu atau buah bit.</p>
                    <p>Gula pasir memiliki warna tergantung pada tahap pengolahan. Gula pasir yang diolah secara sempurna memiliki warna putih bersih seperti salju. Sementara itu, gula yang tidak diproses sepenuhnya biasanya berwarna cokelat kekuningan.</p></>,
                slug: "gula-pasir"
            },
            {
                name: "Gula Semut",
                image: "string;",
                desc: <>
                    <p>Gula semut berbentuk mirip seperti gula pasir. Akan tetapi, yang membedakan ialah bahan baku pembuatan. Gula semut dibuat dari gula kelapa yang diolah dari nira pohon kelapa dan dihaluskan. Gula semut jamak ditemui di Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta (DIY).</p>
                </>,
                slug: "gula-semut"
            },
            {
                name: "Gula Met",
                image: "string;",
                desc: <>
                    <p>Gula semut berbentuk mirip seperti gula pasir. Akan tetapi, yang membedakan ialah bahan baku pembuatan. Gula semut dibuat dari gula kelapa yang diolah dari nira pohon kelapa dan dihaluskan. Gula semut jamak ditemui di Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta (DIY).</p>
                </>,
                slug: "gula-met"
            },
        ],
        indicator: <LucideAArrowDown />,
        childClassName: 'text-gray-800'
    }

};
