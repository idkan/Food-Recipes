import { recipes } from "../../data/recipes";

/**
 * GET /api/recipes
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default function handler(req, res) {
    res.status(200).json({ recipes });
}