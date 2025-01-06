const LoadingProduct = () => {
  const n = 4;
  return (
    <div className="w-full h-[20rem]    flex-row grid grid-cols-4 gap-8 justify-start items-start px-32">
      {[...Array(n)].map((e, i) => (
        <div
          key={i}
          className="motion-preset-compress w-full  h-auto flex-col flex gap-6 justify-between item-start"
        >
          <div className="flex flex-wrap my-2">
            <div className="py-2 w-full">
              <div className="h-full  border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-black/10 md:h-40 w-[30rem] object-cover  object-center"></div>
                <div className="py-6">
                  <h2 className="bg-gray-400 animate-pulse h-4 w-full mb-2"></h2>
                  <h1 className="w-2/3 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                  <p className="leading-relaxed mb-3 w-1/3 h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-full h-10 animate-pulse rounded-md bg-gray-400"></p>
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
