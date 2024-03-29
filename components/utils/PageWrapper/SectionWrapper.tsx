"use client";

import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible')
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper;
