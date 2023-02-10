import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

export default function mainImg() {
  return (
    <div className='bottom grid  lg:grid-cols-2 '>
      <div className='imgc relative'>
        <Image
          src='/images/image-M.jpg'
          alt='Meusium'
          height={670}
          width={870}
          className=''
        />
        <button className='watch-btn absolute  -mt-[40px] ml-[10px] flex rounded-[2px] bg-white p-1 font-mono font-bold shadow-sm shadow-slate-400 sm:-mt-[45px] sm:p-2'>
          <div className='icco mt-1 '>
            <Icon icon='material-symbols:play-arrow-rounded' className='' />
          </div>
          Watch Trailer
        </button>
      </div>
      <div className='info lg::pt-0 pt-4 lg:pl-[95px]'>
        <div className='desc flex items-center  justify-between'>
          <div className='title-info'>
            <div className='live text-[14px] text-[#a9b7b9]'>Live on</div>
            <div className='date'>
              <span className='date font-mono text-[24px] font-bold'>
                29 June 2020
              </span>
              <span className='time pl-2 font-serif text-[20px]'>
                for 60 min
              </span>
            </div>
          </div>
          <div className='Devices'>
            <div className='label'>
              <p className='text-[12px] text-[#a9b7b9]'>Devices</p>
            </div>
            <div className='icons flex'>
              <Icon icon='akar-icons:mobile-device' />
              <span className='text-[10px]'>or</span>
              <Icon icon='mi:computer' />
            </div>
          </div>
        </div>
        <div className='choose pt-4 font-mono'>
          <p className='text-[17px] text-[#a9b7b9]'>Choose Slot</p>
          <div className='time pt-4'>
            <ul className='flex gap-4'>
              <li className='first'>
                <a
                  href='#'
                  className='rounded-[20px] border border-gray-400 p-0.5 sm:p-2'
                >
                  10:30 AM
                </a>
                <p className='pt-2 pl-3 text-[10px] text-[#a9b7b9]'>
                  1/5 Seats Left
                </p>
              </li>
              <li className='first'>
                <a
                  href='#'
                  className='rounded-[20px] border border-gray-400 p-0.5 sm:p-2 sm:pt-2 sm:pl-3'
                >
                  5:00 AM
                </a>
                <p className='pt-2 pl-3 text-[10px]  text-[#a9b7b9]'>
                  2/5 Seats Left
                </p>
              </li>
              <li className='first'>
                <a
                  href='#'
                  className='rounded-[20px] border border-gray-400 p-0.5 sm:p-2'
                >
                  09:30 AM
                </a>
                <p className='pt-2 pl-3  text-[10px] text-[#a9b7b9]'>
                  4/5 Seats Left
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='fee pt-4 font-mono'>
          <p className='text-[17px] text-[#a9b7b9]'>Class Fee</p>
          <div className='price-info flex items-center pt-4 sm:pt-0'>
            <div className='price step-card-sha flex flex-col-reverse items-center rounded-[5px] border border-white p-[10px] text-center shadow-sm  shadow-slate-400 sm:flex-row'>
              <span className='real pr-[5px] text-[14px] font-medium text-[#8a9b9d] line-through'>
                INR 120
              </span>
              <span className='sale text-center text-[17px] font-bold'>
                INR 60
              </span>
            </div>
            <div className='earn-points pl-4'>
              <a href='#' className='!text-red-500 underline'>
                Earn 100+ Points
              </a>
            </div>
          </div>
        </div>
        <div className='buy flex justify-between gap-2 pt-4'>
          <button className='book-class step-card-sha rounded-[5px] border border-red-500 bg-red-500 p-2 font-mono text-white shadow-sm shadow-slate-400'>
            Book this Class for free
          </button>
          <button className='share step-card-sha rounded-[5px] border border-red-500 p-2 font-mono text-red-500 shadow-sm shadow-slate-400'>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
