import { createFileRoute, Link } from '@tanstack/react-router'
import { $getAllPosts } from '@/server/post'
import {
  Newspaper,
  Clock,
  ArrowRight
} from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'motion/react'
import { HeroSection } from '@/components/home/hero-section'
import { TrendingSection } from '@/components/home/trending-section'
// import { NewsletterSection } from '@/components/home/newsletter-section'
import { Footer } from '@/components/home/footer'
import { Navbar } from '@/components/home/navbar'
import { useInfiniteQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: async () => {
    const result = await $getAllPosts({ data: { offset: 0, limit: 10, finished: true } })
    return { posts: result.posts, meta: result.meta }
  }
})

function HomePage() {
  const initialData = Route.useLoaderData()

  // Use React Query for caching and infinite scroll
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 0 }) => {
      const result = await $getAllPosts({
        data: { offset: pageParam, limit: 10 }
      })
      return result
    },
    getNextPageParam: (lastPage, allPages) => {
      // Calculate the next offset
      const totalPosts = allPages.reduce((acc, page) => acc + page.posts.length, 0)
      return lastPage.meta.hasMore ? totalPosts : undefined
    },
    initialPageParam: 0,
    initialData: {
      pages: [{ posts: initialData.posts, meta: initialData.meta }],
      pageParams: [0],
    },
  })

  // Flatten all pages into a single array of posts
  const posts = data?.pages.flatMap(page => page.posts) ?? []
  const meta = data?.pages[data.pages.length - 1]?.meta ?? initialData.meta
  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollTop + windowHeight >= documentHeight - 300) {
        if (!isFetchingNextPage && hasNextPage) {
          fetchNextPage()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFetchingNextPage, hasNextPage, fetchNextPage])

  const featuredPost = posts[0]
  const trendingPosts = posts.slice(1, 4)
  const gridPosts = posts.slice(4)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <Navbar />

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <Newspaper className="w-10 h-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No stories found</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            We couldn't find any articles at the moment. Please check back later.
          </p>
        </div>
      ) : (
        <main>
          {/* Hero Section */}
          {featuredPost && <HeroSection post={featuredPost} />}

            {/* Trending Section */}
            {trendingPosts.length > 0 && <TrendingSection posts={trendingPosts} />}

            {/* Latest Insights Grid */}
            <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8" id='latest'>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Latest Insights
                </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    Explore our collection of in-depth articles, analyses, and stories from around the globe.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to="/$slug"
                      params={{ slug: post.slug }}
                      className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10 transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative aspect-16/10 overflow-hidden">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                            <Newspaper className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-6">
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
                          <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                            Article
                          </span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>5 min read</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>

                        {post.description && (
                          <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-1">
                            {post.description}
                          </p>
                        )}

                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm mt-auto group/link">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Loading indicator */}
              {isFetchingNextPage && (
                <div className="flex justify-center items-center py-16">
                  <div className="w-10 h-10 rounded-full border-4 border-gray-200 dark:border-gray-800 border-t-blue-600 animate-spin"></div>
                </div>
              )}

              {/* End of posts message */}
              {!hasNextPage && !isFetchingNextPage && posts.length > 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-500">You've reached the end of the list.</p>
                </div>
              )}
            </section>

            {/* Newsletter Section */}
            {/* <NewsletterSection /> */}
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
