import { createCard, deleteCard, likeCard } from "./card"
import { openPopup, closePopup } from "./popups"
import { enableValidation, clearValidation } from './validation'
import { getUserInfo, getInitialCards, updateProfile, getNewCard } from "./api"

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
const profileImage = document.querySelector('.profile__image')

// Валидация
const validationConfig = {
    formElement: '.popup__form',
    inputElement: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__input-error-visible'
}


const withClear = (callback, formElement, withButtonDisable) => {

    return (evt) => {
        callback(evt)
        clearValidation(formElement, validationConfig, withButtonDisable)
    }
}

enableValidation(validationConfig)
//

//Добавление карточек
const openCard = (name, link) => {

    popupImage.src = link
    popupImage.alt = name
    popupCaption.textContent = name
    openPopup(popupImageModal)
}

function addCard(name, link, toBegining) {
    const cardElement = createCard(name, link, deleteCard, likeCard, cardTemplate, openCard)

    if (toBegining) { placesList.prepend(cardElement) }
    else { placesList.append(cardElement) }

}

getInitialCards()
    .then((cards) => {
        cards.forEach((card) => addCard(card.name, card.link))
    })

//Модальные окна
editButton.addEventListener('click', withClear(() => {

    nameInput.value = `${newName.textContent}`
    jobInput.value = `${newJob.textContent}`

    openPopup(popupEditProfile)

}, editForm))


addButton.addEventListener('click', withClear(() => openPopup(popupNewCard), cardForm, true))


closeButtons.forEach((c) => c.addEventListener('click', (e) => closePopup(e.target.parentNode.parentNode)))


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_is-opened')) {
        closePopup(e.target)
    }
})


function editProfileSubmit(evt) {
    evt.preventDefault()

    const nameInputValue = nameInput.value
    const jobInputValue = jobInput.value

    updateProfile({
        name: nameInput.value,
        about: jobInput.value
    })
        .then(() => {
            newName.textContent = nameInputValue
            newJob.textContent = jobInputValue
        })

    closePopup(popupEditProfile)
}


function addNewCard(evt) {
    evt.preventDefault()

    const cardNameInputValue = cardNameInput.value
    const urlInputValue = urlInput.value

    getNewCard({
        name: cardNameInput.value,
        link: urlInput.value
    })
    .then(() => {
        addCard(cardNameInputValue, urlInputValue, true)
    })

    // addCard(cardNameInputValue, urlInputValue, true)

    cardNameInput.value = ''
    urlInput.value = ''

    closePopup(popupNewCard)
}


editForm.addEventListener('submit', editProfileSubmit)

cardForm.addEventListener('submit', withClear(addNewCard, cardForm, true))
//

//Данные профиля
getUserInfo()
    .then((profile) => {
        newName.textContent = profile.name
        newJob.textContent = profile.about
        profileImage.src = profile.avatar
    })
//


