(() => {
  const buttons = [...document.querySelectorAll('.map-filters button')];
  const cards = [...document.querySelectorAll('.map-card')];

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      cards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  const legConditions = [
    { air: 60, water: 63, current: 'Weak alongshore set; strong inlet tides' },
    { air: 68, water: 74, current: 'Cross the full Gulf Stream; axis and speed vary' },
    { air: 76, water: 78, current: 'Weak variable flow near Bermuda, then slight west set' },
    { air: 81, water: 80, current: 'Local channel set generally west' },
    { air: 80, water: 80, current: 'Generally west-setting regional flow' },
    { air: 79, water: 79, current: 'Tidal currents in cuts; local reversals' },
    { air: 80, water: 79, current: 'Shoal-bank and cut currents' },
    { air: 81, water: 79, current: 'Generally weak south-coast current' },
    { air: 80, water: 79, current: 'Westward background flow plus strong tidal variability' },
    { air: 81, water: 79, current: 'Typical westward set along north coast' },
    { air: 79, water: 78, current: 'Cuts may run 1–2 knots' },
    { air: 79, water: 78, current: 'Cut current can be strong' },
    { air: 80, water: 79, current: 'Strong tidal streams in cuts' },
    { air: 79, water: 78, current: 'Bank and channel currents; Stream begins west of Bimini' },
    { air: 80, water: 80, current: 'Gulf Stream sets strongly north' },
    { air: 80, water: 79, current: 'Use western edge only in a safe forecast; retain bailout margin' },
    { air: 78, water: 76, current: 'Stream remains offshore; inlet tides can exceed 2 knots' },
    { air: 76, water: 74, current: 'Stream closest to shore near Hatteras; Diamond Shoals rips' },
    { air: 74, water: 70, current: 'Strong Chesapeake/Delaware entrance tides' },
    { air: 72, water: 66, current: 'Race, Montauk and Block currents can exceed 2 knots' },
    { air: 70, water: 60, current: 'Strong tidal current in reaches and thorofares' },
    { air: 66, water: 60, current: 'Strong Maine tides; Cape Cod Canal up to several knots' },
    { air: 60, water: 62, current: 'Minor coastal set; main Stream far offshore' },
    { air: 55, water: 58, current: 'Cape May and Chesapeake tides' }
  ];

  document.querySelectorAll('.leg-detail__body').forEach((body, index) => {
    const condition = legConditions[index];
    if (!condition) return;

    const row = document.createElement('div');
    row.className = 'leg-detail__conditions';

    const air = document.createElement('span');
    air.innerHTML = `<small>Avg air</small>${condition.air}°F`;
    const water = document.createElement('span');
    water.innerHTML = `<small>Avg water</small>${condition.water}°F`;
    const current = document.createElement('span');
    current.className = 'current-note';
    current.innerHTML = `<small>Current / tide</small>${condition.current}`;

    row.append(air, water, current);
    body.querySelector('.leg-detail__metrics').after(row);
  });
})();
