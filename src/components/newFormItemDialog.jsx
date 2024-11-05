import React, { useState } from 'react';

function NewFormItemDialog({addItem, isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-white h-5/6 w-10/12 overflow-y-auto dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <button className='absolute top-0 right-0 mt-1 me-2' onClick={onClose}>X</button>

                <button onClick={()=>{
                    addItem()
                }} className='bg-gray-800 text-gray-50 p-2 rounded-md'>Short Text</button>
            </div>
        </div>
    );
}

export default NewFormItemDialog;
