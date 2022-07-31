import { confirmUserPrefix } from '../../constants/redisPrefixes';
import {v4} from 'uuid';
import { redis } from '../../../redis';

export const createConfirmationUrl = async (userId: number) => {
    const token = v4();
    await redis.set(confirmUserPrefix + token, userId, "EX", 60 * 60 * 24);

    return `http://localhost:3000/user/confirm/${token}`;
};