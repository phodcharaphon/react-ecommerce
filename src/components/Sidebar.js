import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'} 
      w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
      xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between pt-6 border-b'>
        <div className='uppercase text-sm font-semibold'>ตระกร้าสินค้า (0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[560px] w-auto lg:h-[680px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-2 mt-2'>
      <div className='flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'>
          <span className='mr-2'>รวม</span> {parseFloat(total).toFixed(2)}
        </div>
        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center text-xl'>
          <FiTrash2 />
        </div>
      </div>
      <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full '>View Cart</Link>
      <Link to='/' className='bg-primary flex p-4 justify-center items-center text-white w-full '>Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
