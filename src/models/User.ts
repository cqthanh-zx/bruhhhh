import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export class User extends Model {
    static table = 'users'
    static timestamps = true;
    static fields = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        email: DataTypes.string(50),
        firstName: DataTypes.string(25),
        lastName: DataTypes.string(25),
        dob: DataTypes.DATE,
        gender: DataTypes.enum(['male', 'female', 'others']),
        password: DataTypes.string(128),
        status: DataTypes.enum(['active', 'disabled', 'pending_activation']),
    };

    static defaults = {
        gender: 'others',
        status: 'pending_activation'
    };

    static async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(8);
        return bcrypt.hash(password, salt);
    };
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