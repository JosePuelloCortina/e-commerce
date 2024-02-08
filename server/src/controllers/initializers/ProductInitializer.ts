import { Product } from "../../entities/products/Product";
import { ProductDetail } from "../../entities/products/ProductDetail";
import { products } from "../../utils/data/product";

export const productInitialeze = async() => {
    try {
        for(let p of products){
            let product:object = {
                id: p.id,
                code: p.code,
                name: p.name,
                description: p.description,
                unit_price: p.unit_price,
                stock: p.stock,
                category: p.category,
                user: p.user 
            }
            let productDetailData:object ={
                id: p.productDetail[0].id,
                images: p.productDetail[0].images,
                color: p.productDetail[0].color,
                size: p.productDetail[0].size,
                model: p.productDetail[0].model,
                material: p.productDetail[0].material,
                country_origin: p.productDetail[0].country_origin,
                products: p.id
            }
            const createdProduct = await Product.create(product);
            await createdProduct.save();
            const createdProductDetail = await ProductDetail.create(productDetailData);
            await createdProductDetail.save();
        }
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }
    }
}