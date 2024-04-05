import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../config";

const storage = getStorage(app);

export default async function uploadImage(image: File | null) {
  if (image) {
    const storageRef = ref(
      storage,
      `images/main-poster/Poster_${Date.now() / 1000}`
    );

    try {
      const uploadTaskSnapshot = await uploadBytes(storageRef, image);

      console.log("File uploaded");
      return uploadTaskSnapshot;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  }
}
