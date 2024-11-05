import React, { useRef, useState, useEffect } from 'react';
import handSVG from './../assets/svg/hand.svg';
import allSVG from './../assets/svg/all.svg';
import PhoneSVG from './../assets/svg/phone.svg';
import FavSVG from './../assets/svg/fav.svg';
import AaSVG from './../assets/svg/Aa.svg';

const Slidesbar = ({
    CurrentCategory, // could be either of ["","INTRO","OUTRO","CONTACT","FAV","TEXT"]
    setCurrentCategory
}) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Define categories as an array
    const categories = [
        { name: "", icon: allSVG },
        { name: "INTRO-OUTRO", icon: handSVG },
        { name: "CONTACT", icon: PhoneSVG },
        { name: "FAV", icon: FavSVG },
        { name: "TEXT", icon: AaSVG },
    ];

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll speed here
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleSlideClick = (categoryName) => {
        setCurrentCategory(categoryName); // Update the current category on click
    };

    return (
        <div
            ref={scrollRef}
            style={{ scrollbarWidth: 'none' }}
            className="select-none overflow-x-auto flex items-center border-gray-200 whitespace-nowrap py-1.5"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            {/* Map through categories */}
            <div className='space-x-1.5'>
                {categories.map((item) => (
                    <div
                        key={item.name}
                        onClick={() => handleSlideClick(item.name)} // Use category name to set CurrentCategory
                        className={`inline-flex justify-center items-center cursor-pointer text-base w-8 h-8 rounded-full ${
                            CurrentCategory === item.name
                                ? 'border border-gray-500 bg-blue-100 text-gray-600' // Active styles for the selected category
                                : 'border border-gray-300 text-gray-400 hover:bg-gray-100'
                        }`}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            style={{
                                filter: CurrentCategory === item.name ? '' : 'brightness(0) saturate(100%) invert(100%) sepia(75%) saturate(397%) hue-rotate(63deg) brightness(76%) contrast(75%)',
                            }}
                            className='p-1.5 rounded-full'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slidesbar;
