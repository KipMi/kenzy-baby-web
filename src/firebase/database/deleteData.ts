import { getDatabase, get, ref, remove } from "firebase/database";
import { app } from "../config";

const db = getDatabase(app);

export async function deleteDataByPath(path: string) {
  const dbRef = ref(db, path);

  remove(dbRef)
    .then(() => console.log("Data removed"))
    .catch((error) => console.error("Data could not be removed: ", error));
}
