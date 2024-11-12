import { CartContext } from '@/context/cart';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function ShoppingCart() {
  const [showCart, setShowCart] = useState(false);
  const { coursesInCart } = useContext(CartContext);

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <Link
          href={'/cart'}
          onMouseOver={() => setShowCart(true)}
          onMouseOut={() => setShowCart(false)}
        >
          <Image
            src={'/static/icons/shopping_cart.svg'}
            alt={'Shopping Cart'}
            width={24}
            height={24}
          />
        </Link>
        {showCart && (
          <div className="z-50 absolute bg-purple-100/20 p-4 rounded-md top-8 w-60">
            <h3>My Cart</h3>

            {coursesInCart.length ? (
              <div className="flex gap-4 flex-col">
                <ul>
                  {coursesInCart.map((item) => (
                    <li key={item.id} className="text-md">
                      {item.course_name} ({item.time})
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No classes in cart yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
