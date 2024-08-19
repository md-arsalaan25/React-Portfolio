import logo from "../assets/iitismlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function IconButton({ onClick, icon: Icon, color }) {
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
      <Icon size={24} style={{ color: color }} />
    </button>
  );
}

const Navbar = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/arsalaan-mohammed-52b831276/', '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/md-arsalaan25', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <IconButton onClick={handleLinkedInClick} icon={FaLinkedin} />
        <IconButton onClick={handleGithubClick} icon={FaGithub}/>
      </div>
    </nav>
  );
};

export default Navbar;
