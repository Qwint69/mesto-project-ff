

export function createCard(name, link, deleteCard, likeCard, cardTemplate, onOpen) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

  cardElement.querySelector('.card__title').textContent = name
  const cardImage = cardElement.querySelector('.card__image')
  cardImage.src = link
  cardImage.alt = name

  cardImage.addEventListener('click', () => onOpen(name, link))

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

