import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeButton from './ThemeButton'
import { LanguageSelect } from '@/components/header/LanguageSelect'
import HamburguerButton from '@/components/header/HamburguerButton'
// import NavegationLinks from './NavegationLinks'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HamburguerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id='modal'
            transition={{
              type: 'spring',
              bounce: 0.5,
              staggerChildren: 0.4,
            }}
            className='bg-black/10 backdrop-blur-lg w-full fixed left-0 top-0 h-screen flex justify-end items-start shadow-xl'>
            <motion.div
              initial={{ x: 100, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, width: 0 }}
              className='col-center gap-14 w-[20em] h-[28em] bg-white dark:bg-dark-soft rounded-[0_0_0_10px]'>
              {/* <NavegationLinks
                disappear={'mt-8'}
                flexDirection={'col-center'}
              /> */}
              <div className='col-center'>
                <LanguageSelect />
                <ThemeButton />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
