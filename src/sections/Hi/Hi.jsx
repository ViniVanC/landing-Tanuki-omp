import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export const Hi = () => {
  return (
    <section
      id="hi"
      className="section hi"
      style={{ background: 'url("images/hi-bg.jpg") center/cover' }}
    >
      <div className="container">
        <div className="inner">
          <motion.h1
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 1 },
            }}
            initial={{ y: 100, opacity: 0 }}
          >
            Hi, i`m <span className="decoration">Vincent</span> Van.
            <br /> I`m the founder <span>TanukiСomp</span>
          </motion.h1>

          <motion.p
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 1.3 },
            }}
            initial={{ y: 100, opacity: 0 }}
          >
            {" "}
            We do everything related to IT.
          </motion.p>

          <motion.div
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 1.6 },
            }}
            initial={{ y: 100, opacity: 0 }}
          >
            <Link
              to="aboutUs"
              spy={true}
              smooth={true}
              duration={500}
              className="link"
            >
              Lean more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
