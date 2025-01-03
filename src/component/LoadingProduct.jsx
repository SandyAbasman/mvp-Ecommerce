const LoadingProduct = () => {
  return (
    <div className="text-gray-700 cursor-pointer flex flex-col justify-start items-center">
      <div className="overflow-hidden bg-gray-600 w-28 h-40"></div>
      <div className=" w-1/2 p-2 flex flex-col item-center">
        <p className="text-xs w-4 h-4 font-semibold text-center">{name}</p>
        <p className=" w-2 h-3 font-semibold text-xs text-center text-green-600"></p>
      </div>
    </div>
  );
};

export default LoadingProduct;
