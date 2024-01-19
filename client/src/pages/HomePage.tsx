import ProductList from '../components/ProductList'
import Gallery from '../components/Gallery'
import Carousel from '../components/Carousel'
import { useMemo } from 'react';


function HomePage() {

  const images = useMemo(() => [
    {
      src: '../images/Banner-003.png',
      alt: 'Random image 1',
    },
    {
      src: '../images/Banner-001.png',
      alt: 'Random image 2',
    },
    {
      src: '../images/Banner-004.jpg',
      alt: 'Random image 3',
    },
  ], []);

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="bg-gray-100 py-20">
          <div className="mx-auto">
            <Carousel images={images} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-16">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Bienvenido a nuestra tienda en línea
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                Ofrecemos una gran variedad de productos <b>eco friendly</b> de alta calidad
              </p>
              <div className="mt-8">
                <ProductList />
                <div className="inline-flex rounded-md shadow">
                  {/* <a
                    href="/profile"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Comprar ahora
                  </a> */}
                </div>
                <Gallery/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>         
  </>
  )
}

export default HomePage