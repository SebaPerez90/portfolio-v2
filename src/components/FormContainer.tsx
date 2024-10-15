import { useTranslation } from 'react-i18next';
import ContactMeForm from './forms/ContactMe';
import contact from '@/assets/svg/contact.svg';


const FormContainer = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-section" className="w-full col-center bg-white relative dark:bg-dark-neutral lg:dark:bg-dark-deep">
      <div className="grid grid-cols-2 h-screen">

        <div className="z-40 h-full col-center gap-16 bg-gradient-to-t from-pink-500 dark:from-[#ff9000] dark:to-[#55350c] to-purple-900 w-full">
          <div className="mx-[10%] col-center gap-5">
            <h2 className="text-5xl text-white font-bold">
              {t('contact-form.slogan1')}{" "}
              {t('contact-form.slogan2')}{" "}
              {t('contact-form.slogan3')}.
            </h2>
            <p className="text-lg lg:text-base text-slate-100">{t('contact-form.description')}</p>
          </div>
          <figure className="w-[24em] h-auto">
            <img
              loading="lazy"
              src={contact}
              width={400}
              height={400}
              alt="imagen de sesión de contacto"
              className="size-full object-cover"
            />
          </figure>
        </div>

        <ContactMeForm />
      </div>
    </section>
  );
};

export default FormContainer;
