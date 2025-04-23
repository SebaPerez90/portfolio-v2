import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import avatar_image from "@/assets/avatar-profile.webp";

const socialLinks = [
  {
    label: "Linkedin",
    path: "https://www.linkedin.com/in/sebaperez90/",
    icon: <FaLinkedinIn size={15} />,
    styles: "bg-[#0A66C2]",
  },
  {
    label: "Github",
    path: "https://github.com/SebaPerez90",
    icon: <FiGithub size={15} />,
    styles: "bg-[#000000]",
  },
  {
    label: "Twitter",
    path: "https://x.com/_SebaPerez_",
    icon: <FaXTwitter size={15} />,
    styles: "bg-[#000000]",
  },
];

const SocialLinks = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className="row-center">
      <figure className="w-28 h-28 rounded-full overflow-hidden">
        <img
          src={avatar_image}
          loading="lazy"
          alt="avatar_image"
          className="size-full object-cover"
        />
      </figure>
      <nav className="col-center  mt-6">
        <h2 className="text-2xl font-bold text-custom-black dark:text-white text-center">
          {subtitle}
        </h2>
        <ul className="row-center gap-1 mt-6a">
          {socialLinks.map((link, index) => (
            <li key={index} className="group">
              <a
                href={link.path}
                aria-label="link de red social"
                rel="noopener noreferrer"
                target="_blank"
                className="col-center gap-2"
              >
                <span
                  className={`${link.styles} hover:duration-150 duration-150 hover:opacity-80 p-3 text-white rounded-full`}
                >
                  {link.icon}
                </span>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 row-center gap-1 transition-opacity duration-150 text-custom-black dark:text-white">
                  {link.label}
                  <HiOutlineExternalLink size={10} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SocialLinks;
