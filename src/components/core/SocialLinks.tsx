import { stagger, useAnimate, useInView, motion } from 'framer-motion'
import { useEffect } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'

const socialLinks = [
  {
    label: 'Linkedin',
    path: 'https://www.linkedin.com/in/sebaperez90/',
    icon: <FaLinkedinIn size={15} />,
    styles: 'bg-[#0A66C2]',
  },
  {
    label: 'Github',
    path: 'https://github.com/SebaPerez90',
    icon: <FiGithub size={15} />,
    styles: 'bg-[#000000]',
  },
  {
    label: 'Twitter',
    path: 'https://x.com/_SebaPerez_',
    icon: <FaXTwitter size={15} />,
    styles: 'bg-[#000000]',
  },
]

const SocialLinks = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'li',
        { opacity: 1, y: 0 },
        { delay: stagger(0.1), duration: 0.4 }
      )
    }
  }, [animate, isInView, scope])

  return (
    <nav className='mt-5'>
      <ul
        ref={scope}
        className='row-center gap-1'>
        {socialLinks.map((link, index) => (
          <motion.li
            transition={{ delay: 2 }}
            initial={{ opacity: 0, y: 100 }}
            key={index}
            className='group'>
            <a
              href={link.path}
              aria-label='link de red social'
              rel='noopener noreferrer'
              target='_blank'
              className='col-center gap-2'>
              <span
                className={`${link.styles} hover:duration-150 duration-150 hover:opacity-80 p-3 text-white rounded-full`}>
                {link.icon}
              </span>
              <span className='text-xs font-medium opacity-0 group-hover:opacity-100 row-center gap-1 transition-opacity duration-150'>
                {link.label}
                <HiOutlineExternalLink size={10} />
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialLinks
