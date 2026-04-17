export type FooterItem = {
  label: string;
  href?: string;
};

export type FooterColumn = {
  title: string;
  items: FooterItem[];
};

export type StoryItem = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  visualClassName: string;
  reverse?: boolean;
};
