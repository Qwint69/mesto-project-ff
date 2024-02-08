// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content')
const placesList = content.querySelector('.places__list')
const cardTemplate = document.querySelector('#card-template').content

function addCard(name, link) {
    const cardElement = createCard(name, link)

    placesList.appendChild(cardElement)
}

function createCard(name, link) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

    cardElement.querySelector('.card__title').textContent = name
    cardElement.querySelector('.card__image').src = link
    cardElement.querySelector('.card__image').alt = name
    const deleteButton = cardElement.querySelector('.card__delete-button')
    deleteButton.addEventListener('click', () => cardElement.remove())

    return cardElement
}

initialCards.forEach((card) => addCard(card.name, card.link))










