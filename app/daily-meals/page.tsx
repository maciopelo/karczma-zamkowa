const meals = [
  {
    day: 'PONIEDZIAŁEK',
    date: '21.07.25',
    dish: 'Tortilla z mięsem mielonym i warzywami / kompot',
  },
  {
    day: 'WTOREK',
    date: '22.07.25',
    dish: 'Gołąbek w sosie pomidorowym / ziemniaki / kompot',
  },
  {
    day: 'ŚRODA',
    date: '23.07.25',
    dish: 'Schab faszerowany warzywami / frytki / surówka / kompot',
  },
  {
    day: 'CZWARTEK',
    date: '24.07.25',
    dish: 'Klopsiki drobiowe w sosie / kluski / surówka / kompot',
  },
  {
    day: 'PIĄTEK',
    date: '25.07.25',
    dish: 'Naleśniki z brokułem i serem / kompot',
  },
];

const Menu = () => {
  return (
    <div className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-start bg-stone-200 px-4 pt-24 md:pt-30">
      <div className="md:max-w-4/5 lg:max-w-1/2">
        <div className="pb-4 text-stone-700">
          <h2 className="py-3 text-xl font-bold uppercase md:text-2xl">
            Dania dnia
          </h2>
          <div className="mb-4 h-1 w-40 bg-stone-700" />
          <ul>
            {meals.map((meal) => (
              <li key={meal.day} className="relative mb-8 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg uppercase md:text-xl">
                    <span className="font-medium">{meal.day} </span>
                    {meal.date}
                  </h3>
                  <span className="block md:hidden"></span>
                </div>

                <p className="md:text-md text-base">{meal.dish}</p>
                <p className="absolute top-1/2 right-0 hidden items-center text-lg font-medium md:top-0 md:flex"></p>
              </li>
            ))}
            <li className="mb-4">
              <span className="font-semibold uppercase">
                Zestaw dnia - 28 zł
              </span>
            </li>
            <li>
              <span className="font-semibold uppercase">
                Zupani dnia - 8 zł
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
