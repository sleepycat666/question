import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PersonCardProps {
  personId: string | undefined;
  personImage: string | undefined;
  personName: string | undefined;
  personNick: string | undefined;
  personPosition: string | undefined;
}

function PersonCard({ personId, personImage, personName, personNick, personPosition }: PersonCardProps) {
  const [hoverId, setHoverId] = useState<string | undefined>('');

  const handlePersonHover = () => {
    setHoverId(personId);
  };

  const handlePersonLeave = () => {
    setHoverId('');
  };

  return (
    <div className='max-w-[140px] overflow-hidden'>
      <Link
        href={`/people/${personId}`}
        key={personId}>
        <div
          className='max-w-[140px] overflow-hidden'
          key={personId}
          id={personId}
          onMouseOver={handlePersonHover}
          onMouseLeave={handlePersonLeave}
          title={`${personName} (${personPosition})`}>
          <div
            className='circle relative overflow-hidden cursor-pointer rounded-[50%] w-[140px] h-[140px] flex justify-center items-center mt-0 mb-[7px] mx-[15px]'
            id={personId}>
            <div
              className='relative cursor-pointer rounded-[50%] w-[135px] h-[135px] z-[1] overflow-hidden border-[2.5px] border-solid bg-cover border-white'
              id={personId}>
              <Image
                width={135}
                height={135}
                src={personImage!}
                alt=''
                id={personId}
              />
            </div>
          </div>
          <div
            className='text-white truncate text-center text-[0.95em] font-medium cursor-pointer'
            id={personId}>
            {hoverId === personId ? personName : personNick}
          </div>
          <div
            className='text-[#dcdcdc] truncate text-center h-[50px] text-[0.8em] cursor-pointer'
            id={personId}>
            {personPosition}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PersonCard;
