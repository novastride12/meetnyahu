import authRoutes from "./features/auth/auth.routes";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./features/user/user.routes";
import projectRoutes from "./features/project/project.routes";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/projects", projectRoutes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "MeetnYahu API is running 🚀",
  });
});

app.use((err: any, _req: any, res: any, _next: any) => {
  console.error("GLOBAL ERROR");
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});
export default app;