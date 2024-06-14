import axios from 'axios';
import { BACK_END_URL } from '../constants/api';

const fetchData = async (endpoint: string) => {
  const res = await axios.get(`${BACK_END_URL}/${endpoint}`);
  return res;
};
export default fetchData;
