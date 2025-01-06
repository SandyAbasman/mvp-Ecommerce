import Counter from "./Counter";

const Stats = () => {
  return (
    <div className="flex h-auto w-full flex-row items-center justify-between px-32">
      <div className="flex w-1/3 flex-col items-start justify-start">
        <h2 className="text-5xl font-bold text-blue-400">
          <Counter countEnd={500} />+{" "}
        </h2>
        <p className="text-black/50">custom Styles</p>
      </div>
      <div className="flex w-1/3 flex-col items-center justify-start">
        <h2 className="text-5xl font-bold text-blue-400">
          <Counter countEnd={985} />+{" "}
        </h2>
        <p className="text-black/50">Happy customers</p>
      </div>
      <div className="flex w-1/3 flex-col items-end justify-start">
        <h2 className="text-5xl font-bold text-blue-400">
          <Counter countEnd={747} />+{" "}
        </h2>
        <p className="text-black/50">Pickup Outlets</p>
      </div>
    </div>
  );
};

export default Stats;
