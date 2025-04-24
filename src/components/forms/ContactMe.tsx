import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useDynamicFormik } from '@/hooks/useFormik';
import { ContactSchema } from '@/schemas/contact.schema';
import type { LocaleProjectRequestForm } from '@/types';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineMailOpen } from 'react-icons/hi';

const ContactMeForm = () => {
  const { t } = useTranslation();
  const { formik, loading } = useDynamicFormik(['name', 'email', 'message'], ContactSchema);
  type FormFieldName = keyof typeof formik.values;

  const contactFormData = t('contact-form.inputs', {
    returnObjects: true,
  });

  return (
    <motion.form
      transition={{ duration: 0.4, delay: 0.3 }}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      id="contact-form"
      name="contact-form"
      onSubmit={formik.handleSubmit}
      className="z-40 col-center bg-white dark:bg-dark-deep md:dark:bg-dark-neutral backdrop-blur w-full h-full gap-8 md:pt-0 md:pb-0 pt-8 pb-24"
    >
      {/* <h2 className="text-3xl font-bold text-custom-black dark:text-slate-50 flex items-end gap-2">
        {t('contact-form.subtitle')}
        <span className="text-purple-500 dark:text-custom-orange">
          <HiOutlineMailOpen size={40} />
        </span>
      </h2> */}
      {(contactFormData as Array<LocaleProjectRequestForm>).map((item) => (
        <Label
          key={item.id}
          className="flex flex-col text-dark-soft dark:text-slate-50 font-semibold w-[80%] xl:w-[70%]"
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
            className="bg-white text-sm py-6 sm:py-4 mt-1 dark:bg-dark-neutral border border-purple-400 focus:border-purple-500 placeholder:font-normal placeholder:opacity-80 placeholder:italic placeholder-gray-500 dark:border-custom-orange/70 dark:focus:border-dark-deep"
          />
          {formik.touched[item.name as FormFieldName] && (
            <span className="text-red-600 text-base md:text-xs">{formik.errors[item.name as FormFieldName]}</span>
          )}
        </Label>
      ))}
      <Label htmlFor="message" className="flex flex-col text-dark-soft dark:text-slate-50 font-semibold w-[80%] xl:w-[70%]">
        {t('contact-form.textarea.label')}
        <Textarea
          id="message"
          placeholder={t('contact-form.textarea.placeholder')}
          onChange={formik.handleChange}
          value={formik.values.message}
          className="bg-white text-sm resize-none mt-1 dark:bg-dark-neutral border border-purple-400 focus:border-purple-500 dark:border-custom-orange/70 dark:focus:border-dark-deep placeholder:font-normal placeholder:opacity-80 placeholder:italic placeholder-gray-500 min-h-[12em]"
        />
      </Label>

      <div className="w-[80%] xl:w-[70%] row-center">
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
    </motion.form>
  );
};

export default ContactMeForm;
