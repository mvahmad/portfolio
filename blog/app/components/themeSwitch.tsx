'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon } from './moonIcone';
import { SunIcon } from './sunIcone';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration mismatch

  const isDark = theme === 'dark';

  return (
    <label
      className={`
        relative flex items-center justify-center cursor-pointer
        w-[2.5rem] h-[2.5rem] rounded-md shadow-md
        bg-slate-200 dark:bg-slate-800
        transition-all duration-500
        hover:scale-110 hover:shadow-lg
      `}
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        className="hidden peer"
      />
      
      <span
      >
        {isDark ? (
          <SunIcon className="w-5 h-5 text-slate-700 transition-transform duration-500 scale-110" />
        ) : (
          <MoonIcon className="w-5 h-5 text-slate-700 transition-transform duration-500 scale-100" />
        )}
      </span>
    </label>
  );
}
