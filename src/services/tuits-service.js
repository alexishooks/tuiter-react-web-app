import axios from 'axios';
const API_BASE = process.env.DB_CONNECTION_STRING;
const TUITS_API = `${API_BASE}/tuits`;

export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
}

export const deleteTuit = async (tid) => {
  const response = await axios
  .delete(`${TUITS_API}/${tid}`)
  return response.data;
}

export const createTuit = async (tid) => {
  const response = await axios.post(TUITS_API, tid)
  return response.data;
}

export const updateTuit = async (tuit) => {
  await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}





