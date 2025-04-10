export default function TestPage() {
  return <div>
    <div className="p-4">
      <div className="grid gap-8 items-center">
        <div role="alert" className="rounded-md border border-gray-300 bg-white p-4 shadow-sm">
          <div className="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="flex-1">
              <strong className="font-medium text-gray-900"> Changes saved </strong>

              <p className="mt-0.5 text-sm text-gray-700">Your product changes have been saved.</p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
                >
                  Preview
                </button>

                <button
                  type="button"
                  className="rounded border border-transparent px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                >
                  Revert
                </button>
              </div>
            </div>

            <button
              className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
              type="button"
              aria-label="Dismiss alert"
            >
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div role="alert" className="border-s-4 border-red-700 bg-red-50 p-4">
          <div className="flex items-center gap-2 text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <strong className="font-medium"> Something went wrong </strong>
          </div>
          <p className="mt-2 text-sm text-red-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi
            assumenda numquam deserunt consectetur autem nihil quos debitis dolor culpa.
          </p>
        </div>
      </div>
    </div>

    <div className="px-4 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
      {[...Array(6)].map(() => (
        <a key="" href="#" className="group relative block overflow-hidden">
          <button
            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
          >
            <span className="sr-only">Wishlist</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

          <img
            src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative border border-gray-100 bg-white p-6">
            <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap"> New </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

            <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

            <form className="mt-4">
              <button
                className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </a>
      ))}
    </div>
    <div>
      <button>test button</button>
      <h1>test h1</h1>
      <p>test p</p>
      <p>test p</p>
    </div>
  </div>
}
