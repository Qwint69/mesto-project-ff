const escapeHandler = (e) => {
    if (e.key === 'Escape') {
        const isOpened = document.querySelector('.popup_is-opened')
        if (!!isOpened) {
            closePopup(isOpened)
        }
    }
}

export function openPopup(popupDomElement) {

    popupDomElement.classList.add('popup_is-opened')

    document.addEventListener('keydown', escapeHandler)
}

export function closePopup(popupDomElement) {
    popupDomElement.classList.remove('popup_is-opened')

    document.removeEventListener('keydown', escapeHandler)
}


export function editProfileSubmit(evt, newName, newJob, nameInput, jobInput, popupEditProfile) {
    evt.preventDefault()

    const nameInputValue = nameInput.value
    const jobInputValue = jobInput.value

    newName.textContent = nameInputValue
    newJob.textContent = jobInputValue

    closePopup(popupEditProfile)
}

export function addNewCard(evt, cardNameInput, urlInput, popupNewCard, addSpecificCard) {
    evt.preventDefault()

    const cardNameInputValue = cardNameInput.value
    const urlInputValue = urlInput.value

    addSpecificCard(cardNameInputValue, urlInputValue, true)

    closePopup(popupNewCard)
}

