import { MyContext } from "src/types/MyContext";
import {MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";

declare module 'express-session' {
    interface Session {
        userId: any;
    }
  }

export const isAuth: MiddlewareFn <MyContext> = async ({ context }, next) => {
    if (!context.req.session!.userId){
        throw new Error("not authenticated");
    }

    return next();
};