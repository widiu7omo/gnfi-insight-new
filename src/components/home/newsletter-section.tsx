import { motion } from 'motion/react'
import { Mail, ArrowRight } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50" id='newsletter'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-blue-600 dark:bg-blue-700 shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative px-6 py-16 md:px-12 md:py-20 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8 text-white">
                <Mail className="w-8 h-8" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay ahead with our latest insights
              </h2>

              <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                Join 10,000+ readers and get the best stories delivered right to your inbox. No spam, just quality content.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="mt-6 text-sm text-blue-200">
                By subscribing, you agree to our Terms & Privacy Policy.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
