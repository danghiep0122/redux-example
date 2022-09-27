export const loggedIn = () => {
    return {
        type: "SIGN_IN"
    }
}

export const addressInput = (value) => {
    return {
        type: 'ADD',
        payload: value
    }
}

