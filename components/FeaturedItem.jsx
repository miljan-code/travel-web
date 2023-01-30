'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@utils/motion';

const FeaturedItem = ({ img, index }) => {
  const [hoverImg, setHoverImg] = useState(false);

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 1.75)}
      onMouseEnter={() => setHoverImg(true)}
      onMouseLeave={() => setHoverImg(false)}
      className="relative w-[16.2rem] h-[4.8rem] flex items-center justify-center"
    >
      <img
        src={img}
        className={`${
          hoverImg ? 'md:mix-blend-normal' : 'md:mix-blend-luminosity'
        } transition-all object-center`}
      />
      <div
        className={`${
          hoverImg ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full h-full bg-white opacity-100 scale-[1.25] rounded-[10px] z-[-10] shadow-card`}
      ></div>
    </motion.div>
  );
};

export default FeaturedItem;
