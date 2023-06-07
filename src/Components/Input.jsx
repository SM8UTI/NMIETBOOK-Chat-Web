import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineAttachFile } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";

const Input = () => {
  return (
    <div className="Input p-4 w-full shadow-[0px_-1px_3px_0px_#00000024]">
      <form className="w-full flex flex-row items-center gap-2">
        <div className="w-full flex text-base items-center gap-2">
          <AiOutlineMessage className="text-xl text-[#06100bc2] shrink-0" />
          <input
            type="text"
            placeholder="Message..."
            className="w-full outline-none border-none text-black placeholder:text-[#06100bc2]"
          />
        </div>
        <div>
          <label
            htmlFor="file"
            className="text-xl cursor-pointer  text-[#06100bc2]"
          >
            <MdOutlineAttachFile />
          </label>
          <input type="file" id="file" className="hidden" />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-md transition-all ml-2"
        >
          <RiSendPlane2Fill />
        </button>
      </form>
    </div>
  );
};

export default Input;
