
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const disableButton = (buttonElement, validationConfig) => {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
}

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
};

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    if (errorElement) {
        inputElement.classList.add(validationConfig.inputErrorClass)
        errorElement.textContent = errorMessage
        errorElement.classList.add(validationConfig.errorClass)
    }

}

const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    if (errorElement) {
        inputElement.classList.remove(validationConfig.inputErrorClass)
        errorElement.classList.remove(validationConfig.errorClass)
        errorElement.textContent = ''
    }

}

const checkInputValidity = (formElement, inputElement, validationConfig) => {
    const validity = inputElement.validity
    if (validity.patternMismatch || validity.typeMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }

    if (!validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
        hideInputError(formElement, inputElement, validationConfig);
    }
}

const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement))
    const submitButton = formElement.querySelector(validationConfig.submitButtonSelector)
    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            checkInputValidity(formElement, input, validationConfig)
            toggleButtonState(inputList, submitButton, validationConfig)
        })
    })
}

export const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formElement))
    formList.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault()
        })
        setEventListeners(form, validationConfig)
    })
}

export const clearValidation = (formElement, validationConfig, withButtonDisable) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement))
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector)
    inputList.forEach((input) => {
        hideInputError(formElement, input, validationConfig)
    })
    if (withButtonDisable) { disableButton(buttonElement, validationConfig) }
}





