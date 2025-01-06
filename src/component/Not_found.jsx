import notFound from "../assets/notFound.png";

const Not_found = () => {
  return (
    <div
      className={`flex h-auto w-full flex-row items-center justify-center py-16`}
    >
      <img className="h-[50%] w-[50%]" src={notFound} alt="404" />
    </div>
  );
};

export default Not_found;
