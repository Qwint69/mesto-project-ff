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




