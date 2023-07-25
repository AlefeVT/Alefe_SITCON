import { db } from "../db.js";

export const getProcedimentos = (_, res) => {
    const q = "SELECT * FROM procedimentos";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}