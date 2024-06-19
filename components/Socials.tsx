import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='flex items-center justify-center '>
      {" "}
      <div className='grid sm:grid-cols-2 gap-3 p-3'>
        <button>
          <BsTwitterX size={20} />
        </button>
        <button>
          <FaGithub size={20} />
        </button>
      </div>
    </div>
  );
};

export default Socials;
