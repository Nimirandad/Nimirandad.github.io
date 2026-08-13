import { en } from './en';
import { es } from './es';
import { languages, defaultLang, type Lang, type SiteContent } from './types';
import { withBase } from '../lib/paths';
import {
  email,
  phone,
  phoneHref,
  linkedin,
  linkedinHandle,
  github,
  githubHandle,
} from '../data/contact';
import type { Ui } from './types';

export { languages, defaultLang };
export type { Lang, SiteContent };

const content: Record<Lang, SiteContent> = { en, es };

export function getContent(lang: Lang): SiteContent {
  return content[lang];
}

export function routeFor(lang: Lang): string {
  return lang === defaultLang ? withBase('/') : withBase(`${lang}/`);
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export interface SocialLink {
  key: 'email' | 'linkedin' | 'phone' | 'github';
  label: string;
  display: string;
  href: string;
  icon: 'email' | 'linkedin' | 'phone' | 'github';
  external: boolean;
}

export function getSocials(ui: Ui): SocialLink[] {
  return [
    {
      key: 'email',
      label: ui.contact.labels.email,
      display: email,
      href: `mailto:${email}`,
      icon: 'email',
      external: false,
    },
    {
      key: 'linkedin',
      label: ui.contact.labels.linkedin,
      display: linkedinHandle,
      href: linkedin,
      icon: 'linkedin',
      external: true,
    },
    {
      key: 'github',
      label: ui.contact.labels.github,
      display: githubHandle,
      href: github,
      icon: 'github',
      external: true,
    },
    {
      key: 'phone',
      label: ui.contact.labels.phone,
      display: phone,
      href: phoneHref,
      icon: 'phone',
      external: false,
    },
  ];
}
