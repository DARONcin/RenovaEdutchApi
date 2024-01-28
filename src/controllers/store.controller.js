
import { getConnection } from "../database/database";

const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_producto, precios, productos FROM precios");
        console.log(result);
        res.json(result[0]);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
};

const getProduct = async (req, res) => {
    try {
        const {id_producto}=req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_producto, precios, productos FROM precios WHERE id_producto = ?", id_producto);
        res.json(result[0]);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
};

const addProduct=async (req, res) => {
    try {
        
        const {precios, productos} = req.body;
        if(precios== undefined || productos == undefined){
            res.status(400).json({message: "Bad Request"});
        }
        const products= {precios, productos}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO precios SET ?", products)
        res.json(result);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
};

//delete
const deleteProduct = async (req, res) => {
    try {
        const {id_producto}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM precios WHERE id_producto = ?", id_producto);
        res.json(result[0]);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
};

//update
const updateProduct = async (req, res) => {
    try {
        const {id_producto}=req.params;
        const {precios, productos} = req.body;
        if(precios== undefined || productos == undefined || id_producto == undefined){
            res.status(400).json({message: "Bad Request"});
        }
        const product = {id_producto, precios, productos}
        const connection = await getConnection();
        const result = await connection.query("UPDATE precios SET ? WHERE id_producto = ?", [product, id_producto]);
        res.json(result[0]);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
};

export const methods = {
     getProducts,
     addProduct,
     getProduct,
     deleteProduct,
     updateProduct
};