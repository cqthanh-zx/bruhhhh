import { IUser, User } from "../models/User.ts";
import * as HttpStatusCode from "../constants/HttpStatusCode.ts"

const getUsers = async ({ response }: { response: any }) => {
  response.state = HttpStatusCode.OK;
  response.body = await User.all();
};

const getUser = async ({ params, response }: { 
    params: { id: string }; 
    response: any }) => {
  console.log(`User params: ${JSON.stringify(params)}`);
  response.status = HttpStatusCode.OK;
  response.body = `Get UserID ${params.id}`;
};

const addUser = async ({ request, response }: { request: any; response: any }) => {
  try {
    const body = await request.body();
    const data: IUser = body.value;

    console.log('user', data);

    const user = new  User();
    user.dob = data.dob;
    user.email = data.email;
    user.password = data.password;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.password = await User.hashPassword(data.password);
    user.gender = data.gender;

    await user.save();

    response.status = 201;
    response.body = "Create success!";
  } catch(e){
    console.error(e);
    response.status = 500;
    response.body = "Create failed!";
  }
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