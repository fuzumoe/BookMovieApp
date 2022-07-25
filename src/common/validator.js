export const validator = (value, field) => {
    if (field.includes('Name')) {
        if (!value || value.length === 0 || value.trim() === '') {
            return false
        }
        return true
    }

    if (field === 'email') {
        /* eslint-disable no-useless-escape */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!value || !re.test(String(value).toLowerCase())) {
            return false
        }
        return true
    }
    if (field === 'password') {
        if (!value || value.length < 7 || value.trim() === '') {
            return false
        }
        return true;
    }
    if (field === 'contact') {
        const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        if (!value || !re.test(value)) {
            return false
        }
        return true
    }
}


export const validateForm = (formElements, formElement = null) => {
    if (formElement == null) {
        const newFormElements = {}
        Object.keys(formElements).forEach((key) => {
            const name = key
            const value = formElements[key]['value']
            const isDirty = true
            const isValid = validator(value, name)

            newFormElements[name] = {
                value: value,
                isValid: isValid,
                isDirty: isDirty,
            }
        })
        console.log(newFormElements)
        return newFormElements;
    }
    if (formElement != null) {
        return {
                value: formElement.value,
                isValid: validator(formElement.value, formElement.name),
                isDirty: true,
            }

    }
}

export const isFormValid = (formElements) =>{
    const formIsValid = Object.values(formElements)
        .map((obj) => {
            return !obj.isValid && obj.isDirty;
        })
        .includes(false);
    return !formIsValid;
};
