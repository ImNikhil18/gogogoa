import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

const Section = ({ section, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const isEven = index % 2 === 0;

  return (
    <section
      id={section.id}
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      {/* Background decorative element */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-goa-orange/5 rounded-full blur-3xl"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-goa-blue/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isEven ? '' : 'lg:grid-flow-col-dense'
          }`}
        >
          {/* Text Content */}
          <motion.div
            className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-goa-orange/10 text-goa-orange font-semibold rounded-full text-sm mb-4">
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {section.title}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {section.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to={`/section/${section.id}`}>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore {section.title}
                </motion.button>
              </Link>
            </motion.div>

            {section.tagline && (
              <motion.p
                className="text-lg text-goa-orange font-semibold italic mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                "{section.tagline}"
              </motion.p>
            )}
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
          >
            <ImageCarousel images={section.images} title={section.title} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;