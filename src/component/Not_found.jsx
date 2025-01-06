import notFound from "../assets/notFound.png";

const Not_found = () => {
  return (
    <div className={`w-full h-auto flex flex-row justify-center items-center `}>
      <img className="w-[50%] h-[50%]" src={notFound} alt="404" />
    </div>
  );
};

export default Not_found;
