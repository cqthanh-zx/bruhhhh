import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router/index.ts";
import NotFoundController from "./controllers/NotFoundController.ts";
import { DatabaseController } from "./controllers/DatabaseController.ts";
import { Timing, Logger } from "./middlewares/AppMetric.ts";

const app = new Application();

// Logger
app.use(Logger);

// Timing
app.use(Timing)

const env = Deno.env.toObject();
const HOST = env.HOST || 'localhost';
const PORT = Number(env.PORT) || 8000;

console.log(`Deno is running on http://${HOST}:${PORT}`);

app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  console.log(evt.error);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(NotFoundController);
// await new DatabaseController().initModels();
await app.listen({ port: PORT });