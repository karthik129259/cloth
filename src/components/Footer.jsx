import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show scroll to top button when user scrolls down
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const footerLinks = {
    Shop: [
      'New Arrivals',
      'Women\'s Collection',
      'Men\'s Collection',
      'Accessories',
      'Sale Items',
      'Gift Cards'
    ],
    Company: [
      'About Us',
      'Our Story',
      'Careers',
      'Press',
      'Sustainability',
      'Store Locations'
    ],
    'Customer Care': [
      'Size Guide',
      'Shipping Info',
      'Returns & Exchanges',
      'Care Instructions',
      'Contact Us',
      'FAQ'
    ],
    Connect: [
      'Newsletter',
      'Style Blog',
      'Personal Styling',
      'VIP Program',
      'Affiliate Program',
      'Reviews'
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity }
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-luxury-gold rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity },
            y: { duration: 10, repeat: Infinity }
          }}
          className="absolute bottom-40 left-20 w-24 h-24 bg-luxury-gold rounded-full"
        ></motion.div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-serif font-bold text-luxury-gold mb-6 cursor-pointer"
              >
                Élégance
              </motion.h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting timeless luxury fashion with uncompromising quality and elegance. 
                Experience the art of sophisticated dressing.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <span>123 Fashion Avenue, Paris, France</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <span>+33 1 23 45 67 89</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <span>hello@elegance.com</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-luxury-gold mb-6">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href="#"
                        className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h4 className="text-lg font-semibold text-luxury-gold mb-4">
                  Follow Our Journey
                </h4>
                <p className="text-gray-300">
                  Stay connected for daily style inspiration and behind-the-scenes content
                </p>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.2,
                        y: -5,
                        backgroundColor: '#D4AF37'
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-luxury-gold/10 to-luxury-darkgold/10 rounded-2xl p-8 mb-8"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-serif font-bold text-luxury-gold mb-4">
                Exclusive Access Awaits
              </h4>
              <p className="text-gray-300 mb-6">
                Join our VIP list for early access to new collections and exclusive offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-luxury-gold text-white font-semibold rounded-lg hover:bg-luxury-darkgold transition-colors duration-300"
                >
                  Join VIP
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
                <span>© 2024 Élégance. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Paris</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <motion.a
                  whileHover={{ color: '#D4AF37' }}
                  href="#"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  whileHover={{ color: '#D4AF37' }}
                  href="#"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  whileHover={{ color: '#D4AF37' }}
                  href="#"
                >
                  Cookie Policy
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-luxury-gold text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
