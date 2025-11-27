'use client';

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    LinkedinShareButton,
    EmailShareButton,
    FacebookIcon,
    XIcon,
    WhatsappIcon,
    TelegramIcon,
    LinkedinIcon,
    EmailIcon
} from "react-share";
import { Link, Share2, Heart } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";

export default function Footer({ publishedAt }: { publishedAt: string }) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const title = "GNFI Insight - Bangun Wawasan Lewat Data dan Cerita";

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        toast.success("Link berhasil disalin!");
    };

    const shareButtons = [
        {
            Button: FacebookShareButton,
            Icon: FacebookIcon,
            label: "Facebook",
            props: { url: shareUrl }
        },
        {
            Button: TwitterShareButton,
            Icon: XIcon,
            label: "Twitter",
            props: { url: shareUrl, title }
        },
        {
            Button: WhatsappShareButton,
            Icon: WhatsappIcon,
            label: "WhatsApp",
            props: { url: shareUrl, title, separator: ":: " }
        },
        {
            Button: TelegramShareButton,
            Icon: TelegramIcon,
            label: "Telegram",
            props: { url: shareUrl, title }
        },
        {
            Button: LinkedinShareButton,
            Icon: LinkedinIcon,
            label: "LinkedIn",
            props: { url: shareUrl, title, source: "GNFI Insight" }
        },
        {
            Button: EmailShareButton,
            Icon: EmailIcon,
            label: "Email",
            props: { url: shareUrl, subject: title, body: "Check this out!" }
        }
    ];

    return (
        <div className="w-full relative overflow-hidden bg-white">

            {/* Premium Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-50/40 via-white to-white" />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">

                {/* Share Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-100/50 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl" />

                        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
                            <div className="flex flex-col items-center gap-10">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="p-3 bg-linear-to-br from-red-50 to-white rounded-2xl shadow-sm border border-red-100/50">
                                        <Share2 className="size-6 text-red-600" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center">
                                        Bagikan Insight Ini
                                    </h3>
                                    <p className="text-gray-500 text-center max-w-md">
                                        Bantu kami menyebarkan kabar baik dan data menarik tentang Indonesia ke jaringan Anda.
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                    {shareButtons.map(({ Button, Icon, label, props }) => (
                                        <motion.div
                                            key={label}
                                            whileHover={{ scale: 1.1, y: -4 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button {...props} className="group flex flex-col items-center gap-3 outline-none">
                                                <div className="relative p-1.5 rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-red-100 group-hover:shadow-lg group-hover:shadow-red-500/10 transition-all duration-300">
                                                    <Icon size={48} round className="filter saturate-[0.8] group-hover:saturate-100 transition-all duration-300" />
                                                </div>
                                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest group-hover:text-red-500 transition-colors">
                                                    {label}
                                                </span>
                                            </Button>
                                        </motion.div>
                                    ))}

                                    <motion.button
                                        onClick={handleCopyLink}
                                        whileHover={{ scale: 1.1, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex flex-col items-center gap-3 outline-none"
                                    >
                                        <div className="relative p-1.5 rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-red-100 group-hover:shadow-lg group-hover:shadow-red-500/10 transition-all duration-300">
                                            <div className="size-[48px] rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-white transition-colors">
                                                <Link className="size-6 text-gray-600 group-hover:text-red-500 transition-colors" />
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest group-hover:text-red-500 transition-colors">
                                            Salin Link
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="max-w-xs mx-auto mb-16">
                    <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
                </div>

                {/* Branding */}
                <div className="flex flex-col items-center gap-6 mb-16">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium tracking-wide uppercase">
                        <span>Dibuat dengan</span>
                        <Heart className="size-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>oleh</span>
                    </div>
                    <img src='/assets/gnfi.svg' alt="Logo GNFI" className="h-24 opacity-90 hover:opacity-100 transition-opacity drop-shadow-sm" />
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl text-center font-bold text-gray-900 tracking-tight">Good News From Indonesia</span>
                        <span className="text-gray-500">Makin Tahu Indonesia</span>
                    </div>
                </div>

                {/* Credits Grid */}
                <div className="max-w-5xl mx-auto border-t border-gray-100 pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center md:text-left space-y-2">
                            <p className="text-xs font-bold text-center text-red-600 uppercase tracking-widest">Editor</p>
                            <p className="text-lg text-gray-800 text-center font-medium">Aulli Atmam</p>
                        </div>
                        <div className="text-center md:text-left space-y-2">
                            <p className="text-xs font-bold text-center text-red-600 uppercase tracking-widest">Penulis</p>
                            <p className="text-lg text-gray-800 text-center font-medium">Tim Redaksi GNFI</p>
                        </div>
                        <div className="text-center md:text-left space-y-2">
                            <p className="text-xs font-bold text-center text-red-600 uppercase tracking-widest">Desain & Visual</p>
                            <p className="text-lg text-gray-800 text-center font-medium">Tim Kreatif GNFI</p>
                        </div>
                        <ul className="text-center md:text-left space-y-2">
                            <p className="text-xs font-bold text-center text-red-600 uppercase tracking-widest">Web Developer</p>
                            <p className="text-lg text-gray-800 text-center font-medium">Techino GNFI</p>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 flex flex-col items-center gap-4">
                    <div className="px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-2">
                        <span className="text-xs text-gray-500 font-medium">Diterbitkan pada</span>
                        <span className="text-xs font-bold text-gray-900">{new Date(publishedAt).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}</span>
                    </div>
                    {/* @ts-ignore */}
                    <div className="donation-container" program="gnfi-insight-bangun-wawasan-lewat-data-dan-cerita" button-style="background:#ff0000 !important;"></div>
                </div>

            </div>

        </div>
    );
}
