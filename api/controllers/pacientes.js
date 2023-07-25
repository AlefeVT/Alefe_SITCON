import { db } from "../db.js";

export const getPacientes = (_, res) => {
    const q = "SELECT * FROM pacientes";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}