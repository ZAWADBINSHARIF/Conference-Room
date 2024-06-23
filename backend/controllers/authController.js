// external import

// internal import
import { db } from "../configs/dbConnection.js";
import generateToken from "../utilities/generateToken.js";
import { getHashPassword, passwordVerifier } from "../utilities/passwordMethod.js";


export async function login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ errors: { msg: "Fill the username and password" } });
        return;
    }

    const sql = `SELECT * FROM admin_user WHERE username=?`;

    try {
        const data = await db.query(sql, [username]);

        if (data.lenght == 0) {
            return res.status(404).json({ errors: { msg: "Username is not exist" } });
        }

        const passwordVerify = await passwordVerifier({ password, hashPassword: data[0].password });

        if (!passwordVerify) {
            return res.status(401).json({ errors: { msg: "Wrong password" } });
        }

        generateToken(res, username);
        res.status(200).json("Admin user logged in");
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: { msg: "Wrong username and password" } });
    }
}

export async function logout(_req, res) {
    res.clearCookie(process.env.COOKIE_NAME);
    res.status(200).json({ msg: "logged out" });
}

export async function authProfileUpdate(req, res) {
    const { username, newPassword, password } = req.body;
    const orginalUsername = req.username;


    let sql = `SELECT * FROM admin_user WHERE username=?`;

    try {
        const data = await db.query(sql, [orginalUsername]);
        console.log(orginalUsername);
        const passwordVerify = passwordVerifier({ password: password, hashPassword: data[0].password });

        if (!passwordVerify) {
            return res.status(401).json({ errors: { msg: "Wrong password" } });
        }

        if (username && newPassword && password) {

            const hashPassword = await getHashPassword({ password: newPassword });
            sql = `UPDATE admin_user SET username=?, password=?`;
            await db.query(sql, [username, hashPassword]);

            return res.status(200).json({ msg: "Profile has been updated" });
        } else if (username && password) {

            sql = `UPDATE admin_user SET username=?`;
            await db.query(sql, [username]);

            return res.status(200).json({ msg: "Profile has been updated" });
        } else {
            return res.status(500).json({ errors: { msg: error.message } });
        }
    }
    catch (error) {
        res.status(500).json({ errors: { msg: error.message } });
        console.log(error);
    }

}