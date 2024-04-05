import { getDatabase, get, ref } from "firebase/database";
import { app } from "../config";

const db = getDatabase(app);

export async function getDataQuery(path: string) {
  const dbref = ref(db, path);

  return get(dbref)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      throw error;
    });
}

export async function getDataById(path: string, id: string) {
  const dbref = ref(db, `${path}/${id}`);

  return get(dbref)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      throw error;
    });
}
