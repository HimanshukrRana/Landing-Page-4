import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

export default function Class() {
  const card = [
    {
      id: 1,
      step: 1,
      title: 'BOOK YOUR CLASS',
      desc: 'Go to Calendar & choose from the wide range of Masterclasses.',
    },
    {
      id: 2,
      step: 2,
      title: 'GET PREPARED',
      desc: 'Prepare for the class by following the instructions in the Overview.',
    },
    {
      id: 3,
      step: 3,
      title: 'SET UP FOR CLASS',
      desc: ' Check the device and app requirements at least 15 minutes prior to start time.',
    },
    {
      id: 4,
      step: 4,
      title: 'JOIN CLASS',
      desc: 'Open link sent on your registered mobile or email on the device.',
    },
  ];

  return (
    <div className='px-[55px] pt-8'>
      <div className='div'>
        <div className='titl'>
          <p className='font-mono text-[24px] font-bold'>
            What are the Post-Class Assignments?
          </p>
        </div>
        <div className='cards flex flex-wrap gap-8 pt-4'>
          <div className='c1 step-card rounded-[5px] border border-gray-400'>
            <Image
              src='/images/post-card-1.jpg'
              alt='c1'
              width={240}
              height={230}
              className='h-auto w-auto rounded-[5px]'
            />

            <div className='desc flex justify-between p-2 py-8'>
              <p className='font-mono text-[20px] font-bold'>
                #3 Words in <br /> French
              </p>
              <a href='#' className='text-[30px] font-bold'>
                <Icon icon='material-symbols:arrow-forward-rounded' />
              </a>
            </div>
          </div>
          <div className='c1 step-card rounded-[5px] border border-gray-400 '>
            <Image
              src='/images/post-card-2.jpg'
              alt='c1'
              width={240}
              height={230}
              className=' h-auto w-auto'
            />

            <div className='desc flex justify-between p-2 py-8'>
              <p className='font-mono text-[20px] font-bold'>
                #3 Words in <br /> French
              </p>
              <a href='#' className='text-[30px] font-bold'>
                <Icon icon='material-symbols:arrow-forward-rounded' />
              </a>
            </div>
          </div>
        </div>

        <div className='class pt-12'>
          <div className='titl'>
            <p className='font-mono text-[24px] font-bold'>
              How to get ready for this class?
            </p>
          </div>
          <div className='titl pt-4'>
            <p className='font-mono'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit.
            </p>
          </div>
        </div>
        <div className='class pt-12'>
          <div className='titl'>
            <p className='font-mono text-[24px] font-bold'>
              How to attend this class?
            </p>
          </div>
          <div className='carsd flex flex-wrap justify-center gap-4 pt-8'>
            {card.map((item) => (
              <div
                className='c1 step-card-sha step-card rounded-md  p-3 py-8  text-center'
                key={item.id}
              >
                <div className='flex justify-center'>
                  <Image
                    src='/images/preparation.svg'
                    alt='c1'
                    width={100}
                    height={100}
                    className='h-auto w-[73px]'
                  />
                </div>

                <p className='text-red-400'>STEP {item.step}</p>
                <div className='desc text-center'>
                  <p className='font-mono font-bold'>{item.title} </p>
                  <p className='w-[240px] font-mono text-[15px] text-[#a9b7b9]'>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
