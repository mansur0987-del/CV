'use client';

import { useLanguage } from '@/lib/language-context';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      aria-label={language === 'en' ? 'Переключить на русский' : 'Switch to English'}
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'RU' : 'EN'}</span>
    </button>
  );
}
