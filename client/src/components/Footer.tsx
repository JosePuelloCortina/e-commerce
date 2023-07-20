import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 py-16 sm:py-24 lg:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/images/shopall-4.png"
                alt=""
              />
            </a>
            
            <p className="mt-4 text-lg leading-8 text-gray-300">
            Transformando el mundo hacia un futuro sostenible y mejor.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-3">
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-white">Company</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/">Home</a>
              </dd>

              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/profile">Profile</a>
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/products">Products</a>
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/contact">Contact</a>
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-white">Legal</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/#">Privacity</a>
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/#">Terms</a>
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-white">Support</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/#">Documentation</a>
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="/#">Guides</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          
        </div>
      </div>     
    </footer>
  )
}

export default Footer