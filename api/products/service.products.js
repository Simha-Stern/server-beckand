import dalProducts from './dal.products.js';
import productsDal from './dal.products.js';

const getAllProducts = async () => {
    try {
        const products = await productsDal.getAllProducts();
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getProductById = async (id) => {
    try {
        const product = await productsDal.getProductById(id);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addNewProduct = async (newProduct) => {
  try {
      await dalProducts.addNewProduct(newProduct)

    } catch (error) {
      console.log(error);
  }
}

const updateProduct = async (id, update) => {
  try {
    await dalProducts.updateProduct(id, update)
  }catch (error) {
    console.log(error);
}
}

const deleteProduct = async (id) => {
  try {
    await dalProducts.deleteProduct(id)
  }catch (error) {
    console.log(error);
  }
}



const productsService = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct
};

export default productsService;


  