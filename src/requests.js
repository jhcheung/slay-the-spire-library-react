const cardsURL = 'http://localhost:3000/api/v1/cards/'
const relicsURL = 'http://localhost:3000/api/v1/relics/'
const parseData = response => response.json()
const catchError = error => console.log(`%c${error}`, 'color: red;')

export const fetchCards = () => fetch(cardsURL)
.then(parseData)
.catch(catchError)

export const fetchRelics = () => fetch(relicsURL)
.then(parseData)
.catch(catchError)
