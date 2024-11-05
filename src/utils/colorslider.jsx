import React, { useRef, useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';

const ColorSlider = () => {
    const scrollRef = useRef(null);
    const pickerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });
    const [selectedColor, setSelectedColor] = useState('#FF5733');
    const colors = ["#FF5733", "#33FF57", "#3357FF"];

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    const onMouseLeave = () => setIsDragging(false);
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    const handleCustomColorClick = (event) => {
        setIsPickerVisible(true);
        const rect = event.target.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const pickerWidth = 250;
        const left = Math.min(rect.left + window.scrollX, viewportWidth - pickerWidth);
        const top = rect.bottom + window.scrollY + 8;
        setPickerPosition({ top, left });
    };

    const handleColorCircleClick = (color) => {
        setSelectedColor(color);
    };

    const closePicker = () => setIsPickerVisible(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                closePicker();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div>
            <div
                ref={scrollRef}
                className="select-none overflow-x-auto h-10 flex items-center justify-center space-x-1.5 border-gray-200 whitespace-nowrap"
                style={{ scrollbarWidth: 'none' }}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {/* Custom Color Picker Trigger */}
                <div
                    onClick={handleCustomColorClick}
                    className="w-8 h-8 border rounded-full cursor-pointer flex justify-center items-center"
                    style={{ backgroundColor: selectedColor }}
                >
                    <svg className='w-8 h-8 p-1.5 flex' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="2" transform="rotate(180 12 12)" stroke="#ffffff" stroke-width="1.5"></circle> <circle cx="20" cy="14" r="2" transform="rotate(180 20 14)" stroke="#ffffff" stroke-width="1.5"></circle> <circle cx="2" cy="2" r="2" transform="matrix(-1 8.74228e-08 8.74228e-08 1 6 8)" stroke="#ffffff" stroke-width="1.5"></circle> <path d="M12 8L12 5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 10L20 5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 14L4 19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 19L12 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 19L20 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 5L4 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                </div>

                {/* Preset Colors */}
                {colors.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => handleColorCircleClick(color)}
                        className="w-8 h-8 border rounded-full cursor-pointer"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            {/* React Color Picker */}
            {isPickerVisible && (
                <div
                    ref={pickerRef}
                    style={{
                        position: 'absolute',
                        top: pickerPosition.top,
                        left: pickerPosition.left,
                        zIndex: 10,
                    }}
                >
                    <SketchPicker color={selectedColor} onChangeComplete={(color) => setSelectedColor(color.hex)} />
                </div>
            )}
        </div>
    );
};

export default ColorSlider;
