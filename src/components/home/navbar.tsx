import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/theme-provider'
import { cn } from '@/lib/utils'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Trending', href: '#trending' }, // Assuming we might add IDs later or just link to sections
        { name: 'Latest', href: '#latest' },
        // { name: 'Newsletter', href: '#newsletter' },
    ]

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault()
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
            }
        }
    }

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
                    isScrolled
                        ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            <Link to="/" className="flex items-center gap-2 group">
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={'/assets/gnfi-insight.png'}
                                        alt="GNFI Insight"
                                        className={cn(
                                            "h-10 w-auto transition-all duration-300",
                                            // Logic to handle logo color: 
                                            // If not scrolled (transparent bg), usually we want white text/logo if hero is dark.
                                            // But hero image might be light? The original code assumed dark hero?
                                            // Let's assume hero is dark text on light bg or vice versa.
                                            // Actually, the hero has a dark overlay. So white logo is good when not scrolled.
                                            // When scrolled (white/dark bg), we need contrast.
                                        )}
                                    />
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <motion.div
                            className="hidden md:flex items-center gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            {navLinks.map((link, index) => {
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.2 + index * 0.05,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        whileHover={{ y: -1 }}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-blue-500 relative",
                                            isScrolled ? "text-gray-600 dark:text-gray-300" : "text-white/90 hover:text-white"
                                        )}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                    >
                                        {link.name}
                                    </motion.a>
                                )
                            })}
                        </motion.div>

                        {/* Actions */}
                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            {/* Theme Toggle */}
                            <motion.button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className={cn(
                                    "p-2 rounded-full transition-all duration-300",
                                    isScrolled
                                        ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                                        : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                                )}
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className={cn(
                                    "md:hidden p-2 rounded-lg transition-colors",
                                    isScrolled
                                        ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                                        : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                                )}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className="fixed top-[60px] left-0 right-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 md:hidden overflow-hidden shadow-xl"
                    >
                        <motion.div
                            className="container mx-auto px-4 py-6 flex flex-col gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
