import { pool } from "../db.js";

export const getCourses = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM coursesdetails order by idCourse ASC"
  );
  res.json(result);
};

export const getCourse = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM coursesdetails Where idCourse = ?",
    [req.params.id]
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(result[0]);
};
