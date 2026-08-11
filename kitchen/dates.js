const meals = document.querySelectorAll('.meal-grid .meal-card');
const mealDates = {
  0: ['2026-08-10', 'Monday · August 10, 2026'],
  1: ['2026-08-07T19:39:00-04:00', 'Friday · August 7, 2026 · 7:39 PM'],
  2: ['2026-08-06T22:01:00-04:00', 'Thursday · August 6, 2026 · 10:01 PM'],
  3: ['2026-08-06T21:02:00-04:00', 'Thursday · August 6, 2026 · 9:02 PM'],
  4: ['2026-08-05T21:28:00-04:00', 'Wednesday · August 5, 2026 · 9:28 PM'],
  5: ['2026-08-04T19:39:00-04:00', 'Tuesday · August 4, 2026 · 7:39 PM'],
  6: ['2026-08-02T15:24:00-04:00', 'Sunday · August 2, 2026 · 3:24 PM'],
  7: ['2026-07-31T22:00:00-04:00', 'Friday · July 31, 2026 · 10:00 PM'],
  9: ['2026-07-29T20:28:00-04:00', 'Wednesday · July 29, 2026 · 8:28 PM']
};

Object.entries(mealDates).forEach(([index, [dateTime, label]]) => {
  const eyebrow = meals[index]?.querySelector('.eyebrow');
  if (!eyebrow || meals[index]?.querySelector('.meal-date')) return;
  const date = document.createElement('p');
  date.className = 'meal-date';
  const time = document.createElement('time');
  time.dateTime = dateTime;
  time.textContent = label;
  date.append(time);
  eyebrow.insertAdjacentElement('afterend', date);
});

const tomatoEntry = document.createElement('article');
tomatoEntry.className = 'meal-card reveal visible';
tomatoEntry.innerHTML = '<img src="../assets/kitchen/roman-homegrown-tomatoes.jpg" alt="Home-grown tomatoes from Roman"><div><p class="eyebrow">Garden note</p><p class="meal-date"><time datetime="2026-08-06T20:32:00-04:00">Thursday · August 6, 2026 · 8:32 PM</time></p><h3>Roman’s home-grown tomatoes</h3><p class="ingredients"><strong>Prep:</strong> Fresh home-grown tomatoes</p><div class="meal-meta"><span><b>Est.</b> 40–70 cal</span><span><b>Healthy</b> 10/10</span></div></div>';
meals[3]?.insertAdjacentElement('afterend', tomatoEntry);
