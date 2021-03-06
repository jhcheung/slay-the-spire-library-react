const cardsURL = 'http://localhost:3000/api/v1/cards/'
const relicsURL = 'http://localhost:3000/api/v1/relics/'
const keywordsURL = 'http://localhost:3000/api/v1/keywords/'
const parseData = response => response.json()
const catchError = error => console.log(`%c${error}`, 'color: red;')

export const fetchCards = () => fetch(cardsURL)
  .then(parseData)
  .catch(catchError);

export const fetchCard = (id) => fetch(cardsURL + id)
  .then(parseData)
  .catch(catchError);

export const fetchRelics = () => fetch(relicsURL)
  .then(parseData)
  .catch(catchError);

export const fetchKeywords = () => fetch(keywordsURL)
  .then(parseData)
  .catch(catchError);

export const fetchKeyword = (id) => fetch(keywordsURL + id)
  .then(parseData)
  .catch(catchError);
