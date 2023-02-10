import React from 'react';

export default function Goals() {
  const goals = [
    {
      id: 1,
      bg: 'bg-blue-400',
      per: '15%',
      title: 'Goals',
      skill: 'Explorer',
    },
    {
      id: 2,
      bg: 'bg-green-400',
      per: '15p',
      title: 'Badge',
      skill: 'Powerhouse of Ideas',
    },
    {
      id: 3,
      bg: 'bg-green-400',
      per: '10p',
      title: 'Badge',
      skill: 'Daredevil',
    },
    {
      id: 4,
      bg: 'bg-green-400',
      per: '15p',
      title: 'Badge',
      skill: 'The TroubleShooter',
    },
  ];

  const skills = [
    {
      id: 5,
      per: '25p',
      title: 'Skill',
      skill: 'Creative Thinking',
    },
    {
      id: 6,
      per: '15p',
      title: 'Skill',
      skill: 'Flexible Thinking',
    },
    {
      id: 7,
      per: '20p',
      title: 'Skill',
      skill: 'Management',
    },
    {
      id: 8,
      per: '15p',
      title: 'Skill',
      skill: 'Strategic thinking',
    },
  ];

  return (
    <div className='px-[55px] pt-4'>
      <div className='p'>
        <div className='tit'>
          <p className='font-mono text-[24px] font-bold'>
            What Goals, Badges & Skills will be achived in this Class?
          </p>
        </div>
        <div className='badge flex flex-wrap gap-6 pt-6'>
          {goals.map((items) => (
            <div className='goal font-mono' key={items.id}>
              <div className=' pb-1'>
                <a
                  href='#'
                  className={`rounded-[20px]  ${items.bg} p-1 px-[15px] text-[10px] text-white shadow-sm shadow-slate-400`}
                >
                  {items.title}
                </a>
              </div>
              <div className=' flex gap-4 rounded-[25px] border border-gray-400 p-2 px-[15px]'>
                <div className='per flex items-center rounded-[20px] border-2 border-green-400 bg-yellow-300 p-1 text-center text-[10px] '>
                  {items.per}
                </div>
                <p className='font-bold'> {items.skill}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='badge flex flex-wrap gap-6 pt-4'>
          {skills.map((items) => (
            <div className='goal font-mono' key={items.id}>
              <div className=' pb-1 '>
                <a
                  href='#'
                  className='rounded-[20px]  bg-purple-400 p-1 px-[15px] text-[10px] font-bold text-white shadow-sm shadow-slate-400'
                >
                  {items.title}
                </a>
              </div>
              <div className=' flex gap-4 rounded-[25px] border border-gray-400 p-2 px-[15px]'>
                <div className='per flex items-center rounded-[20px] border-2 border-green-400 bg-yellow-300 p-1 text-center text-[10px]'>
                  {items.per}
                </div>
                <p className='font-bold'> {items.skill}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='class pt-12'>
          <div className='titl'>
            <p className='font-mono text-[24px] font-bold'>
              What will be covered in this Class?
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
      </div>
    </div>
  );
}
