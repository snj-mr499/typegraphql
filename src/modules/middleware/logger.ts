import { MyContext } from "src/types/MyContext";
import {MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";

export const logger: MiddlewareFn <MyContext> = async ({ args }, next) => {
    console.log("args: ", args);

    return next();
};