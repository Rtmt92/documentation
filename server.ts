import express,{Request, Response} from "express";
import { WeatherController } from "./weatherController";

const app = express();

const API_KEY="1ed010d7540d4a48ab8135534240102";
const weatherController= new WeatherController(API_KEY);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/test",(req: Request, res: Response)=>{
    res.send("le serveur fonctionne bien")
})

app.get('/weather/:city,', async (req: Request, res: Response) => {
    await weatherController.getWeather(req, res);
  });

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution sur le port ${PORT}`)
})