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
    <div className="fixed right-4 bottom-4 left-4 z-50 max-w-md rounded-lg bg-gray-800 p-4 text-white shadow-lg md:right-auto md:bottom-8 md:left-8">
      <p className="text-sm">
        This website uses cookies to enhance the user experience. By using the
        site, you agree to our use of cookies.
      </p>
      <div className="mt-2 flex justify-end">
        <button
          onClick={acceptCookies}
          className="rounded bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
