import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';
import type { LocaleProjectRequestForm } from '@/types';
import { ContactSchema } from '@/schemas/contact.schema';
import { useDynamicFormik } from '@/hooks/useFormik';

const ContactMeForm = () => {
  const { t } = useTranslation();
  const { formik, loading } = useDynamicFormik(['name', 'email', 'message'], ContactSchema);
  type FormFieldName = keyof typeof formik.values;

  const contactFormData = t('contact-form.inputs', {
    returnObjects: true,
  });

  return (
    <form
      id="contact-form"
      name="contact-form"
      onSubmit={formik.handleSubmit}
      className="z-40 col-center  bg-white dark:bg-dark-deep md:dark:bg-dark-neutral backdrop-blur w-full h-full gap-5 xl:max-w-lg p-10"
    >
      <h2 className="text-xl font-bold text-custom-black dark:text-slate-50">{t('contact-form.subtitle')}</h2>
      {(contactFormData as Array<LocaleProjectRequestForm>).map((item) => (
        <Label
          key={item.id}
          className="flex flex-col text-dark-soft dark:text-slate-50 font-semibold text-base sm:text-sm gap-1 w-[90%] relative mt-2"
          htmlFor={item.name}
        >
          {item.label}
          <Input
            id={item.id}
            autoComplete="on"
            type={item.type}
            name={item.name}
            style={item.name ? { textTransform: 'capitalize' } : {}}
            placeholder={item.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[item.name as FormFieldName]}
            className="bg-white text-sm py-6 sm:py-4 dark:bg-dark-neutral border border-purple-400 focus:border-purple-500 placeholder:font-normal placeholder:opacity-80 placeholder:italic placeholder-gray-500 dark:border-custom-orange/70 dark:focus:border-dark-deep"
          />
          {formik.touched[item.name as FormFieldName] && (
            <span className="text-red-600 text-base md:text-xs h-4">
              {formik.errors[item.name as FormFieldName]}
            </span>
          )}
        </Label>
      ))}
      <Label
        htmlFor="message"
        className="flex flex-col text-dark-soft dark:text-slate-50 font-semibold gap-1 text-base sm:text-sm relative w-[90%] mt-2"
      >
        {t('contact-form.textarea.label')}
        <Textarea
          id="message"
          placeholder={t('contact-form.textarea.placeholder')}
          onChange={formik.handleChange}
          value={formik.values.message}
          className="bg-white text-sm resize-none dark:bg-dark-neutral border border-purple-400 focus:border-purple-500 dark:border-custom-orange/70 dark:focus:border-dark-deep placeholder:font-normal placeholder:opacity-80 placeholder:italic placeholder-gray-500 min-h-[12em]"
        />
      </Label>

      <div className="w-[90%] row-center">
        <Button type="button" variant={'secondary'} size={'lg'} onClick={() => formik.resetForm()} className="w-full ">
          {t('contact-form.buttonLabel.cancel')}
        </Button>
        <Button
          type="submit"
          variant={'primary'}
          size={'lg'}
          loading={loading ? true : false}
          className={`${loading && 'text-transparent'} w-full`}
        >
          {t('contact-form.buttonLabel.submit')}
        </Button>
      </div>
    </form>
  );
};

export default ContactMeForm;
