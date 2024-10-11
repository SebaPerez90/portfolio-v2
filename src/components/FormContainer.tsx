import ContactMeForm from './forms/ContactMe';
import contact from '@/assets/svg/contact.svg';

const FormContainer = () => {
  return (
    <section className="w-full col-center">
      <div className="row-center gap-0 h-[35em] shadow-purple-500/50 shadow-2xl rounded-xl overflow-hidden">
        <div className="h-full p-7 bg-gradient-to-tr from-pink-600 to-purple-600 w-[40em]">
          {/* <img
            loading="lazy"
            src={contact}
            width={400}
            height={400}
            alt="imagen de sesión de contacto"
            className="size-auto object-cover"
          /> */}
        </div>
        <ContactMeForm />
      </div>
    </section>
  );
};

export default FormContainer;
