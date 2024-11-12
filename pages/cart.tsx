import CustomerForm from '@/components/customer-form';
import { CartContext } from '@/context/cart';
import { Course } from '@/types';
import Image from 'next/image';
import { useContext, useState } from 'react';

export default function Cart() {
  const { coursesInCart, removeFromCart } = useContext(CartContext);
  const [cartStep, setCartStep] = useState<number>(0);

  const handleOnDelete = (course: Course) => removeFromCart(course);

  return (
    <div>
      <h1 className="text-lg mb-8">My Cart</h1>

      {cartStep != 1 && cartStep != 2 ? (
        <>
          {coursesInCart.length ? (
            <div className="flex gap-4 flex-col items-start">
              <ul className="flex flex-col gap-2">
                {coursesInCart.map((course) => (
                  <li key={course.id} className="text-md">
                    <div className="flex flex-row justify-between gap-8 items-center">
                      <p>
                        {course.course_name} ({course.time})
                      </p>
                      <button onClick={() => handleOnDelete(course)}>
                        <Image
                          src={'/static/icons/delete.svg'}
                          alt={'Remove from Cart'}
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                className="bg-purple-700 rounded-full p-2"
                onClick={() => setCartStep(1)}
              >
                Book Classes
              </button>
            </div>
          ) : (
            <p>No classes in cart yet.</p>
          )}
        </>
      ) : null}

      {cartStep === 1 ? (
        <>
          <h2>Customer Details</h2>
          <p>HERE COMES THE CUSTOMER FORM (name, email, bild-einverständnis)</p>
          <CustomerForm additionalOnSubmit={() => setCartStep(2)} />
        </>
      ) : null}
      {cartStep === 2 ? (
        <>
          <h2>Booking done!</h2>
        </>
      ) : null}
    </div>
  );
}
