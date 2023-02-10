import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className='footer-wrap  font-mono text-white '>
      <div className='  px-[55px] pt-6 pb-6 '>
        <div className='footer-top flex items-center justify-center'>
          <button className='book-class rounded-[5px] border border-red-500 bg-red-500 p-2'>
            Go to RealTV
          </button>
        </div>
        <div className='footer-center flex flex-wrap justify-between pt-6'>
          <div className='footer-first'>
            <Image
              src='/images/white-logo.png'
              alt=''
              width={150}
              height={50}
              className='h-auto w-[150px]'
            />
            <p className='slogan pt-2'>A Product of uFaber Education</p>
            <div className='address flex items-center pt-4'>
              <Icon icon='material-symbols:location-on-outline-rounded' />
              <div className='add pl-4'>
                <p>
                  FF A-006, Art Guild House, Phoenix <br />
                  Market City, Kurla, Mumbai - 400070
                </p>
              </div>
            </div>
            <div className='phone flex items-center pt-2'>
              <Icon icon='lucide:phone-call' />
              <div className='mob pl-4'>
                <a href='#' className='!text-white'>
                  +91 8080 555 766
                </a>
              </div>
            </div>
            <div className='email flex items-center pt-2'>
              <Icon icon='tabler:mail-forward' />
              <div className='mail pl-4'>
                <a href='#' className='!text-white'>
                  info@ufaber.com
                </a>
              </div>
            </div>
          </div>
          <div className='footer-second flex gap-8 pt-6 sm:pt-0'>
            <ul className='quick-links '>
              <li className='link label font-bold text-black'>QUICK LINKS</li>
              <li className='link pt-2 text-white '>
                <a href='#' className=' pt-2 !text-white'>
                  Teach with Us
                </a>
              </li>
              <li className='link pt-2 text-white'>
                <a href='#' className='link !text-white'>
                  Refer a Friend
                </a>
              </li>
              <li className='link pt-2 text-white'>
                <a href='#' className='link !text-white'>
                  Become a Affiliate
                </a>
              </li>
            </ul>
            <ul className='quick-link text-whites text-white'>
              <li className='link  text-white'>
                <a href='#' className='link font-bold !text-black'>
                  About Us
                </a>
              </li>
              <li className='link pt-2 !text-white'>
                <a href='#' className='link !text-white'>
                  FAQs
                </a>
              </li>
              <li className='link pt-2 !text-white'>
                <a href='#' className='link !text-white'>
                  Blog
                </a>
              </li>
              <li className='link pt-2 !text-white'>
                <a href='#' className='link !text-white'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-third pt-6 sm:pt-0'>
            <ul className='social flex text-[30px]'>
              <li className='link pr-4 '>
                <a href='#' className='!text-white'>
                  <Icon icon='ic:round-facebook' />
                </a>
              </li>
              <li className='link pr-4  '>
                <a href='#' className='!text-white'>
                  <Icon icon='dashicons:instagram' />
                </a>
              </li>
              <li className='link pr-4  '>
                <a href='#' className='!text-white'>
                  <Icon icon='bxl:linkedin-square' />
                </a>
              </li>
            </ul>
            <div className='store-img flex gap-2 pt-4'>
              <Image
                src='/images/google.png'
                alt=''
                className='h-auto w-[100px]'
                width={100}
                height={10}
              />
              <Image
                src='/images/apple.png'
                alt=''
                width={100}
                height={10}
                className='h-auto w-[100px]'
              />
            </div>
          </div>
        </div>
        {/* <div className='footer-mobile'>
          <Image
            src='/images/white-logo.png'
            alt=''
            width={150}
            height={50}
            className='h-auto w-[150px]'
          />
          <p className='slogan'>A Product of uFaber Education</p>
          <div className='download-app flex items-center'>
            <p>Download the App</p>
            <a href='#' className='icon fab fa-google-play'></a>
            <a href='#' className='icon fab fa-apple'></a>
          </div>
          <ul className='mob-links'>
            <li className='link'>
              <a href='#'>Contact Us</a>
            </li>
            <li className='link'>
              <a href='#'>Teach with Us</a>
            </li>
            <li className='link'>
              <a href='#'>Refer a Friend</a>
            </li>
            <li className='link'>
              <a href='#'>Become an Affiliate</a>
            </li>
            <li className='link'>
              <a href='#'>About Us</a>
            </li>
            <li className='link'>
              <a href='#'>Blog</a>
            </li>
            <li className='link'>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className='copyright bg-[#464242] p-2  text-center'>
        <p>© 2019 uFaber, All rights reserved uFaber Edutech</p>
      </div>
    </div>
  );
}
