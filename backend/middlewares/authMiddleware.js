// external import
import jwt from "jsonwebtoken";

// internal import
import { db } from "../configs/dbConnection.js";

const jwtVerifier = async (req, res) => {

    const token = req?.cookies[process.env.COOKIE_NAME];

    if (token) {

        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
            const sql = `SELECT * FROM admin_user WHERE username=?`;
            const data = await db.query(sql, [decoded.username]);

            if (data.length !== 0) {
                return res.status(200).json({ msg: data[0].username });
            } else {
                res.clearCookie(process.env.COOKIE_NAME);
                res.status(401);

                throw new Error('Your are not authorize. Invalid Token');
            }

        } catch (error) {
            res.clearCookie(process.env.COOKIE_NAME);
            res.status(401);

            throw new Error('Your are not authorize. Invalid Token');
        }

    } else {
        res.status(401).json({ errors: { msg: 'Your are not authorize. No Token' } });
    }
};



const adminVerifier = async (req, res, next) => {

    const token = req?.cookies[process.env.COOKIE_NAME];

    if (token) {

        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
            const sql = `SELECT * FROM admin_user WHERE username=?`;
            const data = await db.query(sql, [decoded.username]);

            if (data.length !== 0) {
                req.username = data[0]?.username;
                return next();
            } else {
                res.clearCookie(process.env.COOKIE_NAME);
                res.status(401);

                throw new Error('Your are not authorize. Invalid Token');
            }

        } catch (error) {
            res.clearCookie(process.env.COOKIE_NAME);
            res.status(401);

            throw new Error('Your are not authorize. Invalid Token');
        }

    } else {
        res.status(401).json({ errors: { msg: 'Your are not authorize. No Token' } });
    }
};



export { jwtVerifier, adminVerifier };