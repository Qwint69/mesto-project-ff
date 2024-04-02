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
            link: newCard.about
        })
    })

        .then(res => res.json())

        .catch(res => console.log(res))
}