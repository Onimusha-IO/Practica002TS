import axios from "axios";
import env from "dotenv";


const url = "http://localhost:4000";
console.log(url);

const client = axios.create({ baseURL: url });

export default client;
