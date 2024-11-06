import Image from 'next/image';
import { useState } from 'react';

interface ICouseCardProps {
  courseName: string;
  courseTime: string;
}

export default function CourseCard({
  courseName,
  courseTime,
}: ICouseCardProps) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleOnClick = () => {
    setAddedToCart(!addedToCart);
  };
  return (
    <div className="bg-white/5 rounded-xl backdrop-blur-md max-w-80 overflow-hidden min-w-64">
      <Image
        src={'/static/images/dance_class.jpg'}
        alt={'Dance Class'}
        width={28000}
        height={100}
      />
      <div className="p-4 flex flex-row gap-4 items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs bg-purple-200/20 rounded-full p-1 text-center">
            {courseTime}
          </span>
          <h2 className="text-lg">{courseName}</h2>
        </div>

        <button
          className={`flex flex-row items-center gap-2 p-2 ${addedToCart ? 'bg-purple-400' : 'bg-purple-700'} rounded-full`}
          onClick={handleOnClick}
        >
          <Image
            src={
              addedToCart ? '/static/icons/check.svg' : '/static/icons/add.svg'
            }
            alt={addedToCart ? 'Remove from Cart' : 'Add to Cart'}
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
