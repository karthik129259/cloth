import { motion } from 'framer-motion'
import { Shield, Truck, Award, RefreshCw } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Every piece is crafted from the finest materials with meticulous attention to detail and lasting durability.'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary worldwide shipping on all orders above $500 with express delivery options available.'
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Our master tailors bring decades of experience to create perfectly fitted, luxury garments.'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day hassle-free returns and exchanges to ensure your complete satisfaction with every purchase.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Why Choose Élégance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience luxury fashion with unmatched quality, service, and attention to detail. 
            We're committed to providing you with an exceptional shopping experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6 group-hover:bg-luxury-gold/20 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-luxury-gold" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-luxury-gold to-luxury-darkgold rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold"
              >
                50K+
              </motion.div>
              <p className="text-lg text-white/90">Happy Customers</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold"
              >
                25+
              </motion.div>
              <p className="text-lg text-white/90">Years Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold"
              >
                100+
              </motion.div>
              <p className="text-lg text-white/90">Countries Served</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
