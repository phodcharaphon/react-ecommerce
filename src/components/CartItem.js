import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext'

const CartItem = ({ item }) => {
  const { removeCart, plusItem, removeItem } = useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[180px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
            >{title}
            </Link>
            <div onClick={() => removeCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-50 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w[100px] items-center h-full border text-primary font-medium'>
              <div onClick={() => removeItem(id)} className='flex flex-1 justify-center items-center cursor-pointer'>
                <IoMdRemove />
              </div>
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              <div onClick={() => plusItem(id)} className='flex flex-1 h-full justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            <div className='flex-1 flex items-center justify-around'>
              ต่อหน่วย {price} บาท
            </div>
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              รวม {`${parseFloat(item.price * amount).toFixed(2)}`} บาท
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
