/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import React from 'react';

import MainImg from './mainImg';

export default function Main() {
  const [count, setCount] = React.useState(20);
  return (
    <div className=' p-[60px] pt-[6rem]'>
      <div className='trip'>
        <div className='home pt-4'>
          <ul className='  flex'>
            <li className=' flex pr-4 text-[15px] text-[#a9b7b9]'>
              Home
              {/*  <Icon icon='material-symbols:keyboard-double-arrow-right' /> */}
              <div className='img flex items-center'>
                <Image
                  src='/images/icons/double-chevron-right.png'
                  alt='arrow'
                  height={11}
                  width={11}
                  className='h-[11px] pl-3 text-[#a9b7b9]'
                />
              </div>
            </li>
            <li className='flex pr-4 text-[15px] text-[#a9b7b9] '>
              Goals
              {/*  <Icon icon='material-symbols:keyboard-double-arrow-right' /> */}
              <div className='img flex items-center'>
                <Image
                  src='/images/icons/double-chevron-right.png'
                  alt='arrow'
                  height={11}
                  width={11}
                  className='h-[11px] pl-3 text-[#a9b7b9]'
                />
              </div>
            </li>
            <li className='flex pr-4 text-center text-[15px] text-[#a9b7b9]'>
              Explorer
              {/* <Icon icon='material-symbols:keyboard-arrow-right' className='' /> */}
            </li>
          </ul>
        </div>
        <div className='musium'>
          <div className='top flex flex-col pt-4 pb-[20px] sm:flex-row sm:justify-between'>
            <div className='title pb-3 font-primary sm:pb-0 '>
              <h1 className='text-[20px] sm:text-[35px]'>
                Trip to the Palace of Versailles
              </h1>

              <p className='font-mono text-[18px]'> ONLINE MUSEUM 8+ Years</p>
            </div>
            <div className='likes flex justify-center rounded-md  border border-gray-400 bg-[#fdffd3] sm:flex-col sm:p-2 '>
              <div className='icon  items-center p-1'>
                <Image
                  src='/images/icons/like.svg'
                  alt='Like'
                  height={30}
                  width={30}
                  onClick={() => setCount(count + 1)}
                  className=' like h-[30px] w-[35px] cursor-pointer'
                />
              </div>

              <div className='cou font-mono'>
                <div className='text-center text-[18px]'>{count}</div>
                <div className='text-[10px]'>RECOMMEND</div>
              </div>
            </div>
          </div>
          <MainImg />
        </div>
      </div>
    </div>
  );
}
