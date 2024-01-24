import React, { useEffect, useCallback } from 'react';
import { useProductsStore } from '../store/products';
import { productsRequest } from '../api/products';

function ProductList() {
  
  const setProducts = useProductsStore((state) => state.setProducts);

  
    const fetchData = useCallback( async () => {
      try {
        const response = await productsRequest();
        const products = response.data;
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }, [setProducts]);
     
    useEffect(() => {
      fetchData();
    }, []);

  const products = useProductsStore(state => state.products)
  const visibleProducts = products.slice(0, 4)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos destacados:</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {visibleProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.productDetails[0].images}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.name}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                    <p className="mt-1 text-sm text-gray-500">descuento</p> 
                    <p className="mt-1 text-sm text-gray-500">{product.productDetails[0].color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$ {product.unit_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList