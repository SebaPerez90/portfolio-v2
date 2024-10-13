import ContactMeForm from './forms/ContactMe';
import contact from '@/assets/svg/contact.svg';

const FormContainer = () => {
  return (
    <section className="w-full col-center bg-white py-12">
      <div className="flex-col xl:flex-row flex justify-center items-center gap-0 h-auto xl:h-[35em] xl:w-auto shadow-2xl rounded-lg overflow-hidden">

        <div className="h-full col-center justify-around gap-12 px-7 py-10 bg-gradient-to-t from-pink-500 to-purple-900 w-[45em]">
          <div className="ml-6 flex flex-col gap-4">
            <h2 className="text-4xl text-white font-bold">
              Todo proyecto
              <br />
              Comienza con un
              <br /> plan.
            </h2>
            <p className="text-slate-100">
              Enviame un mensaje y en la brevedad voy comunicarme contigo para descubrir como podemos colaborar juntos.
            </p>
          </div>
          <figure className="w-[18em] h-[18em]">
            <img
              loading="lazy"
              src={contact}
              width={400}
              height={400}
              alt="imagen de sesión de contacto"
              className="size-auto object-cover"
            />
          </figure>
        </div>

        <ContactMeForm />
      </div>
    </section>
  );
};

export default FormContainer;
