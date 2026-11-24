import { motion } from 'framer-motion';

const Footer = () => {
  const teamMembers = [
    'Parlapalli Vishnu Vardhan',
    'Parlapalli Sravan Kumar',
    'Parlapalli Charan',
    'Parlapalli Pawan Nikhil',
  ];

  return (
    <footer className="bg-goa-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Parlapalli</span> Brothers
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Four brothers, one incredible journey through the beautiful beaches,
              historic churches, and vibrant culture of Goa. This website captures
              our amazing memories and experiences as the Parlapalli Brothers.
            </p>
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Our Team</h4>
            <ul className="space-y-3">
              {teamMembers.map((member, index) => (
                <motion.li
                  key={index}
                  className="text-gray-300 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-2 h-2 bg-goa-orange rounded-full mr-3" />
                  {member}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Parlapalli Brothers Goa Adventure. Made with love by 4 brothers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;