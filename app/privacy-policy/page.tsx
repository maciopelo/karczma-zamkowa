export const metadata = {
  title: "Polityka Prywatności",
  description: "Polityka prywatności strony internetowej.",
};

const sections = [
  {
    title: "1. Administrator danych",
    description: `Administratorem Twoich danych osobowych jest [Imię i nazwisko / nazwa firmy], z siedzibą przy [adres], NIP: [numer NIP]. Kontakt e-mail: [adres e-mail].`,
  },
  {
    title: "2. Cele i podstawy przetwarzania",
    description: `Twoje dane osobowe mogą być przetwarzane w celu: odpowiedzi na zapytania, realizacji usług, prowadzenia księgowości, oraz – za Twoją zgodą – w celach marketingowych.`,
  },
  {
    title: "3. Odbiorcy danych",
    description: `Dane mogą być przekazywane podmiotom wspierającym nas w zakresie hostingu, księgowości oraz obsługi formularzy.`,
  },
  {
    title: "4. Okres przechowywania danych",
    description: `Dane będą przechowywane przez okres niezbędny do realizacji celu lub do momentu cofnięcia zgody.`,
  },
  {
    title: "5. Twoje prawa",
    description: `Masz prawo do dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu, przenoszenia danych oraz wniesienia skargi do UODO.`,
  },
  {
    title: "6. Pliki cookies",
    description: `Strona korzysta z plików cookies w celu poprawy działania, statystyk i zapamiętania Twoich ustawień. Możesz zarządzać cookies w przeglądarce.`,
  },
  {
    title: "7. Dobrowolność podania danych",
    description: `Podanie danych jest dobrowolne, ale niezbędne do skorzystania z niektórych funkcji strony lub zamówienia usługi.`,
  },
  {
    title: "8. Zmiany w polityce prywatności",
    description: `Zastrzegamy sobie prawo do zmian. Aktualna wersja będzie dostępna na tej stronie.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className=" bg-orange-100 text-gray-700">
      <div className="md:pt-30 pt-24 pb-4 px-4 bg-orange-100 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Polityka Prywatności
        </h1>
        <p className="mb-4 text-sm text-center text-gray-500">
          Data ostatniej aktualizacji: 18.04.2025
        </p>

        <section className="space-y-8 text-justify text-lg leading-relaxed">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
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
