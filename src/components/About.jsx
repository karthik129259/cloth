import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-serif font-bold text-gray-900"
            >
              Crafting Luxury Since 1998
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Élégance began as a small atelier in Paris with a simple vision: to create 
              timeless pieces that embody sophistication and elegance. For over two decades, 
              we've been dedicated to preserving the art of traditional craftsmanship while 
              embracing modern design sensibilities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Each garment tells a story of meticulous attention to detail, from the selection 
              of premium fabrics to the final stitch. Our master craftsmen combine traditional 
              techniques with contemporary innovation to create pieces that transcend seasons and trends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-gray-700">Premium European fabrics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-gray-700">Handcrafted by master artisans</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-gray-700">Sustainable production methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-gray-700">Timeless, versatile designs</span>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-luxury-gold text-white font-semibold rounded-full hover:bg-luxury-darkgold transition-all duration-300 group"
            >
              Learn Our Story
              <motion.div
                whileHover={{ x: 5 }}
                className="ml-2"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-2xl"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, y: -5 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-luxury-gold rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Handcrafted Excellence</span>
              </div>
              <p className="text-sm text-gray-600">
                Every piece is individually crafted by skilled artisans using traditional techniques 
                passed down through generations.
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity }
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-darkgold rounded-full opacity-20"
            ></motion.div>

            <motion.div
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-20 -left-6 w-8 h-8 bg-luxury-gold rounded-full opacity-30"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
