import BaseRoutes from '..//Base/BaseRouter';
import MovieController from './MovieController';
class MovieRoutes extends BaseRoutes {
	public routes(): void {
		this.router.get('/', MovieController.searchMovies);
		this.router.get('/all', MovieController.getAllMovies);
		this.router.delete('/movies/:id', MovieController.deleteMovieById);
		this.router.get('/minio', MovieController.testMinio);

	}
}

export default new MovieRoutes().router;
