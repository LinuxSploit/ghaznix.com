import React, { useState, useMemo } from 'react';
import ThanksSVG from './../assets/inputs/thanks.svg'
import WelcomeSVG from './../assets/inputs/welcome.svg'
import EmailSVG from './../assets/inputs/email.svg'
import PhoneSVG from './../assets/inputs/phone.svg'
import TextSVG from './../assets/inputs/text.svg'
import URLSVG from './../assets/inputs/url.svg'

import Slidesbar from './slidesbar';

const SearchInput = ({ search, setSearch }) => (
    <div className='border rounded-md border-gray-200 px-2 py-1 flex justify-between items-center'>
        <svg className='h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="11.5" cy="11.5" r="9.5" stroke="#9cafa3" strokeWidth="1.5"></circle>
            <path d="M18.5 18.5L22 22" stroke="#9cafa3" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
        <input
            type="search"
            className="w-full ps-2 py-1 text-sm text-gray-400 rounded-full focus:outline-none"
            placeholder="Search for a field"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search fields and contacts"
        />
    </div>
);

const InputItem = ({ label,icon,onClick }) => (
    <div className='flex hover:bg-gray-100 p-1.5 rounded-lg select-none' onClick={onClick}>
        <img className='h-9 pe-2' src={icon} />
        {/* <svg className='h-9 pe-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#fb6f92" fill='#fb6f92' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12.33 17.45C12.15 17.51 11.84 17.51 11.66 17.45C10.1 16.92 6.59998 14.69 6.59998 10.91C6.59998 9.24 7.93998 7.89001 9.59998 7.89001C10.58 7.89001 11.45 8.36001 12 9.10001C12.54 8.37001 13.42 7.89001 14.4 7.89001C16.06 7.89001 17.4 9.24 17.4 10.91C17.4 14.69 13.9 16.92 12.33 17.45Z" fill='#ffffffaa' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg> */}
        <div className='font-medium text-sm flex items-center text-gray-500'>
            {label}
        </div>
    </div>
);

const AddSlideModal = ({SetStartSlide,SetSlides,SetEndSlide,setContainerVisible}) => {
    const [search, setSearch] = useState('');
    const [CurrentCategory, setCurrentCategory] = useState("");

    const Inputs = {
        Fields: [
            {
                label: "Welcome Page",
                _type: "WELCOME",
                _icon: WelcomeSVG,
                _category: "INTRO",
                heading:"Say hi!",
                proceedBtnText: "Next"
            },
            {
                label: "Text",
                _type: "TEXT",
                _icon: TextSVG,
                _category: "TEXT",
                heading:"Type Text Here!",
                proceedBtnText: "Next"
            },
            {
                label: "Thanks Page",
                _type: "THANKS",
                _icon: ThanksSVG,
                _category: "OUTRO",
                heading:"Say bye!",
                proceedBtnText: "Next"
            },
        ],
        Contacts: [
            {
                label: "Email",
                _type: "EMAIL",
                _icon:EmailSVG,
                _category: "CONTACT",
                heading:"Your Email Address",
                proceedBtnText: "Next"
            },
            {
                label: "Phone Number",
                _type: "PHONE",
                _icon: PhoneSVG,
                _category: "CONTACT",
                heading:"Your Phone Number",
                proceedBtnText: "Next"
            },
            {
                label: "Website",
                _type: "URL",
                _icon: URLSVG,
                _category: "CONTACT",
                heading:"Your Website",
                proceedBtnText: "Next"
            },
        ]
    };

    // Use useMemo for optimizing the filtering of fields and contacts
    const filteredFields = useMemo(() => {
        return Inputs.Fields.filter(input =>
            input.label.toLowerCase().includes(search.toLowerCase()) &&
            (CurrentCategory === "" || input._category === CurrentCategory || CurrentCategory.startsWith(input._category) || CurrentCategory.endsWith(input._category))
        );
    }, [search, CurrentCategory, Inputs.Fields]);

    const filteredContacts = useMemo(() => {
        return Inputs.Contacts.filter(input =>
            input.label.toLowerCase().includes(search.toLowerCase()) &&
            (CurrentCategory === "" || input._category === CurrentCategory)
        );
    }, [search, CurrentCategory, Inputs.Contacts]);

    const isNoResults = filteredFields.length === 0 && filteredContacts.length === 0;

    return (
        <div className="z-30 bg-white border p-1.5 rounded-lg absolute top-20 left-64 w-56 shadow-lg">
            <SearchInput search={search} setSearch={setSearch} />
            <Slidesbar setCurrentCategory={setCurrentCategory} CurrentCategory={CurrentCategory} />

            <div className='addmodal-all-inputs h-64 overflow-y-auto pe-1.5'>
                {filteredFields.length > 0 && <div className='text-gray-400 pb-1.5'>Fields</div>}
                {filteredFields.map((input, index) => (
                    <InputItem key={index} onClick={(e)=>{
                        if (input._category=="INTRO") {
                            SetStartSlide(
                                {
                                    label: filteredFields[index].label,
                                    _type: filteredFields[index]._type,
                                    _icon: filteredFields[index]._icon,
                                    _category: filteredFields[index]._category
                                })
                            setContainerVisible(false)   
                            return 
                        }
                        if (input._category=="OUTRO") {
                            SetEndSlide(
                                {
                                    label: filteredFields[index].label,
                                    _type: filteredFields[index]._type,
                                    _icon: filteredFields[index]._icon,
                                    _category: filteredFields[index]._category
                                })
                            setContainerVisible(false)   
                            return 
                        }
                        SetSlides((prev)=>([...prev,
                            {
                                label: filteredFields[index].label,
                                _type: filteredFields[index]._type,
                                _icon: filteredFields[index]._icon,
                                _category: filteredFields[index]._category,
                                heading:filteredFields[index].heading
                            }]))
                        setContainerVisible(false)
                    }} label={input.label} icon={input?._icon} />
                ))}

                {filteredContacts.length > 0 && <div className='text-gray-400 py-1.5'>Contact Ways</div>}
                {filteredContacts.map((input, index) => (
                    <InputItem key={index} onClick={(e)=>{
                        SetSlides((prev)=>([...prev,
                            {
                                label: filteredContacts[index].label,
                                _type: filteredContacts[index]._type,
                                _icon: filteredContacts[index]._icon,
                                _category: filteredContacts[index]._category,
                                heading:filteredContacts[index].heading
                            }]))
                        setContainerVisible(false)
                    }} label={input.label} icon={input?._icon} />
                ))}

                {isNoResults && (
                    <div className="text-gray-400 text-sm text-center">No matching found</div>
                )}
            </div>
        </div>
    );
};

export default AddSlideModal;
