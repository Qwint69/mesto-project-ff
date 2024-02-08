// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content')
const addButton = content.querySelector('.profile__add-button')
const placesList = content.querySelector('.places__list')


function addCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

    cardElement.querySelector('.card__title').textContent = name
    cardElement.querySelector('.card__image').src = link

    placesList.appendChild(cardElement)

    return cardElement
}

    const cardElements = initialCards.map((card) => addCard(card.name, card.link))
    cardElements.forEach((element) => {
        const deleteButton = element.querySelector('.card__delete-button')
        deleteButton.addEventListener('click', () => element.remove())
    })








