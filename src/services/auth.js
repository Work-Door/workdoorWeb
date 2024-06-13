export const getToken = () => sessionStorage.getItem("token");

export const getId = () => sessionStorage.getItem("id");

export const getUsuario = () => sessionStorage.getItem("usuario");

export const LogUser = (id, token) => {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("token", token);
};