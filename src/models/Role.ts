import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

class Role extends Model {
    static table = 'roles'
    static timestamps = true;
    static fields = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: DataTypes.string(25),
        description: DataTypes.string(50),
        status: DataTypes.enum(['active', 'disabled']),
    };

    static defaults = {};
}

export default Role;

export interface IRole {
    name: string;
    description: string;
    status: string
}