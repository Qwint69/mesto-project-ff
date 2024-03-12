import { nameInput, jobInput, cardNameInput, urlInput } from "."
import { addGenericCard } from "."

const escapeHandler = (e) => {
    if (e.key === 'Escape') {
        const isOpened = document.querySelector('.popup_is-opened')
        if (!!isOpened) {
            closePopup(isOpened)
        }
    }
}

export function openPopup(popupDomElement) {

    popupDomElement.classList.add('popup_is-opened', 'popup_is-animated')

    const newName = document.querySelector('.profile__title')
    const newJob = document.querySelector('.profile__description')

    nameInput.value = `${newName.textContent}`
    jobInput.value = `${newJob.textContent}`

    document.addEventListener('keydown', escapeHandler)
}

export function closePopup(popupDomElement) {
    popupDomElement.classList.remove('popup_is-opened')

    nameInput.value = ''
    jobInput.value = ''
    cardNameInput.value = ''
    urlInput.value = ''

    document.removeEventListener('keydown', escapeHandler)
}


export function handleFormSubmit(evt) {
    evt.preventDefault()

    const nameInputValue = nameInput.value
    const jobInputValue = jobInput.value

    const newName = document.querySelector('.profile__title')
    const newJob = document.querySelector('.profile__description')

    newName.textContent = nameInputValue
    newJob.textContent = jobInputValue

    closePopup(evt.target.parentNode.parentNode)
}

export function addNewCard(evt) {
    evt.preventDefault()

    const cardNameInputValue = cardNameInput.value
    const urlInputValue = urlInput.value

    addGenericCard(cardNameInputValue, urlInputValue, true)

    closePopup(evt.target.parentNode.parentNode)
}

