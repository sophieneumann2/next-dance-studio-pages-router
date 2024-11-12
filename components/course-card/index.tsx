import { CartContext } from '@/context/cart';
import { Course } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

interface ICouseCardProps {
  course: Course;
}

export default function CourseCard({ course }: ICouseCardProps) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { coursesInCart, removeFromCart, addToCart } = useContext(CartContext);

  const checkIsCourseInCart = (course: Course) =>
    Boolean(coursesInCart.find((cartItem) => cartItem.id === course.id));

  useEffect(() => {
    const courseIsInCart = checkIsCourseInCart(course);
    setAddedToCart(courseIsInCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const courseIsInCart = checkIsCourseInCart(course);
    setAddedToCart(courseIsInCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coursesInCart]);

  const handleOnClick = () => {
    if (addedToCart) {
      removeFromCart(course);
    } else {
      addToCart(course);
    }
  };

  return (
    <div className="bg-white/5 rounded-xl backdrop-blur-md max-w-80 overflow-hidden min-w-64">
      <Link href={`/courses/${course.id}`}>
        <Image
          src={'/static/images/dance_class.jpg'}
          alt={'Dance Class'}
          width={28000}
          height={100}
        />
      </Link>

      <div className="p-4 flex flex-row gap-4 items-center justify-between">
        <Link href={`/courses/${course.id}`}>
          <div className="flex flex-col gap-1">
            <span className="text-xs bg-purple-200/20 rounded-full p-1 text-center">
              {course.time}
            </span>
            <h2 className="text-lg">{course.course_name}</h2>
          </div>
        </Link>

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
