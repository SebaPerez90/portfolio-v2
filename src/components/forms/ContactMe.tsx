import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useDynamicFormik } from '@/hooks/useFormik';
import { ContactSchema } from '@/schemas/contact.schema';
import type { LocaleProjectRequestForm } from '@/types';
import { useTranslation } from 'react-i18next';

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
      className="z-40 flex flex-col items-center bg-inherit gap-8 w-[80%] md:w-[500px]"
    >
      {(contactFormData as Array<LocaleProjectRequestForm>).map((item) => (
        <Label key={item.id} className="grid gap-1 w-full text-black dark:text-slate-50 font-semibold" htmlFor={item.name}>
          <span className="text-base">{item.label}</span>
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
            className="placeholder:opacity-70 placeholder:font-light font-normal focus:border-purple-300 dark:border-dark-soft dark:focus:border-custom-orange/60"
          />
          {formik.touched[item.name as FormFieldName] && (
            <span className="text-red-500 text-base font-normal mt-1 ml-1">{formik.errors[item.name as FormFieldName]}</span>
          )}
        </Label>
      ))}
      <Label htmlFor="message" className="grid gap-1 w-full text-black dark:text-slate-50 font-semibold">
        <span className="text-base">{t('contact-form.textarea.label')}</span>
        <Textarea
          id="message"
          placeholder={t('contact-form.textarea.placeholder')}
          onChange={formik.handleChange}
          value={formik.values.message}
          className="placeholder:opacity-70 resize-none placeholder:font-light font-normal min-h-[12em] focus:border-purple-300 dark:border-dark-soft dark:focus:border-custom-orange/60"
        />
      </Label>

      <div className="w-full grid grid-cols-2 gap-5">
        <Button type="button" variant={'outline'} size={'lg'} onClick={() => formik.resetForm()} className="w-full">
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
