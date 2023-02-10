import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  // function myFunction() {
  //   // eslint-disable-next-line no-console
  //   console.log('Hello');
  // }
  return (
    <div className='header-wrap shadow-nav fixed z-[99999] w-full max-w-[1400px] bg-white'>
      <div className=' flex  w-full justify-between p-[20px]'>
        <div className='flex w-[40%] items-center'>
          <div>
            <Icon icon='fa6-solid:bars' className='toggle-btn text-[24px]' />
          </div>
          <div className='site-logo ml-4 flex w-[220px] items-center justify-center'>
            <Image src='/images/logo.jpg' alt='Logo' width={220} height={30} />
          </div>
        </div>
        <div className='hidden w-[60%] items-center  justify-between  lg:flex'>
          <div className='menus  '>
            <ul className='menu-list font-Medium flex justify-between text-[20px] '>
              <li className='item pr-6 font-mono'>
                <a href='#'>Masterclasses</a>
              </li>
              <li className='item pr-6 font-mono'>
                <a href='#'>Programs</a>
              </li>
              <li className='item pr-6 font-mono'>
                <a href='#'>Challanges</a>
              </li>
              <li className='item font-mono'>
                <a href='#'>Library</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='wallet shadow-wallet font-stander hidden cursor-pointer  justify-center  rounded-[25px] border border-[#333333] text-[12px] sm:flex'>
          <div className='user-icon ml-[2px] flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#bffe8a]'>
            <Icon icon='mdi:user' />
          </div>
          <div className='money mr-[10px]  flex items-center text-center font-mono '>
            Book Now
          </div>
        </div>
        {/* <div className='mobile-icon'>
          <a onClick={myFunction}>
            <div className='toggle-btn fas fa-bars'></div>
          </a>
        </div> */}
      </div>
      <div className='mobile-menus hidden' id='mobileMenu'>
        <ul className='mobile-menu-list'>
          <li className='item'>
            <a href='#'>Masterclasses</a>
          </li>
          <li className='item'>
            <a href='#'>Programs</a>
          </li>
          <li className='item'>
            <a href='#'>Challanges</a>
          </li>
          <li className='item'>
            <a href='#'>Library</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
