// export import
import bcrypt from "bcrypt";

export function passwordVerifier({ password, hashPassword }) {
    return bcrypt.compareSync(password, hashPassword);
}

export function getHashPassword({ password }) {
    return bcrypt.hashSync(password, 10);
}