import { sections } from '@/constants';
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      className="bg-stone-200 px-4 py-10 sm:px-6 sm:py-16"
      id={sections.contact}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-7">
        <div className="space-y-6 md:col-span-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.5757990844013!2d18.630735148270524!3d49.850427671483835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ab694586f347%3A0x97ae83696bbc1067!2sKarczma%20Zamkowa!5e0!3m2!1spl!2spl!4v1753307142401!5m2!1spl!2spl"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="w-full rounded shadow"
          ></iframe>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-stone-900">
              Czynne:
            </h3>
            <ul className="text-gray-700">
              <li className="flex max-w-[12em] justify-between">
                <span>Pon – Pt:</span> <span>12:00 – 22:00</span>
              </li>
              <li className="flex max-w-[12em] justify-between">
                <span>Sobota:</span> <span>10:00 – 23:00</span>
              </li>
              <li className="flex max-w-[12em] justify-between">
                <span>Niedziela:</span> <span>10:00 – 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
