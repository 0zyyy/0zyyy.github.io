import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <div>
      <Section nopadding id='timeline'>
        <SectionDivider/>
        <SectionTitle>Timeline</SectionTitle>
        <SectionText>
          Here is a timeline of my work.
        </SectionText>
        <CarouselContainer>
          {TimeLineData.map((item, index) => (
            <CarouselItem key={index}>
              <CarouselItemImg src={item.image} alt={item.title} />
              <CarouselItemText>
                <CarouselItemTitle>
                  {item.title}
                </CarouselItemTitle>
                <CarouselItemText>
                  {item.text}
                </CarouselItemText>
              </CarouselItemText>
            </CarouselItem>
          ))}
        </CarouselContainer>
        {/* <CarouselMobileScrollNode>
          <CarouselButtons>
            {TimeLineData.map((item, index) => (
              <CarouselButton key={index} onClick={(e) => handleClick(e, index)}>
                <CarouselButtonDot active={index === activeItem} />
              </CarouselButton>
            ))}
          </CarouselButtons>
        </CarouselMobileScrollNode> */}
      </Section>
    </div>
  );
};

export default Timeline;
