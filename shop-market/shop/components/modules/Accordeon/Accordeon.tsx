import { IAccordeonProps } from '@/types/modules';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Accordeon = ({
  children,
  title,
  titleClass,
  rotateIconClass,
}: IAccordeonProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.button
        initial={false}
        onClick={() => setExpanded(!expanded)}
        className={`bttn-reset ${titleClass}
    ${rotateIconClass ? (expanded ? rotateIconClass : '') : ''}`}
      >
        {title}
      </motion.button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: 0.8, easy: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordeon;
