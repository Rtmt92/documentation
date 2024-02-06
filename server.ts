import express,{NextFunction, Request, Response} from "express";
import { WeatherController } from "./controller/weatherController";
import { API_KEY } from "./constentes/config";
import dotenv from "dotenv"
dotenv.config()

const app = express();

const weatherController= new WeatherController(API_KEY);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/test",(req: Request, res: Response)=>{
    res.send("le serveur fonctionne bien")
})

app.get('/weather/:city,', async (req: Request, res: Response, next: NextFunction) => {
    await weatherController.getWeather(req, res, next);
  });

  

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution sur le port ${PORT}`)
})