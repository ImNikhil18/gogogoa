import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const brothers = [
    'Parlapalli Vishnu Vardhan',
    'Parlapalli Sravan Kumar',
    'Parlapalli Charan',
    'Parlapalli Pawan Nikhil',
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-goa-dark via-goa-blue to-goa-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-goa-orange/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-goa-sand/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Story
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The <span className="text-gradient">Parlapalli</span> Brothers
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Four brothers united by blood, friendship, and a shared dream of exploring
            the wonders of Goa. This journey is more than just a trip—it's a celebration
            of brotherhood, adventure, and the memories we'll cherish forever.
          </motion.p>
        </motion.div>

        {/* Brothers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {brothers.map((brother, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-goa-orange to-goa-sand rounded-full mx-auto mb-4 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl font-bold text-white">
                  {brother.split(' ')[1]?.charAt(0) || brother.charAt(0)}
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{brother}</h3>
              <p className="text-white/60 text-sm">Brother #{index + 1}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.blockquote
            className="text-2xl md:text-3xl font-light text-white/90 italic max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            "In the waves of the Arabian Sea, we found not just adventure,
            but the unbreakable bond of four brothers exploring paradise together."
          </motion.blockquote>
          
          <motion.div
            className="mt-6 flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-goa-orange" />
            <span className="text-goa-orange font-semibold">The Parlapalli Brothers</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-goa-orange" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;