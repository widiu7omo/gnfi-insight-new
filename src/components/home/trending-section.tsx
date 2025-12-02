import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { TrendingUp, ArrowRight } from 'lucide-react'

interface Post {
  slug: string
  title: string
  description: string
  image: string
}

interface TrendingSectionProps {
  posts: Post[]
}

export function TrendingSection({ posts }: TrendingSectionProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800" id='trending'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <TrendingUp className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            {/* Navigation buttons could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to="/$slug" params={{ slug: post.slug }} className="block h-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full font-bold text-gray-900 shadow-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Popular
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium pt-2">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
