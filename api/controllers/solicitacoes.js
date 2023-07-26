import { db } from "../db.js";

export const getSolicitacoes = (_, res) => {
    const q = "SELECT * FROM solicitacoes";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const salvarSolicitacao = (req, res) => {
    const {
        nome,
        datanascimento,
        cpf,
        profissional,
        tipoSolicitacao,
        procedimentos,
        formData,
        hora,
    } = req.body;

    const q =
        "INSERT INTO solicitacoes (nome, data_nascimento, cpf, profissional, tipo_solicitacao, procedimentos, data, hora) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        nome,
        datanascimento,
        cpf,
        profissional,
        tipoSolicitacao,
        procedimentos,
        formData,
        hora,
    ];

    db.query(q, values, (err, result) => {
        if (err) {
            console.error("Erro ao salvar os dados no banco de dados:", err);
            return res
                .status(500)
                .json({ error: "Erro ao salvar os dados no banco de dados" });
        }

        return res.status(201).json({ message: "Dados salvos com sucesso" });
    });
};
