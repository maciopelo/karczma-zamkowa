import { getTranslations } from 'next-intl/server';

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: `Karczma Zamkowa - ${t('privacyPolicy')}`,
  };
};

const sections = [
  {
    title: 'privacySection1Title',
    description: 'privacySection1Description',
  },
  {
    title: 'privacySection2Title',
    description: 'privacySection2Description',
  },
  {
    title: 'privacySection3Title',
    description: 'privacySection3Description',
  },
  {
    title: 'privacySection4Title',
    description: 'privacySection4Description',
  },
  {
    title: 'privacySection5Title',
    description: 'privacySection5Description',
  },
  {
    title: 'privacySection6Title',
    description: 'privacySection6Description',
  },
  {
    title: 'privacySection7Title',
    description: 'privacySection7Description',
  },
  {
    title: 'privacySection8Title',
    description: 'privacySection8Description',
  },
];

const PrivacyPolicy = async () => {
  const t = await getTranslations();
  return (
    <div className="bg-stone-200 text-stone-900">
      <div className="flex min-h-screen flex-col items-center justify-center bg-stone-200 px-4 pt-24 pb-4 md:pt-30">
        <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
          {t('privacyPolicy')}
        </h1>
        <p className="mb-4 text-center text-sm text-stone-500">01.08.2025</p>

        <section className="space-y-8 text-justify text-lg leading-relaxed">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                {t(section.title)}
              </h2>
              <p className="text-sm sm:text-base">{t(section.description)}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
