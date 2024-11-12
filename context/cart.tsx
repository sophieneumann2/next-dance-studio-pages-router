import { Course } from '@/types';
import { createContext, useState } from 'react';

type CartContextType = {
  coursesInCart: Course[];
  setCoursesInCart: unknown;
  addToCart: unknown;
  removeFromCart: unknown;
};

const CartContext = createContext<CartContextType>({
  coursesInCart: [],
  setCoursesInCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [coursesInCart, setCoursesInCart] = useState<Course[]>([]);

  const checkIsCourseInCart = (course: Course) =>
    coursesInCart.find((cartItem) => cartItem.id === course.id);

  /* START CART MODIFICATIONS */

  const addToCart = (course: Course) => {
    const isCourseInCart = checkIsCourseInCart(course);

    if (!isCourseInCart) {
      setCoursesInCart([...coursesInCart, course]);
    }
  };

  const removeFromCart = (course: Course) => {
    const isCourseInCart = checkIsCourseInCart(course);

    if (isCourseInCart) {
      setCoursesInCart(
        coursesInCart.filter((cartItem) => cartItem.id !== course.id),
      );
    }
  };

  /* END CART MODIFICATIONS */

  return (
    <CartContext.Provider
      value={{
        coursesInCart,
        setCoursesInCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
