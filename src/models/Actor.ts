import {
	Model,
	Table,
	Column,
	DataType,
	BelongsToMany,
} from 'sequelize-typescript';
import { Movie } from './Movie';
import { MovieActor } from './MovieActor';

@Table({
	tableName: Actor.ACTOR_TABLE_NAME,
	timestamps: true,
})
export class Actor extends Model {
	private static ACTOR_TABLE_NAME = 'Actors' as string;
	private static ACTOR_ID = 'actor_id' as string;
	private static ACTOR_NAME = 'name' as string;

	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		field: Actor.ACTOR_ID as string,
	})
	actorId!: number;

	@Column({
		type: DataType.STRING(100),
		field: Actor.ACTOR_NAME as string,
	})
	name!: string;

	@BelongsToMany(() => Movie, () => MovieActor)
	movies!: Movie[];
}