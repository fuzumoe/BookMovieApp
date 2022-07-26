export const validator = (value, field) => {
    if (field.includes('Name')) {
        if (!value || value.length === 0 || value.trim() === '') {
            return false
        }
        return true
    }

    if (field === 'email') {
        if (!value || value.length === 0 || value.trim() === '') {
            return false
        }
        return true
    }
    if (field === 'password') {
        if (!value || value.length === 0 || value.trim() === '') {
            return false
        }
        return true;
    }
    if (field === 'contact') {
        if (!value || value.length === 0 || value.trim() === '') {
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
