import { Router, send } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
  .get("/", async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/public/static`,
        index: "index.html",
      });
  })
  .get("/book", (context) => {
    context.response.body = "All of books";
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id) {
      context.response.body = `Book id ${context.params.id}`;
    }
  });

  export default router;