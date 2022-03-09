// for adding to the cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// for deleting from the cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
