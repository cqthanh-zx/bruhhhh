import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

class User extends Model {
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
        status: DataTypes.enum(['active', 'disabled']),
    };

    static defaults = {
        gender: 'others',
        status: 'disabled'
    };
}