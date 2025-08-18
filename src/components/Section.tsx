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
        setVisibleSection(entry.target.id);
      }
    },
  });

  const paddingY = (name: string) => {
    switch (name) {
      case 'home':
        return 0;
      case 'contact-us':
        return 25;
      default:
        return 25;
    }
  };

  return (
    <section id={id} ref={ref}>
      <Box paddingY={paddingY(id)}>{children}</Box>
    </section>
  );
};

export default Section;
