import { recipes } from "../../data/recipes";

/**
 * GET /api/recipes
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default function handler(req, res) {
    const { query } = req.query;

    if (query) {
        const filteredRecipes = recipes.filter(recipe => {
            const { title, ingredients } = recipe;
            return title.toLowerCase().includes(query.toLowerCase()) || ingredients.join("").toLowerCase().includes(query.toLowerCase());
        });
        res.status(200).json({ recipes: filteredRecipes });
    } else {
        res.status(200).json({ recipes: recipes });
    }
}