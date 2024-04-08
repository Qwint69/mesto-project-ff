const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
        authorization: '9b905344-3d05-4d05-a4c9-656bee7e15b5',
        'Content-Type': 'application/json'
    }
}

export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: {
            authorization: '9b905344-3d05-4d05-a4c9-656bee7e15b5'
        }
    })
        .then(res => res.json())

        .catch(res => console.log(res))
}

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: {
            authorization: '9b905344-3d05-4d05-a4c9-656bee7e15b5'
        }
    })
        .then(res => res.json())

        .catch(res => console.log(res))
}

export const updateProfile = (newProfile) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: newProfile.name,
            about: newProfile.about
        })
    })

        .then(res => res.json())

        .catch(res => console.log(res))
}

export const getNewCard = (newCard) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: newCard.name,
            link: newCard.link
        })
    })

        .then(res => res.json())

        .catch(res => console.log(res))
}

export const deleteMineCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: '9b905344-3d05-4d05-a4c9-656bee7e15b5'
        }
    })
    .then(res => res.json())

    .catch(res => console.log(res))
}

export const addCardLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: '9b905344-3d05-4d05-a4c9-656bee7e15b5'
        }
    })
    .then(res => res.json())

    .catch(res => console.log(res))
}

export const removeCardLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: '9b905344-3d05-4d05-a4c9-656bee7e15b5'
        }
    })
    .then(res => res.json())

    .catch(res => console.log(res))
}

export const updateAvatar = (newAvatar) => {
    console.log(newAvatar.avatar,'here is avatar')
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH' ,
        headers: config.headers,
        body: JSON.stringify({
            avatar: newAvatar.avatar
        })
    })

    .then(res => res.json())

    .catch(res => console.log(res))
}