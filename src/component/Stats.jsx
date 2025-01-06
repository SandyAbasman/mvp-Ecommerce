import Counter from "./Counter";

const Stats = () => {
  return (
    <div className="w-full h-auto flex flex-row justify-between items-center px-32 py-12   ">
      <div className="flex w-1/3 flex-col justify-start items-start">
        <h2 className="font-bold text-blue-400 text-5xl">
          <Counter countEnd={500} />+{" "}
        </h2>
        <p className="text-black/50">custom Styles</p>
      </div>
      <div className="flex w-1/3 flex-col justify-start items-center">
        <h2 className="font-bold text-blue-400 text-5xl">
          <Counter countEnd={985} />+{" "}
        </h2>
        <p className="text-black/50">Happy customers</p>
      </div>
      <div className="flex w-1/3 flex-col justify-start items-end">
        <h2 className="font-bold text-blue-400 text-5xl">
          <Counter countEnd={747} />+{" "}
        </h2>
        <p className="text-black/50">Pickup Outlets</p>
      </div>
    </div>
  );
};

export default Stats;
