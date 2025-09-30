import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase';

export const getNumberTotalUsers = async () => {
  const collRef = collection(FirebaseDB, `/users`);
  const querySnapshot = await getDocs(collRef);

  console.log(querySnapshot.size);
};
