import { initialCards, addCard, likeCard } from "./cards"
import { openPopup, closePopup, handleFormSubmit, addNewCard } from "./popups"

const content = document.querySelector('.content')
const placesList = content.querySelector('.places__list')
const cardTemplate = document.querySelector('#card-template').content
// Кнопки
const editButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const closeButtons = document.querySelectorAll('.popup__close')
// Попапы
const popupEditProfile = document.querySelector('.popup_type_edit')
const popupNewCard = document.querySelector('.popup_type_new-card')
const popupImageModal = document.querySelector('.popup_type_image')
const popupImage = document.querySelector('.popup__image')
const popupCaption = document.querySelector('.popup__caption')
// Элементы форм и форма
const editForm = document.querySelector('form[name="edit-profile"]')
const cardForm = document.querySelector('form[name="new-place"]')
export const nameInput = document.querySelector('.popup__input_type_name')
export const jobInput = document.querySelector('.popup__input_type_description')
export const cardNameInput = document.querySelector('.popup__input_type_card-name')
export const urlInput = document.querySelector('.popup__input_type_url')


export function addGenericCard(name, link, toBegining) {
    return addCard(name, link, cardTemplate, placesList, (cardImage, name, link) => {
        cardImage.addEventListener('click', () => {
            popupImage.src = link
            popupImage.alt = name
            popupCaption.textContent = name
            openPopup(popupImageModal)
        })
    }, toBegining)
}


initialCards.forEach((card) => addGenericCard(card.name, card.link))


editButton.addEventListener('click', () => openPopup(popupEditProfile))
addButton.addEventListener('click', () => openPopup(popupNewCard))


closeButtons.forEach((c) => c.addEventListener('click', (e) => closePopup(e.target.parentNode.parentNode)))


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_is-opened')) {
        closePopup(e.target)
    }
})


editForm.addEventListener('submit', handleFormSubmit)


cardForm.addEventListener('submit', addNewCard)

