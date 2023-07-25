import { db } from "../db.js";

export const getTiposolicitacao = (_, res) => {
    const q = "SELECT * FROM tiposolicitacao";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};