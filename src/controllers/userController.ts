import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { User } from '../models/user';
import { usersRepository } from '../repositories/usersRepositories';

export class userController {

    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const UsersRepository = getCustomRepository(usersRepository);

        const userAlreadyExists = await UsersRepository.findOne({ email: email })

        if (userAlreadyExists) {
            return response.status(400).json({ error: 'User already exists!' })
        }

        const user = UsersRepository.create({
            name, email
        })

        await UsersRepository.save(user);

        return response.json(user);
    }
}