import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";

const MountTransition = ({ children, slide, slideUp }) => (
  <motion.div
    exit={{ opacity: 0, x: slide, y: slideUp }}
    initial={{ opacity: 0, x: slide, y: slideUp }}
    animate={{ opacity: 1, x: 0, y: 0 }}
  >
    {children}
  </motion.div>
);

MountTransition.defaultProps = {
  children: [],
  slide: 0,
  slideUp: 0,
};

MountTransition.propTypes = {
  children: PropTypes.node,
  slide: PropTypes.number,
  slideUp: PropTypes.number,
};

export default MountTransition;
