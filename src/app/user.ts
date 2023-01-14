import { Role } from "./role";

export class User {
    id!: number
	firstname!: string;
	lastname! : string;
	emailId! : string;
    role! : Role;
    username!:string;
    password!:string;
    name!:string;
}
