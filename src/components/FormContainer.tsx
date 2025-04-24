import { useTranslation } from 'react-i18next';
import ContactMeForm from './forms/ContactMe';

const FormContainer = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-section" className="flex flex-col items-center my-32 gap-24">
      <div className="w-[85%] sm:w-[80%] md:w-[600px]">
        <header className="col-center gap-5 dark:text-white text-black">
          <h2 className="text-3xl sm:text-4xl font-semibold">{t('contact-form.title')}</h2>
          <p className="lg:text-base">{t('contact-form.description')}</p>
        </header>
      </div>

      <ContactMeForm />
    </section>
  );
};

export default FormContainer;
