
//import { PasswordMixin } from "../../shared/PasswordInput";
import { Field, InputType } from "type-graphql";
import { Min } from "class-validator";



@InputType()
export class ChangePasswordInput  {
    @Field()
    token: string

    @Field()
    @Min(5)
    password: string
    
}