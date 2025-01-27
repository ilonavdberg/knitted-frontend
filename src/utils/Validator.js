import {jwtDecode} from "jwt-decode";

export function isTokenValid(token) {
    const expirationDate = jwtDecode(token).exp;
    const currentTime = Math.floor(Date.now() / 1000);

    return expirationDate > currentTime;
}