export const increment = (inc) => {
    return {
        type: 'Increment',
        payload: inc,
    }
};

export const decrement = (dec) => {
    return {
        type: "Decrement",
        payload: dec,
    }
};