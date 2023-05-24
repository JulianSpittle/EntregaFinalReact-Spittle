const products = [
    {id:'1',
    name:'uno',
    price:1,
    category:'uno',
    img:'',
    stock:1,
    description:'uno'
    },

    {id:'dos',
    name:'dos',
    price:1,
    category:'dos',
    img:'',
    stock:1,
    description:'dos'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}