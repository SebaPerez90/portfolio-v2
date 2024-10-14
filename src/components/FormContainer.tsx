import { useTranslation } from 'react-i18next';
import ContactMeForm from './forms/ContactMe';
import contact from '@/assets/svg/contact.svg';

const FormContainer = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-section" className="w-full col-center bg-white xl:pt-20 relative ">
      {/* custom shape */}
      <div className="opacity-0 xl:opacity-100 custom-shape-divider-top-1728880923">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
          <title>custom shape</title>
        </svg>
      </div>
      {/* custom shape */}

      <div className="flex-col md:flex-row flex justify-center items-center gap-0 h-auto xl:h-[35em] xl:shadow-xl xl:rounded-lg overflow-hidden border-none xl:border">
        <div className="z-40 h-full col-center justify-around gap-12 px-7 py-10 bg-gradient-to-t from-pink-500 dark:from-[#ff9000] dark:to-[#55350c] to-purple-900 w-full md:w-[70%] xl:w-[45em]">
          <div className="ml-6 flex flex-col gap-4">
            <h2 className="text-5xl md:text-2xl lg:text-4xl text-white font-bold">
              {t('contact-form.slogan1')}
              <br />
              {t('contact-form.slogan2')}
              <br /> {t('contact-form.slogan3')}
            </h2>
            <p className="text-2xl md:text-sm lg:text-base text-slate-100">{t('contact-form.description')}</p>
          </div>
          <figure className="md:w-[23em] w-[25em] h-auto">
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
