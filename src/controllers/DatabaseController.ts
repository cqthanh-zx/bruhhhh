import { Database, Relationships } from "https://deno.land/x/denodb/mod.ts";
import { DB } from "../configs/index.ts";

//Map models
import { User } from "../models/User.ts";
import { Role } from "../models/Role.ts";

export class DatabaseController {
  client: Database;

	/**
   * Initialise database client
   */
  constructor() {
    this.client = new Database({ dialect: 'postgres', debug: true }, {
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
    // DB TABLES MAPPING

    this.client.link([User]);

    // const UserRole = Relationships.manyToMany(User, Role);
    // this.client.link([UserRole, User, Role]);

    await this.client.sync({});
  }
}