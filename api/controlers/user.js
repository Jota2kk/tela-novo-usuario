import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * from user1"

    db.query(q, (err, data)=> {
        if (err) return res.json(err);

        return res.status(200).json(data);
    }) 
}

export const creatUsers = (req, res)=> {
    const sql = "INSERT INTO user1(`name`, `fone`, `email`, `dataa`) VALUES(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento
    ]

    db.query(sql, [values], (err)=> {
        if (err) return res.json(err);

        return res.json("usuarios feito");
    })

}