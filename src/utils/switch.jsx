import React, { useState } from 'react';

function ToggleSwitch({ label, onChange }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onChange) onChange(!isChecked);  // Call onChange if provided
    };

    return (
        <div className="flex items-center">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                    type="checkbox"
                    id={label}
                    checked={isChecked}
                    onChange={handleToggle}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition duration-200 ease-in-out"
                    style={{ right: isChecked ? '0' : 'auto', borderColor: isChecked ? '#68D391' : '' }}
                />
                <label
                    htmlFor={label}
                    className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition duration-200 ease-in-out ${
                        isChecked ? 'bg-green-400' : 'bg-gray-300'
                    }`}
                ></label>
            </div>
        </div>
    );
}

export default ToggleSwitch;
