// Importa a biblioteca Axios.
import axios from "axios";
// import { getToken } from "./services/auth";


const api = axios.create({
    baseURL: "https://apiworkdoor.gentlestone-49dd6d00.brazilsouth.azurecontainerapps.io/"
});

api.interceptors.request.use(async config => {
    // const token = getToken();
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

export default api;
