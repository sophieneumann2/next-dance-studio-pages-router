import Image from 'next/image';
import Link from 'next/link';
import ShoppingCart from '../shopping-cart';

export default function NarBar() {
  return (
    <div className="flex flex-row gap-8 m-4 justify-between">
      <div className="flex flex-row gap-8 ">
        <Link href={'/'}>Home</Link>
        <Link href={'/courses'}>Book classes</Link>
      </div>

      <div className="flex flex-row gap-8">
        <ShoppingCart />
        <div className="flex flex-row gap-2">
          Sophie
          <Image
            src={'/static/icons/profile.svg'}
            alt={'Account'}
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
