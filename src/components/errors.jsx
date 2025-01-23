import { BiError } from "react-icons/bi";
const Error = (info) => {
  const { error } = info;
  if (!error) return null;
  return (
    <div className=" py-2 flex items-center">
      <span>
          <BiError className=" text-red-600 " />
      </span>
      <span className="inline-block ml-1">{error}</span>
    </div>
  );
};

export default Error;
