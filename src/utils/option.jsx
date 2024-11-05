import React, { useState, useRef, useEffect } from 'react';
import { Menu, MenuButton, MenuItem } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

export default function Option({ label, items }) {
    const [isUpward, setIsUpward] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const menuRef = useRef(null);

    useEffect(() => {
        if (menuRef.current) {
            const menuRect = menuRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - menuRect.bottom;
            const spaceAbove = menuRect.top;

            // Set to open upwards if space below is insufficient and space above is more
            setIsUpward(spaceBelow < 150 && spaceAbove > spaceBelow);
        }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='absolute h-full w-full flex justify-end items-center' ref={menuRef} onClick={(e)=>{
            if (isVisible) setIsVisible(false)
        }} onContextMenu={(e) => {
            e.preventDefault();
            setIsVisible(!isVisible);
        }}>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton onClick={() => setIsVisible(!isVisible)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 py-1 text-sm font-semibold text-gray-900">
                        {label}
                        <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                    </MenuButton>
                </div>

                {isVisible && (
                    <div
                        className={`absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none 
                            ${isUpward ? 'bottom-full mb-2 origin-bottom-right' : 'top-full mt-2 origin-top-right'}`}
                    >
                        <div className="py-1">
                            {items.map((item, index) => (
                                <MenuItem key={index}>
                                    <a
                                        href={item.link}
                                        onClick={(e) => { console.log(item); }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {item.label}
                                    </a>
                                </MenuItem>
                            ))}
                        </div>
                    </div>
                )}
            </Menu>
        </div>
    );
}
