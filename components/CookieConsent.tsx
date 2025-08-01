'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed right-2 bottom-2 left-2 z-50 max-w-md rounded-lg bg-stone-950/85 p-4 text-stone-200 shadow-lg md:right-auto md:bottom-8 md:left-8">
      <p className="text-sm">
        Ta strona uzywa plików cookie, aby poprawić komfort użytkowania.
        Korzystając z tej strony, zgadzasz się na używanie plików cookie.
      </p>
      <div className="mt-2 flex justify-end">
        <button
          onClick={acceptCookies}
          className="cursor-pointer rounded bg-stone-200 px-4 py-1 text-sm text-stone-700 hover:bg-stone-700 hover:text-stone-200"
        >
          Akceptuj
        </button>
      </div>
    </div>
  );
}
