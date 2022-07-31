import { Connection } from "typeorm";
import faker from "@faker-js/faker";


import { gCall } from "../../../test-utils/gCall";
import { testConn } from "../../../test-utils/testConn";
import { User } from "src/entity/User";




let conn: Connection;
beforeAll( async () => {
    conn = await testConn();
});

afterAll(async () => {
    await conn.close()

});

const meQuery = `
 {
    me {
        id
        firstName
        lastName
        email
        name
    }
}

`;

describe("Me", () => {
    it("get user", async () => {
        const user = await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email:  faker.internet.email(),
            password: faker.internet.password()

        }).save()


        
        const response = await gCall({
            source: meQuery,
            userId: user.id
        });
        
        console.log(response);
        expect(response).toMatchObject({
            data: {
                me: {
                    id: `${user.id}`,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }
            }
        })
    });
});

it("return null", async () => {
    const response = await gCall({
        source: meQuery,
        
    });

    expect( response ).toMatchObject({
        data: {
            me: null
        }
    })
})