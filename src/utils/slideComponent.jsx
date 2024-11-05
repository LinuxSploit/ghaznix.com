import React, { useEffect, useRef, useState } from 'react';
import { createSwapy } from 'swapy';
import Option from '../utils/option';

function SlideItem({ slide, index, isSelected, onClick }) {
  return (
    <div
      className={`h-14 ${isSelected ? 'bg-gray-50' : ''} hover:bg-gray-50 relative flex justify-between items-center select-none`}
      data-swapy-item={index}
      onClick={onClick}
    >
      <div className="flex items-center">
        <img src={slide._icon} className="px-2 h-9" alt="" />
        <div className="font-medium text-sm text-gray-500">{slide.label}</div>
        <div className="text-xs text-gray-400">{slide.heading}</div>
      </div>
      <Option
        label=""
        items={[
          { label: "item1", link: "link1" },
          { label: "item2", link: "link2" },
          { label: "item3", link: "link3" },
        ]}
      />
    </div>
  );
}

const SlidesComponent = ({ Slides }) => {
  const initialSlots = Slides.reduce((acc, _, idx) => {
    acc[idx] = idx;
    return acc;
  }, {});

  const [selectedSlide, setSelectedSlide] = useState(null);
  const [slotItems, setSlotItems] = useState(
    localStorage.getItem('slotItems')
      ? JSON.parse(localStorage.getItem('slotItems'))
      : initialSlots
  );

  const containerRef = useRef(null); // Use ref for Swapy container

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous Swapy instance
    const existingSwapy = containerRef.current.swapyInstance;
    if (existingSwapy) {
      existingSwapy.destroy();
    }

    const swapy = createSwapy(containerRef.current, {
      swapMode: 'hover',
    });

    swapy.onSwap(({ data }) => {
      setSlotItems(data.object);
      localStorage.setItem('slotItems', JSON.stringify(data.object));
    });

    containerRef.current.swapyInstance = swapy;

    // Clean up Swapy instance on unmount
    return () => {
      swapy.destroy();
    };
  }, [slotItems]); // Trigger Swapy reinitialization when slotItems changes

  return (
    <div ref={containerRef} className="container">
      {Object.keys(slotItems).map((slot) => (
        <div className="slot" data-swapy-slot={slot} key={slot}>
          <SlideItem
            slide={Slides[slotItems[slot]]}
            index={slotItems[slot]}
            isSelected={selectedSlide === slotItems[slot]}
            onClick={() => setSelectedSlide(slotItems[slot])}
          />
        </div>
      ))}
    </div>
  );
};

export default SlidesComponent;
