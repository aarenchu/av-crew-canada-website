import { Box } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  id: string;
  children: React.ReactNode;
  setVisibleSection: (newSection: string) => void;
}

const Section: React.FC<Props> = ({ id, children, setVisibleSection }) => {
  const { ref } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
    onChange: (inView, entry) => {
      if (inView) {
        // console.log(entry.target.id + ' is in view');
        setVisibleSection(entry.target.id);
      }
    },
  });

  return (
    <section id={id} ref={ref}>
      <Box
        paddingY={id === 'home' ? 0 : id === 'contact-us' ? 10 : 20}
        height={id !== 'home' ? 700 : '100%'}
      >
        {children}
      </Box>
    </section>
  );
};

export default Section;
