import { IUser, User } from "../models/User.ts";
import * as HttpStatusCode from "../constants/HttpStatusCode.ts"

const getUsers = async ({ response }: { response: any }) => {
  response.state = HttpStatusCode.OK;
  response.body = "Get all users!";
};

const getUser = async ({ params, response }: { 
    params: { id: string }; 
    response: any }) => {
  console.log(`User params: ${JSON.stringify(params)}`);
  response.status = HttpStatusCode.OK;
  response.body = `Get UserID ${params.id}`;
};

const addUser = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body();
  const user: IUser = body.value;
  console.log(`User Data: ${JSON.stringify(user)}`);
  await User.create(user as any);
  response.status = HttpStatusCode.CREATED;
  response.body = user;
};

const updateUser = async ({ params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  console.log(`Update UserID ${params.id}`);
  const body = await request.body();
  const user: IUser = body.value;

  response.status = HttpStatusCode.OK;
  response.body = user;
};

const deleteUser = async ({ params, response }: { 
    params: { id: string }; 
    response: any },
) => {

  console.log(`Delete UserId ${params.id}`);
  response.status = HttpStatusCode.OK;
  response.body = "OK";
};

export {
  getUsers,
  getUser,
  updateUser,
  addUser,
  deleteUser,
};