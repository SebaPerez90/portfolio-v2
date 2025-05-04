import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import avatar from "@/assets/avatar-profile.webp";

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
    label: "Freelance web",
    path: "https://seba-perez.vercel.app/",
    styles: "bg-[#000000000]",
  },
];

const SocialLinks = ({ subtitle }: { subtitle: string }) => {
  return (
    <nav className="flex flex-col items-center gap-8">
      <h2 className="text-xl font-medium text-custom-black dark:text-white hidden md:block">
        {subtitle}
      </h2>
      <ul className="flex items-center gap-8">
        {socialLinks.map((link, index) => (
          <li key={index} className="group">
            <a
              href={link.path}
              aria-label="link de red social"
              rel="noopener noreferrer"
              target="_blank"
              className="col-center relative"
            >
              {link.label === "Freelance web" ? (
                <figure className="rounded-full overflow-hidden size-[2.5em] relative right-4a">
                  <img
                    src={avatar}
                    loading="lazy"
                    alt="avatar-profile-image"
                    className="size-full object-cover"
                  />
                </figure>
              ) : (
                <span
                  className={`${link.styles} hover:duration-150 duration-150 hover:opacity-80 p-3   text-white rounded-full`}
                >
                  {link.icon}
                </span>
              )}
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 row-center gap-1 transition-opacity duration-150 text-custom-black dark:text-white absolute top-12 translate-x-[10%] w-max">
                {link.label}
                <HiOutlineExternalLink size={10} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
