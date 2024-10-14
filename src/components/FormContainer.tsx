import ContactMeForm from './forms/ContactMe';
import contact from '@/assets/svg/contact.svg';

const FormContainer = () => {
  return (
    <section className="w-full col-center bg-white xl:pt-20">
      <div className="flex-col md:flex-row flex justify-center items-center gap-0 h-auto xl:h-[35em] xl:shadow-2xl xl:rounded-lg overflow-hidden border-none xl:border">

        <div className="h-full col-center justify-around gap-12 px-7 py-10 bg-gradient-to-t from-pink-500 to-purple-900 w-full md:w-[70%] xl:w-[45em]">
          <div className="ml-6 flex flex-col gap-4">
            <h2 className="text-5xl md:text-2xl lg:text-4xl text-white font-bold">
              Todo proyecto
              <br />
              Comienza con un
              <br /> plan.
            </h2>
            <p className="text-xl md:text-sm lg:text-base text-slate-100">
              Enviame un mensaje y en la brevedad voy comunicarme contigo para descubrir como podemos colaborar juntos.
            </p>
          </div>
          <figure className="lg:size-[18em] md:size-[14em] size-[22em]">
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
