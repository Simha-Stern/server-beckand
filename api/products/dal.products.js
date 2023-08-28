import fs from 'fs';
import { promisify } from 'util';

const readFileAsinc = promisify(fs.readFile);
const writeFileAsinc = promisify(fs.writeFile);

const getAllProducts = async (req, res) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);

        return jsonData; // Send the response to the client                                        
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const getProductById = async (id) => {
    try {
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        const product = jsonData.find(user => id === String(user.id));
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const addNewProduct = async (newProduct) => {
    try {
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        
        jsonData.push(newProduct);
        
        const updatedData = JSON.stringify(jsonData); 
        
        await writeFileAsinc('./data.json', updatedData);
        
        console.log('New product added successfully.');
    } catch (err) {
        console.error('Error adding new product:', err);
    }
};


const updateProduct = async (id, update) => {
    try {
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        let jsonData = JSON.parse(dataAsinc);
        
        const productIndex = jsonData.findIndex(element => id === String(element.id));
        if (productIndex !== -1) {
            jsonData[productIndex] = { ...jsonData[productIndex], ...update };
            
            const updatedData = JSON.stringify(jsonData, null, 2);
            
            await writeFileAsinc('./data.json', updatedData);
            
            console.log('Product updated successfully.');
        } else {
            console.error('Product not found.');
        }
    } catch (err) {
        console.error('Error updating product:', err);
    }
};

const deleteProduct = async (id) => {
    try {
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);

        const productIndex = jsonData.findIndex(element => id === String(element.id));
        delete jsonData[productIndex]
        const updatedData = JSON.stringify(jsonData); 
        
        await writeFileAsinc('./data.json', updatedData);
        
        console.log('The product deleted successfully.');
    } catch (err) {
        console.error('Error adding new product:', err);
    }
};




const dalProducts = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct

}
export default dalProducts 