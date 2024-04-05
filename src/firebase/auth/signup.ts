import { app } from "@/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import postData from "../database/createData";

const auth = getAuth(app);

const createUser = async (
  email: string,
  password: string,
  roleId: string,
  username: string
) => {
  let result = null,
    error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    if (result) {
      const userData = {
        email: result.user.email,
        password,
        roleId,
        username,
        createdAt: Math.floor(Date.now() / 1000),
      };

      // await postData('users/' + result.user.uid, userData)
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default createUser;
