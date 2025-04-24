import contact from '@/assets/svg/contact.svg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactMeForm from './forms/ContactMe';

const FormContainer = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-section" className="md:grid grid-cols-2 h-auto md:h-screen">
      <div className="z-40 h-full col-center gap-16 w-full py-14 md:py-0">
        <div className="mx-[10%] col-center gap-5">
          <h2 className="text-3xl font-bold">{t('contact-form.title')}</h2>
          <p className="lg:text-base">{t('contact-form.description')}</p>
        </div>
        {/* <figure className="w-[24em] h-auto">
          <motion.img
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            loading="lazy"
            src={contact}
            width={400}
            height={400}
            alt="imagen de sesión de contacto"
            className="size-full object-cover"
          />
        </figure> */}
      </div>

      <ContactMeForm />
    </section>
  );
};

export default FormContainer;
