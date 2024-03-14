import { addCard } from "./card"
import { openPopup, closePopup, addNewCard, editProfileSubmit } from "./popups"
import { initialCards } from './cards'

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
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')
const cardNameInput = document.querySelector('.popup__input_type_card-name')
const urlInput = document.querySelector('.popup__input_type_url')
const newName = document.querySelector('.profile__title')
const newJob = document.querySelector('.profile__description')

const openCard = (name, link) => {

    popupImage.src = link
    popupImage.alt = name
    popupCaption.textContent = name
    openPopup(popupImageModal)
}


export function addSpecificCard(name, link, toBegining) {
    return addCard(name, link, cardTemplate, placesList, openCard, toBegining)
}


initialCards.forEach((card) => addSpecificCard(card.name, card.link))


editButton.addEventListener('click', () => {

    nameInput.value = `${newName.textContent}`
    jobInput.value = `${newJob.textContent}`

    openPopup(popupEditProfile)
})

addButton.addEventListener('click', () => openPopup(popupNewCard))


closeButtons.forEach((c) => c.addEventListener('click', (e) => closePopup(e.target.parentNode.parentNode)))


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_is-opened')) {
        closePopup(e.target)
    }
})


editForm.addEventListener('submit', (evt) => editProfileSubmit(evt, newName, newJob, nameInput, jobInput, popupEditProfile))

cardForm.addEventListener('submit', (evt) => addNewCard(evt, cardNameInput, urlInput, popupNewCard, addSpecificCard))

