import { deleteMineCard, addCardLike, removeCardLike } from "./api"

export function createCard(card, userId, deleteCard, likeCard, cardTemplate, onOpen) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
  const { name, link, isMine, _id, likes } = card

  cardElement.querySelector('.card__title').textContent = name
  const cardImage = cardElement.querySelector('.card__image')
  cardImage.src = link
  cardImage.alt = name

  cardImage.addEventListener('click', () => onOpen(name, link))

  const buttonDeleteButton = cardElement.querySelector('.card__delete-button')
  buttonDeleteButton.addEventListener('click', () => deleteCard(cardElement, _id))

  if (!isMine) {
    buttonDeleteButton.remove()
  }

  const isMyLike = likes.some((like) => like._id === userId)

  const likeButton = cardElement.querySelector('.card__like-button')
  const likesCount = cardElement.querySelector('.card__likes-amount')

  if (isMyLike) {
    likeButton.classList.toggle('card__like-button_is-active')
  }

  likesCount.textContent = likes.length
  likeButton.addEventListener('click', () => likeCard(likeButton, _id, likesCount))


  return cardElement
}


export function deleteCard(cardElement, _id) {

  deleteMineCard(_id)
    .then(() => cardElement.remove())
}


export function likeCard(likeButton, _id, likesCount) {

  const liked = likeButton.classList.contains('card__like-button_is-active')
  if (!liked) {
    addCardLike(_id)
      .then((card) => {
        likeButton.classList.toggle('card__like-button_is-active')
        likesCount.textContent = card.likes.length
      })
  }
  else {
    removeCardLike(_id)
      .then((card) => {
        likeButton.classList.toggle('card__like-button_is-active')
        likesCount.textContent = card.likes.length
      })
  }

}



