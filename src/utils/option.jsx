import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

export default function OptionsDropdown({ onEdit, onDuplicate, onArchive, onDelete }) {
  return (
    <div className="relative text-right">
      <Menu>
        {/* Menu Button */}
        <MenuButton className="inline-flex items-center gap-2 rounded-md px-1.5 text-sm font-semibold text-gray-800 border-gray-200 focus:outline-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-600" />
        </MenuButton>

        {/* Menu Items */}
        <MenuItems
          className="z-50 absolute right-0 mt-2 origin-top-right w-36 rounded-lg bg-white border border-gray-200 p-1 shadow-lg text-gray-800 focus:outline-none transition duration-150 ease-out"
        >
          {/* Edit Item */}
          <MenuItem>
            {({ active }) => (
              <button
                onClick={onEdit}
                className={`group flex w-full items-center gap-2 rounded-md py-1.5 px-3 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                <PencilIcon className="h-5 w-5 text-gray-800" />
                Edit
                <kbd className="ml-auto hidden font-sans text-xs text-gray-400 group-hover:inline">⌘E</kbd>
              </button>
            )}
          </MenuItem>

          {/* Duplicate Item */}
          <MenuItem>
            {({ active }) => (
              <button
                onClick={onDuplicate}
                className={`group flex w-full items-center gap-2 rounded-md py-1.5 px-3 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                <Square2StackIcon className="h-5 w-5 text-gray-800" />
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-gray-400 group-hover:inline">⌘D</kbd>
              </button>
            )}
          </MenuItem>

          {/* Divider */}
          <div className="my-1 h-px bg-gray-200" />

          {/* Delete Item */}
          <MenuItem>
            {({ active }) => (
              <button
                onClick={onDelete}
                className={`group flex w-full items-center gap-2 rounded-md py-1.5 px-3 ${
                  active ? 'bg-red-100' : ''
                }`}
              >
                <TrashIcon className="h-5 w-5 text-red-500" />
                Delete
                <kbd className="ml-auto hidden font-sans text-xs text-red-400 group-hover:inline">⌘D</kbd>
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
