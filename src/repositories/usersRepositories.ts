import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/user";

@EntityRepository(User)
export class usersRepository extends Repository<User> {

}
