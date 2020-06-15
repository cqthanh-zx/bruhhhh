import { Database } from "https://deno.land/x/denodb/mod.ts";
import { DB } from "../configs/index.ts";

//Map models
import { User } from "../models/User.ts";

export class DatabaseController {
  client: Database;

	/**
   * Initialise database client
   */
  constructor() {
    this.client = new Database('postgres', {
        database: DB.NAME,
        host: DB.HOST,
        username: DB.USER_NAME,
        password: DB.PASSWORD,
        port: DB.PORT, // optional
      });
  }

  /**
   * Initialise models
   */
  async initModels() {
    this.client.link([User]);
    await this.client.sync({});
  }
}