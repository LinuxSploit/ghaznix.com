import React, { useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Option from '../utils/option'; // Import your custom Option component
import AddSlideModal from '../utils/addmodal'; // Assuming you have an AddSlideModal component

const ItemTypes = {
  SLIDE: 'slide',
};

const Slide = ({ setSlides,slide, index, moveSlide, setSelectedSlide, SelectedSlide }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.SLIDE,
    hover(item) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveSlide(dragIndex, hoverIndex);
      item.index = hoverIndex;
      setSelectedSlide(item.index)
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.SLIDE,
    item: { type: ItemTypes.SLIDE, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      onDragStartCapture={(e) => {
        setSelectedSlide(index)
      }}
      onClick={() => setSelectedSlide(index)}
      className={`transition-opacity duration-1000 h-14 ${SelectedSlide === index ? "bg-sky-100" : ""} ${SelectedSlide !== index && "hover:bg-gray-50"} relative flex justify-between items-center select-none`}
      style={{ opacity: isDragging ? .5 : 1 }}
    >
      <div className='flex items-center'>
        <img src={slide._icon} className='px-2 h-9' alt="Slide Icon" />
        <div>
          <div className='font-medium text-sm text-gray-500'>{slide.label}</div>
          <div className='text-xs text-gray-400'>{slide.heading}</div>
        </div>
      </div>
      <Option label={""} items={[
        {
          label: "Delete", 
          action: function () {
              console.log(1)
              setSlides((prevSlides) => prevSlides.filter((_, i) => i !== index));
              if (SelectedSlide === index) {
                setSelectedSlide(null);
              }
          }
        },
      ]} />
    </div>
  );
};

export default Slide