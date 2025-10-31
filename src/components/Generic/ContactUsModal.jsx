import React, { useState } from 'react';
import {
    Box, Modal, Typography, TextField, Button, Grid, MenuItem, RadioGroup,
    FormControlLabel, Radio, Slider,
    IconButton
} from '@mui/material';
import { styled } from '@mui/system';
import { Close } from '@mui/icons-material';
import { FaArrowsAlt } from 'react-icons/fa';


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const modalStyle = {
    bgcolor: '#121212',
    color: '#fff',
    p: 4,
    width: '90%',
    maxWidth: 1000,
    borderRadius: '12px',
    boxShadow: 24,
};

const marks = [
    { value: 2000, label: '2000' },
    { value: 20000, label: '20,000' },
    { value: 40000, label: '40,000' },
    { value: 60000, label: '60,000' },
    { value: 80000, label: '80,000' },
    { value: 100000, label: '100,000' },
];


export default function ContactUsModal({ open, onClose }) {
    const [budget, setBudget] = useState(2000);
    const [hasWebsite, setHasWebsite] = useState('yes');

    return (
        <StyledModal open={open} onClose={onClose} >
            <Box sx={{ ...modalStyle, position: 'relative', maxWidth: '1400px', zIndex: 1000, maxHeight: '90vh', overflowY: 'auto' }} className='lg:!p-16 p-8'>
                {/* Close Button */}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        color: '#fff',
                        zIndex: 10
                    }}
                >
                    <Close />
                </IconButton>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {/* Left Side - Form */}
                    <div className='lft-form'>
                        <img src="/images/logo.webp" alt="" className='w-28 h-10' />
                        <h2>
                            Lets Start a Winning{" "}
                            <span className="text-orange">
                                Projects Together
                            </span>
                        </h2>
                        <p >
                            Stacks connects to Bitcoin, enabiling you to build apps, smart
                            contracts, and digital assets that are integerated with Bitcoin`s
                            security, capital , and networks.
                        </p>
                        <div className="grid grid-cols-2 gap-5 mt-10 mb-7">
                            <label htmlFor="" className='col-span-2'>
                                <input type="text" name='name' placeholder='Name' />
                            </label>
                            <label htmlFor="">
                                <input type="text" name='email' placeholder='Email' />
                            </label>
                            <label htmlFor="">
                                <input type="text" name='phone_number' placeholder='Phone Number' />
                            </label>

                            <label htmlFor="">
                                <input type="text" name='company_name' placeholder='Company Name' />
                            </label>
                            <select name="service" id="">
                                <option value="" selected hidden>Select Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>
                        </div>
                        <p>Do You Currently Have a Website You'll Be Upgrading*</p>

                        <div className="flex gap-5 my-5">
                            <label htmlFor="" className='flex gap-2 items-center'>
                                <input type="radio" name='yes' placeholder='Budget' />
                                <span>Yes</span>
                            </label>
                            <label htmlFor="" className='flex gap-2 items-center'>
                                <input type="radio" name='no' placeholder='Budget' />
                                <span>No</span>
                            </label>
                        </div>

                        <p >Budget*</p>

                        <div className='mt-10'>
                            <Slider
                                aria-label="Budget"
                                value={budget}
                                onChange={(e, value) => setBudget(value)}
                                defaultValue={2000}
                                step={1000}
                                min={2000}
                                max={100000}
                                marks={marks}
                                valueLabelDisplay="on"
                                valueLabelFormat={(value) => value.toLocaleString()}
                                sx={{
                                    // width: '200%',
                                    color: '#FC5E14',
                                    mt: 2,
                                    height: 16,
                                    px: 1,
                                    border: '2px solid #FC5E14',
                                    borderRadius: '8px',
                                    bgcolor: 'transparent',
                                    py: 0,
                                    '& .MuiSlider-valueLabel': {
                                        top: '60px',
                                        backgroundColor: '#FC5E14',
                                        fontSize:12,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        borderRadius: '4px',
                                        transformOrigin: 'bottom center',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            width: 8,
                                            height: 8,
                                            backgroundColor: 'inherit',    
                                            transform: 'rotate(45deg)',
                                            top: '-4px',                  
                                            left: '50%',
                                            marginLeft: '-4px',
                                            borderRadius: '2px 0 0 0',
                                        },
                                        '& *': {
                                            transform: 'none',
                                        },
                                    },
                                    '& .MuiSlider-rail': {
                                        bgcolor: '#9C9C9C',
                                        opacity: 1,
                                        height: 12,
                                        borderRadius: 12,
                                        width: 'calc(100% - 10px)',
                                    },
                                    '& .MuiSlider-track': {
                                        bgcolor: '#FC5E14',
                                        height: 12,
                                        borderRadius: 6,
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 28,
                                        height: 28,
                                        bgcolor: '#fff',
                                        border: '4px solid #FC5E14',
                                        boxShadow: 2,
                                        mt: '0px',
                                    },
                                    '& .MuiSlider-mark': {
                                        display: 'none',
                                    },
                                    '& .MuiSlider-markLabel': {
                                        position: 'absolute',
                                        top: -46,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        minWidth: 30,
                                        textAlign: 'center',
                                        fontWeight: 600,
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: 2,
                                        bgcolor: '#232323',
                                        fontSize:12,
                                        color: '#9C9C9C',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                                        transition: 'all 0.2s',
                                        '&.MuiSlider-markLabelActive': {
                                            bgcolor: '#fff',
                                            color: '#FC5E14',
                                            fontSize:12,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                                        },
                                        '&:after': {
                                            content: '""',
                                            display: 'block',
                                            width: 0,
                                            height: 0,
                                            borderLeft: '8px solid transparent',
                                            borderRight: '8px solid transparent',
                                            borderTop: '10px solid',
                                            borderTopColor: 'inherit',
                                            position: 'absolute',
                                            left: '50%',
                                            top: '100%',
                                            transform: 'translateX(-50%)',
                                            bgcolor: 'transparent',
                                            zIndex: 1,
                                        },
                                        '&.MuiSlider-markLabelActive:after': {
                                            borderTopColor: '#fff',
                                        },
                                        '&:not(.MuiSlider-markLabelActive):after': {
                                            borderTopColor: '#232323',
                                        },
                            
                                    },
                                }}
                            />
                        </div>


                    </div>

                    {/* Right Side - Service Grid */}
                    <div className='right-frm'>
                        <div className='flex flex-col items-end text-right'>
                            <a href="tel:+13127965599" className='right-a !text-[13px] sm:!text-[30px]'>
                                +1 312 796 5599
                            </a>
                            <a href="mailto:contact@wizspeed.com" className='right-a uppercase !text-[13px] sm:!text-[30px]'>
                                contact@wizspeed.com
                            </a>
                            <p className="mt-3 lg:text-base text-[10px]">
                                5250 old archard rd, Suite #300, Skakie 11, 60077
                            </p>
                        </div>
                        <div className="img-cont  hidden sm:block">
                            <img src="/images/modal-image.webp" alt="" />
                        </div>
                    </div>
                </div>
                <button className="btn-orange flex mx-auto min-w-[200px] lg:mt-12 mt-7">
                    <span>
                        <FaArrowsAlt />
                    </span>
                    <div className='flex-1'>
                        SUBMIT
                    </div>
                </button>
                <img src="/images/modal-shadow.svg" alt="" className='absolute top-0 right-0 z-[-1]' />
            </Box>
        </StyledModal>
    );
}
