import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Clock, ArrowRight } from 'lucide-react'

interface Post {
  slug: string
  title: string
  description: string
  image: string
}

interface HeroSectionProps {
  post: Post
}

export function HeroSection({ post }: HeroSectionProps) {
  if (!post) return null

  return (
    <section className="relative w-full h-dvh min-h-[600px] overflow-hidden">
      {/* Background Image with Parallax Effect (simulated with scale) */}
      <div className="absolute inset-0">
        <motion.img
          src={post.image}
          alt={post.title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 top-0 bg-radial-[at_45%_-10%] from-gray-800/50 to-transparent to-30%" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Featured Story
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl line-clamp-3">
                {post.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/$slug"
                params={{ slug: post.slug }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg transition-all hover:bg-blue-50 hover:pr-10"
              >
                Read Article
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">5 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  )
}
