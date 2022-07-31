import { IsEmail, Length, Min } from "class-validator";
//import { PasswordMixin } from "../../shared/PasswordInput";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";



@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string

  @Field()
  @Length(1, 255)
  lastName: string

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({message: "email already in use"})
  email: string

  @Field()
  @Min(5)
  password: string

}