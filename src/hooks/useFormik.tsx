import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useState } from 'react';
import type { AnySchema } from 'yup';

const formspreeURL: string = import.meta.env.VITE_FORMSPREE_URL;

export const useDynamicFormik = (fields: string[], schema: AnySchema) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const initialValues = fields.reduce((values: { [key: string]: string }, field) => {
    values[field] = '';
    return values;
  }, {});

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      const sendForm = async () => {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch(`${formspreeURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error('Hubo un error al enviar el mensaje');
        return response.json();
      };

      toast
        .promise(
          sendForm(),
          {
            loading: t('contactMe.toaster.loading'),
            success: t('contactMe.toaster.success'),
            error: t('contactMe.toaster.error'),
          },
          { style: { fontWeight: 600 } },
        )
        .then(() => {
          formik.resetForm();
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    },
  });

  return { formik, loading };
};
