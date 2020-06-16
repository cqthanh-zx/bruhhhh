import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';
import { User } from "./User.ts";

export class Role extends Model {

    static table = 'roles'

    static timestamps = true;

    static fields = {
        id: {
            type: DataTypes.UUID,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.string(25),
        description: DataTypes.string(50),
        status: DataTypes.enum(['active', 'disabled']),
    };

    static defaults = {};

    static users(){
        return this.hasMany(User);
    }
}

export interface IRole {
    name: string;
    description: string;
    status: string
}