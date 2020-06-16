import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';
import { Role } from "./Role.ts";
import nanoid from "https://deno.land/x/nanoid/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export class User extends Model {

    static table = 'users'
    static timestamps = true;

    // Database columns
    static fields = {
        id: {
            type: DataTypes.UUID,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            length: 30
        },
        firstName: DataTypes.string(25),
        lastName: DataTypes.string(25),
        dob: DataTypes.DATE,
        gender: DataTypes.enum(['male', 'female', 'others']),
        password: DataTypes.string(128),
        status: DataTypes.enum(['active', 'disabled', 'pending_activation']),
    };

    id!: number;
    email!: string;
    firstName!: string;
    lastName!: string;
    dob!: string;
    gender!: string;
    password!: string;
    status!: string;

    // Default values
    static defaults = {
        gender: 'others',
        status: 'pending_activation'
    };

    // Hash user's password
    static async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(8);
        return bcrypt.hash(password, salt);
    };

    // Get user's roles
    static roles(){
        // return this.hasMany(Role);
    }
};

export interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    password: string;
    status: string;
};