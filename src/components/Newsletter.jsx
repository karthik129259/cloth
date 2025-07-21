import { motion } from 'framer-motion'
import { Mail, Gift, Sparkles } from 'lucide-react'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity }
        }}
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-luxury-gold/10 to-luxury-darkgold/10 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ 
          rotate: -360,
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          x: { duration: 10, repeat: Infinity },
          y: { duration: 12, repeat: Infinity }
        }}
        className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-luxury-gold/5 to-luxury-darkgold/5 rounded-full blur-2xl"
      ></motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/20 rounded-full mb-6"
            >
              <Mail className="w-8 h-8 text-luxury-gold" />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Stay In Style
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and styling tips. 
              Join our community of fashion enthusiasts.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <Gift className="w-8 h-8 text-luxury-gold mb-3" />
              <h3 className="font-semibold text-white mb-2">Exclusive Offers</h3>
              <p className="text-sm text-gray-400 text-center">
                Get early access to sales and special discounts up to 30% off
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <Sparkles className="w-8 h-8 text-luxury-gold mb-3" />
              <h3 className="font-semibold text-white mb-2">New Arrivals</h3>
              <p className="text-sm text-gray-400 text-center">
                Be first to shop the latest collections before they sell out
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <Mail className="w-8 h-8 text-luxury-gold mb-3" />
              <h3 className="font-semibold text-white mb-2">Style Guide</h3>
              <p className="text-sm text-gray-400 text-center">
                Receive personalized styling tips and fashion inspiration
              </p>
            </motion.div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-luxury-gold text-white font-semibold rounded-full hover:bg-luxury-darkgold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Subscribe
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Welcome to Élégance!</h3>
                <p className="text-gray-300">
                  Thank you for subscribing. Check your inbox for a welcome gift!
                </p>
              </motion.div>
            )}

            <p className="text-sm text-gray-400 mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe anytime.
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center space-x-8 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 bg-gradient-to-br from-luxury-gold to-luxury-darkgold rounded-full border-2 border-gray-900"
                  ></motion.div>
                ))}
              </div>
              <span className="text-sm">Join 50,000+ subscribers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
