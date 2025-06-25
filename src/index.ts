import cors from "cors";
import express from "express";
import { PORT } from "./config/env";
import { errorMiddleware } from "./middlewares/error.middleware";
import sampleRouter from "./routes/sample.router";
const app = express();

//config
app.use(cors());
app.use(express.json());

//routes
app.use("/samples", sampleRouter);

//api error | error
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server runing on port : ${PORT}`);
});

// agar import rapih shift + alt +o
