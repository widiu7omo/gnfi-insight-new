import { Facebook, Instagram, Mail, ArrowRight } from "lucide-react";

export function Footer() {
    const footerItems = [
        {
            image: '/assets/gnfi.svg',
            url: 'https://www.goodnewsfromindonesia.id/',
        },
        {
            icon: <Instagram className="size-5" />,
            url: 'https://www.instagram.com/gnfi/'
        },
        {
            icon: <Facebook className="size-5" />,
            url: 'https://web.facebook.com/goodnews.id'
        }
    ];
    const companyItems = [
        {
            name: 'Tentang Kami',
            url: 'https://www.goodnewsfromindonesia.id/about'
        },
        {
            name: 'Karir',
            url: 'https://career.goodnews.id/'
        },
        {
            name: 'Kerja Sama',
            url: 'https://partner.goodnews.id/media?utm_source=gnfi&utm_campaign=visit-partner&utm_content=menu'
        }
    ];
    const resourceItems = [
        {
            name: "Seasia.co",
            url: "https://seasia.co/",
        },
        {
            name: "GNFI Academy",
            url: "https://gnfiacademy.id/",
        },
        {
            name: "GoodStats",
            url: "https://goodstats.id/",
        },
        {
            name: "GNFI",
            url: "https://goodnewsfromindonesia.id/",
        }
    ]
    return (
        <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-3">
                            <img src="/assets/gnfi-insight.png" className='max-w-[60px]' alt="GNFI Insight" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">GNFI Insight</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                            Bangun Wawasan Lewat Data dan Cerita. GNFI Insight berkomitmen menghadirkan konten mendalam berbasis data dan visual interaktif.
                        </p>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Berlangganan Newsletter</h4>
                            <div className="flex gap-2 max-w-md">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                                    <input
                                        type="email"
                                        placeholder="Masukkan email anda"
                                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                                    />
                                </div>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium">
                                    Subscribe
                                    <ArrowRight className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pl-12">
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Company</h4>
                            <ul className="space-y-4">
                                {companyItems.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.url} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block w-fit">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Resources</h4>
                            <ul className="space-y-4">
                                {resourceItems.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.url} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block w-fit">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Social</h4>
                            <div className="flex flex-col gap-4">
                                {footerItems.map((social) => (
                                    <a
                                        key={social.url}
                                        href={social.url}
                                        className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                                        aria-label={social.url}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-blue-600 dark:group-hover:border-blue-600 transition-colors">
                                            {social.icon !== undefined && social.icon}
                                            {social.image !== undefined && <img className="size-6 brightness-0 invert group-hover:brightness-100 dark:group-hover:brightness-0 dark:group-hover:invert transition-all" src={social.image} alt="" />}
                                        </div>
                                        <span className="text-sm font-medium">
                                            {social.url.includes('instagram') ? 'Instagram' :
                                                social.url.includes('facebook') ? 'Facebook' : 'Website'}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} GNFI Insight. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500 dark:text-gray-500">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
