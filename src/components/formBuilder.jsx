import React, { useEffect, useRef, useState } from 'react';
import { createSwapy } from 'swapy' // Ensure Swapy is installed

import NewFormItemDialog from './newFormItemDialog';
import DropDown from '../utils/dropbox';
import Option from '../utils/option';
import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import AdvanceDropdown from '../utils/advanceDropdown';
import ToggleSwitch from '../utils/switch';
import Slidesbar from '../utils/slidesbar';
import ColorSlider from '../utils/colorslider';
import AddSlideModal from '../utils/addmodal';
import SlidesComponent from '../utils/slideComponent';

const FormBuilder = () => {
    const [SelectedSlide,setSelectedSlide] = useState(null) // -1 = intro , -2 = outro , else slide index
    const [StartSlide, SetStartSlide] = useState(null)
    const [Slides, SetSlides] = useState([])
    const [EndSlide, SetEndSlide] = useState(null)

    const [isContainerVisible, setContainerVisible] = useState(false);
    const containerRef = useRef(null);

    const openAddContainer = () => {
        setContainerVisible(true);
    };

    const closeAddContainer = (e) => {
        // Check if the click is outside the containerRef element
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setContainerVisible(false);
        }
    };


    return (
        <div className='h-screen text-sm' onClick={closeAddContainer}>
            {/* topbar */}
            <div className='h-14 flex border-b border-gray-200'>
                <div className='flex flex-1 items-center'>
                    <img className='h-12' src="https://placehold.co/120x50/white/black?text=Ghaznix" />
                </div>
                <div className='flex flex-1 justify-center items-center font-medium'>
                    <span className='text-gray-400'>My Form</span>
                    <span className='text-gray-400 px-2'>/</span>
                    <span className='text-gray-800'>Engament Form</span>
                    <DropDown label={""} items={
                        [
                            { label: "item1", link: "link1" },
                            { label: "item2", link: "link2" },
                            { label: "item3", link: "link3" },
                        ]
                    } />
                </div>
                <div className='flex flex-1 items-center justify-end pe-2 gap-1'>
                    {/* active users */}
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                        <img className="cursor-pointer w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://placehold.co/50x50/red/white" alt="" />
                        <img className="cursor-pointer w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://placehold.co/50x50/orange/white" alt="" />
                        <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                    </div>

                    {/* Messages */}
                    <div className="cursor-pointer w-10 h-10 p-2.5 border border-gray-200 rounded-full dark:border-gray-800 hover:bg-gray-100">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)" stroke="#fc5a03" fill='#fc5a03' strokeWidth="1.5"></circle> <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                    </div>

                    {/* View */}
                    <div className="cursor-pointer w-10 h-10 p-2.5 border border-gray-200 rounded-full dark:border-gray-800 hover:bg-gray-100">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z" stroke="#1F2937" strokeWidth="1.5"></path> </g></svg>
                    </div>

                    {/* publish */}
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold rounded-full text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Publish</button>


                </div>
            </div>

            <div className='flex text-xs' style={{ height: 'calc(100vh - 3.5rem)' }}>
                {/* primary sidebar */}
                <div className='w-14  border-e'>

                </div>

                {/* secondary sidebar */}
                <div className='w-48 border-e'>
                    {/* add slide */}
                    <div onClick={openAddContainer} className={`AddContainer ${isContainerVisible && "bg-gray-50"} hover:bg-gray-50 cursor-pointer select-none h-14 border-b border-gray-200 flex justify-start items-center`}>
                        {/* add imagge */}
                        <svg className='px-2 h-9' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" fill="#1F2937" strokeWidth="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        <div onClick={(e) => {
                            console.log(Slides)
                        }} className='font-medium text-gray-500'>
                            Add New Slide
                        </div>

                    </div>

                    {/* AddSlideModal component */}
                    {isContainerVisible && (
                        <div ref={containerRef}>
                            <AddSlideModal SetStartSlide={SetStartSlide} SetSlides={SetSlides} SetEndSlide={SetEndSlide} setContainerVisible={setContainerVisible} />
                        </div>
                    )}

                    {/* inputs container */}
                    <div className='' style={{ height: 'calc(100% - 3.5rem - 3.5rem)' }}>

                        {/* Search Inputs */}
                        <div className='border-b border-gray-200 px-2 py-0 flex justify-between items-center'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" stroke='#616161' strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>


                            <input type="search" className="w-full ps-2 py-1 text-base text-gray-800 rounded-full focus:outline-none"
                                placeholder="search" x-model="search" />
                        </div>

                    
                        {/* starting item */}
                        {StartSlide && <div onClick={(e)=>setSelectedSlide(-1)} className={`h-14 ${SelectedSlide==-1 && "bg-gray-50"} hover:bg-gray-50 relative border-gray-200 flex justify-between items-center select-none`}>
                            {/* add imagge */}
                            <div className='flex items-center'>
                                <svg className='px-2 h-9' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#fb6f92" fill='#fb6f92' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.33 17.45C12.15 17.51 11.84 17.51 11.66 17.45C10.1 16.92 6.59998 14.69 6.59998 10.91C6.59998 9.24 7.93998 7.89001 9.59998 7.89001C10.58 7.89001 11.45 8.36001 12 9.10001C12.54 8.37001 13.42 7.89001 14.4 7.89001C16.06 7.89001 17.4 9.24 17.4 10.91C17.4 14.69 13.9 16.92 12.33 17.45Z" fill='#ffffffaa' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <div className='font-medium text-sm text-gray-500'>
                                    {StartSlide.label}
                                </div>
                            </div>
                            <Option label={""} items={[
                                { label: "item1", link: "link1" },
                                { label: "item2", link: "link2" },
                                { label: "item3", link: "link3" },
                            ]} />
                        </div>
                        }



                        {Slides.map((slide, index) => {
                            return <div key={index}  onClick={(e)=>setSelectedSlide(index)} className={`h-14 ${SelectedSlide == index && "bg-gray-50"} hover:bg-gray-50 relative flex justify-between items-center select-none`}>
                                <div className='flex items-center'>
                                    <img src={slide._icon} className='px-2 h-9' />
                                    <div>
                                        <div className='font-medium text-sm text-gray-500'>{slide.label}</div>
                                        <div className='text-xs text-gray-400'>{slide.heading}</div>
                                    </div>
                                </div>
                                <Option label={""} items={[
                                    { label: "item1", link: "link1" },
                                    { label: "item2", link: "link2" },
                                    { label: "item3", link: "link3" },
                                ]} />
                            </div>
                        })}

                        {/* {Slides.length != 0 && <SlidesComponent Slides={Slides} />} */}



                    </div>

                    {/* closing item */}
                    {EndSlide && <div onClick={(e)=>setSelectedSlide(-2)} className={`h-14 ${SelectedSlide == -2 && "bg-gray-50"} hover:bg-gray-50 border-t border-gray-200 relative flex justify-between items-center select-none`}>
                        {/* add imagge */}
                        <div className='flex items-center'>
                            <svg className='px-2 h-9' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#fb6f92" fill='#fb6f92' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.33 17.45C12.15 17.51 11.84 17.51 11.66 17.45C10.1 16.92 6.59998 14.69 6.59998 10.91C6.59998 9.24 7.93998 7.89001 9.59998 7.89001C10.58 7.89001 11.45 8.36001 12 9.10001C12.54 8.37001 13.42 7.89001 14.4 7.89001C16.06 7.89001 17.4 9.24 17.4 10.91C17.4 14.69 13.9 16.92 12.33 17.45Z" fill='#ffffffaa' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <div className='font-medium text-sm text-gray-500'>
                                {EndSlide.label}
                            </div>
                        </div>
                        <Option label={""} items={[
                            { label: "item1", link: "link1" },
                            { label: "item2", link: "link2" },
                            { label: "item3", link: "link3" },
                        ]} />
                    </div>
                    }

                </div>

                {/* main window */}
                <div className='' style={{ width: 'calc(100% - 12rem - 12rem - 3.5rem)' }}>

                    {/* Main content */}
                    <div className='bg-gray-200 p-10 flex justify-center items-center' style={{ height: 'calc(100%)' }}>
                        <div className='bg-white min-h-96 min-w-96 ' style={{ maxWidth: '800px' }}>
                            {/* add form items here below */}
                        </div>
                    </div>


                </div>

                {/* Options Sidebar */}
                <div className='w-48 border-s'>

                    {/* selecte input */}
                    <div className='border-b border-gray-200 p-2'>
                        <div className='text-gray-400 font-bold pb-2 px-1'>PAGE</div>
                        <AdvanceDropdown label="Contact" options={["Phone", "Email", "Chat"]} />
                    </div>

                    {/* input option */}
                    <div className='border-b border-gray-200 p-3 gap-2'>
                        <div className='text-gray-400 font-bold pb-3'>SETTING</div>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <div className='font-medium text-sm'>Required</div>
                                <ToggleSwitch label={"isrequired-238"} onChange={() => { console.log("switched!") }} />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='font-medium text-sm'>Max Character</div>
                                <ToggleSwitch label={"maxchar-435"} onChange={() => { console.log("switched!") }} />
                            </div>
                        </div>
                    </div>

                    {/* input option */}
                    <div className='border-b border-gray-200 p-3 gap-2'>
                        <div className='text-gray-400 font-bold pb-3'>CTA COLOR</div>
                        <div className='space-y-3'>
                            <ColorSlider />
                        </div>
                    </div>

                    {/* input option */}
                    <div className='border-b border-gray-200 p-3 gap-2'>
                        <div className='text-gray-400 font-bold pb-3'>STRUCTURE</div>
                        <div className='grid grid-cols-2 gap-1.5'>
                            <div className='rounded h-14 bg-gray-200 flex justify-center items-center'>1</div>
                            <div className='rounded h-14 bg-gray-200 flex justify-center items-center'>2</div>
                            <div className='rounded h-14 bg-gray-200 flex justify-center items-center'>3</div>
                            <div className='rounded h-14 bg-gray-200 flex justify-center items-center'>4</div>
                            <div className='rounded h-14 bg-gray-200 flex justify-center items-center'>5</div>
                            <div className='rounded h-14 bg-gray-200 flex justify-center items-center'>6</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FormBuilder;
