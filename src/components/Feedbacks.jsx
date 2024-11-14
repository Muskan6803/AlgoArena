import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    
    <div className={`mt-0 mb-0 ml-0 bg-black-100 rounded-[200px]`}>
       
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Copyright:© 2024 AlgoArena. All rights reserved.</p>
          <h2 className={styles.sectionSubText}>
Design Considerations:
Clean Layout: Simple, intuitive, and user-friendly design.
Color Scheme: Use a modern color palette, such as dark background with bright accents (blue, orange, green) to make call-to-action buttons stand out.
Fonts: Use easy-to-read, modern fonts (e.g., Roboto, Open Sans) to keep the text clear and accessible.
This structure gives potential users an overview of the platform, encourages them to engage with the challenges, and establishes trust with testimonials and community features. The clear call-to-action buttons and user-centric flow help drive conversions.
</h2>
        </motion.div>
      </div>
      <div className={`-mt-2000 pb-1400 ${styles.paddingX} flex flex-wrap gap-0`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
