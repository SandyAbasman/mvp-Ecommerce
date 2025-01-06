const LoadingProduct = () => {
  const n = 5;
  return (
    <div className="grid h-[20rem] w-full grid-cols-5 flex-row items-start justify-start gap-8">
      {[...Array(n)].map((e, i) => (
        <div
          key={i}
          className="item-start motion-preset-compress flex h-auto w-full flex-col justify-between gap-6"
        >
          <div className="my-2 flex flex-wrap">
            <div className="w-full py-2">
              <div className="h-full overflow-hidden rounded-lg border-gray-900">
                <div className="w-[40rem] bg-black/10 object-cover object-center md:h-40 lg:h-48"></div>
                <div className="py-6">
                  <h2 className="mb-2 h-4 w-full animate-pulse bg-gray-400"></h2>
                  <h1 className="mb-4 h-6 w-2/3 animate-pulse bg-gray-500"></h1>
                  <p className="mb-3 h-3 w-1/3 animate-pulse bg-gray-400 leading-relaxed"></p>
                  <p className="mb-3 h-10 w-full animate-pulse rounded-md bg-gray-400 leading-relaxed"></p>
                  {/* <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p> */}
                  {/* <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                    <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" bg-black/10 animate-pulse w-full h-auto px-32 py-32 rounded-md "></div>

          
          <div className="bg-black/10 animate-pulse w-full py-8 rounded-md "></div> */}
        </div>
      ))}
    </div>
  );
};

export default LoadingProduct;
