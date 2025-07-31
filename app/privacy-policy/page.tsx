export const metadata = {
  title: 'Polityka Prywatności',
  description: 'Polityka prywatności strony internetowej.',
};

const sections = [
  {
    title: '1. Administrator danych',
    description: `Administratorem Twoich danych osobowych jest Nowak Usługi Gastronomiczne Sp. z o. o. z siedzibą przy ul. Staropolskiej 5, 43-410 Kończyce Małe, NIP: 5482761213.`,
  },
  {
    title: '2. Cele i podstawy przetwarzania',
    description: `Twoje dane osobowe mogą być przetwarzane w celu: odpowiedzi na zapytania, realizacji usług, prowadzenia księgowości, oraz – za Twoją zgodą – w celach marketingowych.`,
  },
  {
    title: '3. Odbiorcy danych',
    description: `Dane mogą być przekazywane podmiotom wspierającym nas w zakresie hostingu, księgowości oraz obsługi formularzy.`,
  },
  {
    title: '4. Okres przechowywania danych',
    description: `Dane będą przechowywane przez okres niezbędny do realizacji celu lub do momentu cofnięcia zgody.`,
  },
  {
    title: '5. Twoje prawa',
    description: `Masz prawo do dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu, przenoszenia danych oraz wniesienia skargi do UODO.`,
  },
  {
    title: '6. Pliki cookies',
    description: `Strona korzysta z plików cookies w celu poprawy działania, statystyk i zapamiętania Twoich ustawień. Możesz zarządzać cookies w przeglądarce.`,
  },
  {
    title: '7. Dobrowolność podania danych',
    description: `Podanie danych jest dobrowolne, ale niezbędne do skorzystania z niektórych funkcji strony lub zamówienia usługi.`,
  },
  {
    title: '8. Zmiany w polityce prywatności',
    description: `Zastrzegamy sobie prawo do zmian. Aktualna wersja będzie dostępna na tej stronie.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-stone-200 text-stone-900">
      <div className="flex min-h-screen flex-col items-center justify-center bg-stone-200 px-4 pt-24 pb-4 md:pt-30">
        <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
          Polityka Prywatności
        </h1>
        <p className="mb-4 text-center text-sm text-stone-500">
          Data ostatniej aktualizacji: 01.08.2025
        </p>

        <section className="space-y-8 text-justify text-lg leading-relaxed">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base">{section.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
