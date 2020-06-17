import { Database, Relationships } from "https://deno.land/x/denodb/mod.ts";
import { postgresOptions } from "../config/db.ts";

//Map models
import { User } from "../models/User.ts";
import { Role } from "../models/Role.ts";

export class DatabaseController {
  client: Database;

	/**
   * Initialise database client
   */
  constructor() {
    this.client = new Database({ dialect: 'postgres', debug: true }, postgresOptions);
  }

  /**
   * Initialise models
   */
  async initModels() {
    // DB TABLES MAPPING
    // this.client.link([User, Role]);
    const UserRole = Relationships.manyToMany(User, Role);
    this.client.link([UserRole, User, Role]);

    await this.client.sync({ drop: false });
  }
}