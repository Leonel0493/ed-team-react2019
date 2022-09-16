import { pool } from "../db.js";

export const getProffesors = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM Proffesors");
  res.json(result);
};

export const getProffesor = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM Proffesors WHERE idProffesor = ?",
    [req.params.id]
  );

  if (result.length === 0)
    return res.status(404).json({ message: "Proffesor not found" });

  res.json(result[0]);
};
