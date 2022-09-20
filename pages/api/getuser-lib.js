import { query } from "../../lib/db";

export default async function handler(req, res) {
	const id = req.body.id
	try {
		const querySql = "SELECT * FROM users WHERE id = ?";
		const valuesParams = [id];
		const data = await query({query: querySql, values: valuesParams});
		// (await db).end
		res.status(200).json({ user: data });
	} catch (error) {}
	
}