const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: '2022-07-05',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Cover of Magyk by Angie Sage: a dark blue book with a gold ornate lock and keyhole.',
    ages: '10-14',
    genre: 'Fantasy',
    rating: 4
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: '2021-12-12',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse mythology, and the end result is good.',
    imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Cover of Sword of Summer by Rick Riordan.',
    ages: '12-16',
    genre: 'Fantasy',
    rating: 4
  },
  {
    id: 3,
    title: 'Belgariad Book One: Pawn of Prophecy',
    date: '2022-02-12',
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf, set out on a complex mission.",
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
    imgAlt: 'Cover of Pawn of Prophecy by David Eddings.',
    ages: '12-16',
    genre: 'Fantasy',
    rating: 5
  }
];

const main = document.getElementById('main');

function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function makeEl(tag, text, className) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (className) el.className = className;
  return el;
}

articles.forEach(book => {
  const article = document.createElement('article');

  const h2 = makeEl('h2', book.title);

  const img = document.createElement('img');
  img.src = book.imgSrc;
  img.alt = book.imgAlt;
  img.loading = 'lazy';

  const desc = makeEl('p', book.description);

  const meta = makeEl('div', null, 'meta');

  const dateP = document.createElement('p');
  const time = makeEl('time', formatDate(book.date));
  time.dateTime = book.date;
  dateP.appendChild(time);

  const stars = makeEl(
    'p',
    '★'.repeat(book.rating) + '☆'.repeat(5 - book.rating),
    'stars'
  );
  stars.setAttribute('role', 'img');
  stars.setAttribute('aria-label', `${book.rating} out of 5 stars`);

  meta.append(
    dateP,
    makeEl('p', `Ages ${book.ages}`),
    makeEl('p', book.genre),
    stars
  );

  article.append(h2, img, desc, meta);
  main.appendChild(article);
});