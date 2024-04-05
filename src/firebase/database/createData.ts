import {
  DatabaseReference,
  getDatabase,
  push,
  ref,
  set,
} from "firebase/database";
import { app } from "../config";

export default async function postData<T>(path: string, data: T) {
  const db = getDatabase(app);

  const newChildRef = push(ref(db, path));
  // let newChildRef: DatabaseReference;
  // if (newKey) {
  //   newChildRef = push(ref(db, path));
  // } else {
  //   newChildRef = ref(db, path);
  // }

  return set(newChildRef, data)
    .then(() => {
      console.log("Data written successfully");
      return newChildRef.key;
    })
    .catch((error) => {
      console.error("Error writing data: ", error);
      throw error;
    });
}
