
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const disableButton = (buttonElement, validationConfig) => {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
}

const toggleButtonState = (inputList, buttonElement, elements) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(elements.inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(elements.inactiveButtonClass);
    }
};

const showInputError = (formElement, inputElement, errorMessage, elements) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    if (errorElement) {
        inputElement.classList.add(elements.inputErrorClass)
        errorElement.textContent = errorMessage
        errorElement.classList.add(elements.errorClass)
    }

}

const hideInputError = (formElement, inputElement, elements) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    if (errorElement) {
        inputElement.classList.remove(elements.inputErrorClass)
        errorElement.classList.remove(elements.errorClass)
        errorElement.textContent = ''
    }

}

const checkInputValidity = (formElement, inputElement, elements) => {
    const validity = inputElement.validity
    if (validity.patternMismatch || validity.typeMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }
    console.log(inputElement.dataset, '4')
    if (!validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, elements);
    } else {
        hideInputError(formElement, inputElement, elements);
    }
}

const setEventListeners = (formElement, elements) => {
    const inputList = Array.from(formElement.querySelectorAll(elements.inputElement))
    const submitButton = formElement.querySelector(elements.submitButtonSelector)
    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            checkInputValidity(formElement, input, elements)
            toggleButtonState(inputList, submitButton, elements)
        })
    })
}

export const enableValidation = (elements) => {
    const formList = Array.from(document.querySelectorAll(elements.formElement))
    formList.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault()
        })
        setEventListeners(form, elements)
    })
}

export const clearValidation = (formElement, validationConfig, withButtonDisable) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement))
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector)
    inputList.forEach((input) => {
        hideInputError(formElement, input, validationConfig)
    })
   if (withButtonDisable) {disableButton(buttonElement, validationConfig)}
}





