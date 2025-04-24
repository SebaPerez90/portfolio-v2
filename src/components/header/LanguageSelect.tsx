import englishIcon from '@/assets/english-icon.png';
import spanishIcon from '@/assets/spanish-icon.png';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IoMdInformationCircle } from 'react-icons/io';

export function LanguageSelect() {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    i18n.changeLanguage(currentLang);
    localStorage.setItem('lang', currentLang);
  }, [currentLang, i18n]);

  const toggleLanguage = (value: string) => {
    setCurrentLang(value);
    toast.custom(
      <p className="py-3 px-5 bg-white shadow-lg dark:bg-dark-soft dark:text-white text-custom-black font-medium rounded-md flex items-center mt-4 gap-2">
        <IoMdInformationCircle size={20} color="#6897fc" />
        {t('toaster.preferences.lang')}
      </p>,
    );
  };

  return (
    <Select value={currentLang} onValueChange={(value) => toggleLanguage(value)}>
      <SelectTrigger className="min-w-max overflow-visible text-purple-500 border border-purple-500 dark:border-white dark:text-white font-medium dark:bg-dark-soft">
        <div className="row-center gap-1">
          <span className="sm:text-sm">{currentLang === 'en' ? 'English' : 'Español'}</span>
          <img width={20} height={20} src={currentLang === 'en' ? englishIcon : spanishIcon} alt="icono de idioma" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="es" className="hover:bg-purple-400">
            <span className="text-sm font-medium">Español</span>
          </SelectItem>
          <SelectItem value="en" className="hover:bg-purple-400">
            <span className="text-sm font-medium">English</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
