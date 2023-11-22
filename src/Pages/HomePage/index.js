export { default } from './HomePage';


export async function getProducts() {
    const products =await fetch('https://fakestoreapi.com/products');
    return await products.json();
  }
  
 export  async function getCategories() {
    const categories =await fetch('https://fakestoreapi.com/products/categories');
    return await categories.json();
  }

  