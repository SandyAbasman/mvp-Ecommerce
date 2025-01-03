/* eslint-disable react/prop-types */


export const Title = ({title1, title2, description}) => {
  return (
    <div className="w-full h-auto flex flex-row py-2 justify-center items-start ">
        <div className="w-fit h-auto text-[#252B42]  flex flex-col p-2 justify-start text-center  item-center">
          <p className="text-[1.25rem] font-medium">{title1}</p>
          <h2 className="text-[1.5rem] font-bold">{title2}</h2>
          <p className="text-[0.875rem] font-normal">
           {description}
          </p>
        </div>
      </div>
  )
}
