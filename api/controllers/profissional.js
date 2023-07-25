import { db } from "../db.js";

export const getProfissional = (_, res) => {
    const q = "SELECT * FROM profissional";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}