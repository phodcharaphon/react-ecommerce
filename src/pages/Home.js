import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);
  const filterProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })
  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filterProducts.map((product) => {
              return <Product className='w-full h-[200px] bg-pink-200' product={product} key={product.id} />
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
