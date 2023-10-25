import { User } from '../models/User';
import { Account } from '../models/Account';
import Authentication from '../utils/Authentication';
import { UserRepository } from '../repository/UserRepository';
import { IAuthenticationService } from './Interfaces/IAuthenticationService';
import Container, { Inject, Service } from 'typedi';
import { IUserRepository } from '../repository/Interfaces/IUserRepository';

@Service()
export class AuthenticationService implements IAuthenticationService {
	@Inject(() => UserRepository)
	private userRepository!: IUserRepository;

	async login(username: string, password: string): Promise<string> {
		const searchConditions = {
			username,
		};
		const user = await this.userRepository.findOneUser(searchConditions);

		if (!user) {
			throw new Error('Bad Request!');
		}
		// check password
		let compare = await Authentication.passwordCompare(
			password,
			user.account.password
		);

		// generate token
		if (compare) {
			return Authentication.generateToken(
				user.userId,
				user.email,
				user.account.username
			);
		}
		return '';
	}

	async register(
		email: string,
		dateOfBirth: Date,
		gender: string,
		username: string,
		password: string
	): Promise<void> {
		try {
			const hashedPassword: string = await Authentication.passwordHash(
				password
			);
			console.log(this.userRepository);
			const newUser = new User();
			const newAccount = new Account();
			newUser.email = email;
			newUser.dateOfBirth = dateOfBirth;
			newUser.gender = gender;
			newAccount.username = username;
			newAccount.password = hashedPassword;
			newUser.account = newAccount;
			await this.userRepository.createNewUser(newUser, newAccount);
		} catch (error) {
			console.log(error);
			throw new Error('Error register!');
		}
	}
}

// Container.set('AuthenticationService', new AuthenticationService());
