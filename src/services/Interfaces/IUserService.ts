import { MovieDTO } from '../../dto/MovieDTO';
import { UserDTO } from '../../dto/UserDTO';
import { MovieFavorite } from '../../models/MovieFavorite';
import { User } from '../../models/User';
import { WatchHistory } from '../../models/WatchHistory';
import { WatchLater } from '../../models/WatchLater';

export interface IUserService {
	findOneUser: (searchConditions: any) => Promise<UserDTO>;
	searchUsers: (
		searchConditions: any,
		page: number,
		pageSize: number
	) => Promise<{ users: User[]; count: number }>;
	updateUser: (userData: Partial<User>) => Promise<void>;
	deleteUser: (userId: number) => Promise<void>;
	saveMovieFavorite: (userId: number, movieId: number) => Promise<void>;
	deleteMovieFavorite: (userId: number, movieId: number) => Promise<void>;
	findAllMovieFavorite: (userId: number) => Promise<MovieDTO>;
	saveWatchHistory: (
		userId: number,
		episodeId: number,
		duration: number
	) => Promise<void>;
	getWatchHistory: (
		userId: number,
		episodeId: number
	) => Promise<WatchHistory | null>;
	deleteWatchHistory: (userId: number, episodeId: number) => Promise<void>;
	findAllWatchHistory: (userId: number) => Promise<MovieDTO>;
	saveWatchLater: (userId: number, movieId: number) => Promise<void>;
	deleteWatchLater: (userId: number, movieId: number) => Promise<void>;
	findAllWatchLater: (userId: number) => Promise<MovieDTO>;
	getPresignUrlToUploadAvatar: (userId: number) => Promise<string>;
}
