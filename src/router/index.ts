import { Router, send } from "https://deno.land/x/oak/mod.ts";
import * as UserController from "../controllers/UserController.ts";
import * as RoleController from "../controllers/RoleController.ts";

const router = new Router();

let userPath = "/api/users";
let rolePath = "/api/roles";

router
  .get("/", async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/public/static`,
        index: "index.html",
      });
  })
  // User routes
  .get(userPath, UserController.getUsers)
  .get(userPath + "/:id", UserController.getUser)
  .post(userPath, UserController.addUser)
  .patch(userPath + "/:id", UserController.updateUser)
  .delete(userPath + "/:id", UserController.deleteUser)
  // Role routes
  .get(rolePath, RoleController.getRoles)
  .get(rolePath + "/:id", RoleController.getRole)
  .post(rolePath, RoleController.addRole)
  .patch(rolePath + "/:id", RoleController.updateRole)
  .delete(rolePath + "/:id", RoleController.deleteRole)

  // export module
  export default router;