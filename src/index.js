import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import courseRoutes from "./routes/courses.routes.js";
import proffesorRoutes from "./routes/proffesors.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(courseRoutes);
app.use(proffesorRoutes);

app.listen(4000);
console.log(`Server runs on port ${PORT}`);
