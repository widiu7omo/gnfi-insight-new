export function CTA() {
    return <div className="bg-[#ff9e24] py-12 px-4 lg:px-0">
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-md max-w-4xl mx-auto px-4 md:px-0">
            {/* Background image */}
            <img
                src={'/assets/wajah-mandalika-masa-kini-jadi-primadona-wisata-olahraga-ekonomi-semakin-menyala/gallery/11.jpeg'}
                alt="Sport Tourism"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-6 text-white">
                <div>
                    <p className="text-3xl md:text-4xl font-light italic">
                        Nikmati <span className="font-semibold not-italic">Sport Tourism</span>
                    </p>
                    <p className="text-lg mt-2 font-medium text-gray-200">#DiIndonesiaAja</p>
                </div>

                {/* CTA Button */}
                <a href="https://injourney.id" target="_blank" className="mt-4 md:mt-0 bg-white/90 rounded-full flex items-center px-4 py-2 text-gray-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                    <span className="font-medium">www.injourney.id</span>
                </a>
            </div>
        </div>
    </div>
}