import { NextFunction, Request, Response } from 'express';

async function get_by_place_id(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        res.json({ message: 'all good' });
    } catch (err) {
        console.log(err);
        next(err);
    }
}
export { get_by_place_id };
