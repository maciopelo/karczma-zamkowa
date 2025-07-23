'use client';
import { useState } from 'react';
import AlertDialog from './AlertDialog';
import { LoaderCircle, Check } from 'lucide-react';

export type FormData = {
  name: string;
  email: string;
  message: string;
  carbonCopy: boolean;
};

const validateEmail = (value: string): boolean => {
  const pattern =
    /^([a-zA-Z0-9_\-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return pattern.test(value);
};

const ContactForm = () => {
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    carbonCopy: false,
  });

  const showDialog = (message: string) => {
    setIsDialogOpen(true);
    setAlertMessage(message);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIsError('');
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setIsError('Prosze wypełnić wszystkie pola formularza.');
      return;
    }
    if (!validateEmail(email)) {
      setIsError('Proszę podać poprawny adres e-mail.');
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        if (localStorage.getItem('debug') === 'true') {
          const error = await res.json();
          console.error('Error response:', error);
        }
        throw new Error(res.statusText);
      }

      showDialog('Wiadomość została wysłana.');
    } catch (error) {
      console.error('Error sending email:', error);
      showDialog(
        'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
      );
    } finally {
      setFormData({ name: '', email: '', message: '', carbonCopy: false });
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-stone-900 sm:text-4xl">
        Skontaktuj się z nami!
      </h2>
      <p className="mb-4 text-base text-gray-700 sm:text-lg">
        Masz pytania? Chcesz zarezerwować stolik? Napisz do nas lub zadzwoń!
        Chętnie pomożemy.{' '}
        <a
          href="tel:+48123456789"
          className="font-semibold text-black underline hover:text-gray-400"
        >
          +48 123 456 789
        </a>
        .
      </p>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Twoje imię i nazwisko"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-500 outline-stone-950"
        />
        <input
          type="email"
          placeholder="Twój email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-500 outline-stone-950"
        />
        <textarea
          placeholder="Twoja wiadomość"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="h-32 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-500 outline-stone-950"
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            id="carbonCopy"
            name="carbonCopy"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                carbonCopy: e.target.checked,
              }))
            }
            checked={formData.carbonCopy}
            className="peer hidden"
          />

          <div className="mr-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-gray-300 transition peer-checked:border-stone-900 peer-checked:bg-stone-900">
            {formData.carbonCopy && <Check className="text-red h-4 w-4" />}
          </div>

          <label
            htmlFor="carbonCopy"
            className="cursor-pointer text-sm text-gray-700 select-none"
          >
            Wyślij kopię do mnie
          </label>
        </div>

        {isError && <p className="text-sm text-red-500">{isError}</p>}

        <button
          type="submit"
          className="flex w-[100px] cursor-pointer items-center justify-center rounded bg-stone-950 px-6 py-2 hover:bg-stone-900"
        >
          {isLoading ? <LoaderCircle className="animate-spin" /> : 'Wyślij'}
        </button>
      </form>

      {isDialogOpen && (
        <AlertDialog
          message={alertMessage}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default ContactForm;
