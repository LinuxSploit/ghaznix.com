import React, { useState, useRef, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DropDown({ label, items }) {
    const [isUpward, setIsUpward] = useState(false);
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

    return (
        <Menu as="div" className="relative inline-block text-left" ref={menuRef}>
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-1 text-sm font-semibold text-gray-900">
                    {label}
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className={`absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none ${
                    isUpward ? 'bottom-full mb-2 origin-bottom-right' : 'top-full mt-2 origin-top-right'
                }`}
            >
                <div className="py-1">
                    {items.map((item, index) => (
                        <MenuItem key={index}>
                            <a
                                href={item.link}
                                onClick={(e) => { console.log(item); }}
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                {item.label}
                            </a>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    );
}
