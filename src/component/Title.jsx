/* eslint-disable react/prop-types */

export const Title = ({ title1, title2, description }) => {
  return (
    <div className="flex h-auto w-full flex-row items-start justify-center py-2">
      <div className="item-center flex h-auto w-fit flex-col justify-start p-2 text-center text-[#252B42]">
        <p className="text-2xl font-medium">{title1}</p>
        <h2 className="text-4xl font-bold">{title2}</h2>
        <p className="text-xl font-normal">{description}</p>
      </div>
    </div>
  );
};
