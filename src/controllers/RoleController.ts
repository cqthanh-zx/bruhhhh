import { IRole } from "../models/Role.ts";
import * as HttpStatusCode from "../constants/HttpStatusCode.ts"

const getRoles = async ( { response }: { response: any }) => {
    response.state = HttpStatusCode.OK;
    response.body = "Get all roles!";
};

const getRole = async ( 
    { params, response }: { params: { id: string }; response: any}
) => {
    console.log(`Role params: ${JSON.stringify(params)}`);
    response.status = HttpStatusCode.OK;
    response.body = `Get RoleID ${params.id}`
};

const addRole = async (
    { request, response }: { request: any; response: any }
) => {
    const body = await request.body();
    const role: IRole = body.value;
    console.log(`Role Data: ${JSON.stringify(role)}`);

    response.status = HttpStatusCode.CREATED;
    response.body = role
};

const updateRole = async (
    { params, request, response }: { params: { id: string }, request: any; response: any }
) => {
    console.log(`Update UserID ${params.id}`);
    const body = await request.body();
    const role: IRole = body.value;

    response.status = HttpStatusCode.OK;
    response.body = role;
};

const deleteRole = async (
    { params, response }: { params: { id: string }; response: any }
) => {

    console.log(`Delete RoleID ${params.id }`);
    response.status = HttpStatusCode.OK;
    response.body = "OK";
}

export {
    getRoles,
    getRole,
    updateRole,
    addRole,
    deleteRole
};