var initialState = [
    {
        id: 1,
        name: "iPhone 6 Plus",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S7",
        price: 500,
        status: false
    },
    {
        id: 1,
        name: "iPhone XS Max",
        price: 700,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;