import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function AdvanceDropdown({ label, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isUpward, setIsUpward] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - dropdownRect.bottom;
            const spaceAbove = dropdownRect.top;

            setIsUpward(spaceBelow < 150 && spaceAbove > spaceBelow);
        }
    }, [isOpen]);

    return (
        <div className="relative select-none" ref={dropdownRef}>
            {/* Dropdown Button */}
            <div
                className="border flex justify-between items-center bg-gray-100 p-2 rounded-lg cursor-pointer"
                onClick={toggleDropdown}
            >
                <div className="flex items-center">
                    <svg className="h-9 w-9 bg-white rounded-full" fill="#acd8aa" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.8827 33.8360 C 16.0702 28.0469 12.3671 20.6640 16.7499 16.2813 C 17.0077 16.0234 17.2890 15.7656 17.5468 15.5078 C 18.8827 14.2422 20.1718 14.3125 21.3202 15.9297 L 24.3671 20.2656 C 25.3983 21.7656 25.1405 22.6094 24.0390 23.7813 L 23.0780 24.8360 C 22.7265 25.1640 22.8671 25.6094 23.0312 25.8906 C 23.4765 26.7344 24.7421 28.2344 26.1014 29.5938 C 27.5077 31.0000 28.9374 32.1953 29.8280 32.6875 C 30.1562 32.875 30.6249 32.9219 30.9296 32.6406 L 31.9374 31.6797 C 33.0624 30.5781 33.9765 30.2969 35.4296 31.3281 C 37.4452 32.7578 38.6640 33.6016 39.8593 34.4219 C 41.3358 35.5000 41.6874 36.8360 40.1874 38.1953 C 39.9296 38.4531 39.6952 38.7344 39.4374 38.9922 C 35.0546 43.3516 27.6952 39.6484 21.8827 33.8360 Z"></path>
                    </svg>
                    <div className="ps-2 text-gray-800 font-medium">{label}</div>
                </div>
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </div>

            {/* Dropdown Options */}
            {isOpen && (
                <div
                    className={`absolute z-30 shadow w-44 border-2 rounded-lg bg-white flex flex-col pt-1 mt-1 ${
                        isUpward ? 'bottom-full mb-1' : 'top-full mt-1'
                    }`}
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-2 m-1 mt-0 rounded-lg cursor-pointer"
                        >
                            <div className="flex items-center">
                                <svg className="h-9 w-9 bg-white rounded-full" fill="#acd8aa" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.8827 33.8360 C 16.0702 28.0469 12.3671 20.6640 16.7499 16.2813 C 17.0077 16.0234 17.2890 15.7656 17.5468 15.5078 C 18.8827 14.2422 20.1718 14.3125 21.3202 15.9297 L 24.3671 20.2656 C 25.3983 21.7656 25.1405 22.6094 24.0390 23.7813 L 23.0780 24.8360 C 22.7265 25.1640 22.8671 25.6094 23.0312 25.8906 C 23.4765 26.7344 24.7421 28.2344 26.1014 29.5938 C 27.5077 31.0000 28.9374 32.1953 29.8280 32.6875 C 30.1562 32.875 30.6249 32.9219 30.9296 32.6406 L 31.9374 31.6797 C 33.0624 30.5781 33.9765 30.2969 35.4296 31.3281 C 37.4452 32.7578 38.6640 33.6016 39.8593 34.4219 C 41.3358 35.5000 41.6874 36.8360 40.1874 38.1953 C 39.9296 38.4531 39.6952 38.7344 39.4374 38.9922 C 35.0546 43.3516 27.6952 39.6484 21.8827 33.8360 Z"></path>
                                </svg>
                                <div className="ps-2 text-gray-800 font-semibold">{option}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdvanceDropdown;
