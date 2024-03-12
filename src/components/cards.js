
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];


export function addCard(name, link, cardTemplate, placesList, onOpen, toBegining) {
  const cardElement = createCard(name, link, deleteCard, likeCard, cardTemplate, onOpen)

  if (toBegining) { placesList.prepend(cardElement) }
  else { placesList.append(cardElement) }

  return cardElement
}


export function createCard(name, link, deleteCard, likeCard, cardTemplate, onOpen) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

  cardElement.querySelector('.card__title').textContent = name
  const cardImage = cardElement.querySelector('.card__image')
  cardImage.src = link
  onOpen(cardImage, name, link)
  cardElement.querySelector('.card__image').alt = name

  const buttonDeleteButton = cardElement.querySelector('.card__delete-button')
  buttonDeleteButton.addEventListener('click', () => deleteCard(cardElement))

  const likeButton = cardElement.querySelector('.card__like-button')
  likeButton.addEventListener('click', () => likeCard(likeButton))

  return cardElement
}


export function deleteCard(cardElement) {
  cardElement.remove()
}


export function likeCard(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active')
}

