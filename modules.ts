import { StringValidator } from "./StringValidator.js";

export const numberRegexp = /^[0-9]+$/;

export class Validator implements StringValidator{
    isAcceptable(s: string){
       return s.length === 5 && numberRegexp.test(s);
    }
}
