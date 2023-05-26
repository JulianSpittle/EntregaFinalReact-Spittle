import productos from './json/productos.json'

export const getProductById = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter((prod) => prod.category === categoryId));
        }, 500);
    });
};