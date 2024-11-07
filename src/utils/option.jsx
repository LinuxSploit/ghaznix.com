import React, { useRef, useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

export default function Option({ label, items }) {
    const menuRef = useRef(null);
    const [isUpward, setIsUpward] = useState(false);

    // Adjust dropdown direction based on available space
    useEffect(() => {
        if (menuRef.current) {
            const menuRect = menuRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - menuRect.bottom;
            const spaceAbove = menuRect.top;

            setIsUpward(spaceBelow < 150 && spaceAbove > spaceBelow);
        }
    }, []);

    return (
        <div
            className="absolute h-full w-full flex justify-end items-center"
            ref={menuRef}
        >
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 py-1 text-sm font-semibold text-gray-900">
                        {label}
                        <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                    </MenuButton>
                </div>

                <Menu.Items
                    className={`absolute z-50 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none 
                        ${isUpward ? 'bottom-full mb-2 origin-bottom-right' : 'top-full mt-2 origin-top-right'}`}
                >
                    <div className="py-1">
                        {items.map((item, index) => (
                            <MenuItem key={index} onClick={item.action}>
                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    {item.label}
                                </div>
                            </MenuItem>
                        ))}
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );
}
