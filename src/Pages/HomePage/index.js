import axiosInstance from '../../services/axios/config';
export { default } from './HomePage';


  export async function getCategories() {
    try {
      const response = await axiosInstance.get('/products/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  