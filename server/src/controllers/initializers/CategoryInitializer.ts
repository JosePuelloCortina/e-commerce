import { Category } from "../../entities/products/Category";
import { categorie } from "../../utils/data/categories";

export const categoryInitialize = async() => {
    try {
        for(let c of categorie){
            let category:object = {
                id: c.id,
                type: c.type,
                applications: c.applications,
                public: c.public
            }
            const createdCategory = await Category.create(category);
            await createdCategory.save()
        }
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }       
    }
}