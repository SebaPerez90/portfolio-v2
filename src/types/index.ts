export type LocaleData = {
  id: number | string;
  title: string;
  strong?: string;
  description: string;
};

export type LocaleNavLinks = {
  id: number;
  label: string;
  ariaLabel: string;
  href: string;
};

export type LocaleProjectRequestForm = {
  type: string;
  name: string;
  id: string;
  label: string;
  placeholder: string;
};
