import { SubscriptionController } from '../controller/SubscriptionController';
import BaseRoutes from './Base/BaseRouter';
class SubscriptionRoutes extends BaseRoutes {
	constructor() {
		super(new SubscriptionController());
	}
	public routes(): void {
		this.router.put('/update-subscription', this.controller.updateSubscription);
		this.router.post(
			'/create-subscription-type',
			this.controller.createSubscriptionType
		);
		this.router.put(
			'/update-subscription-type',
			this.controller.updateSubscriptionType
		);
		this.router.get(
			'/get-all-subscription-type',
			this.controller.getAllSubscriptionType
		);
		this.router.delete(
			'/delete-subscription-type',
			this.controller.deleteSubscriptionType
		);
		this.router.get(
			'/get-all-subscription-info',
			this.controller.getAllSubscriptionInfo
		);
		this.router.post(
			'/create-subscription-info',
			this.controller.createSubscriptionInfo
		);
		this.router.put(
			'/update-subscription-info',
			this.controller.updateSubscriptionInfo
		);
		this.router.delete(
			'/delete-subscription-info',
			this.controller.deleteSubscriptionInfo
		);
	}
}

export default new SubscriptionRoutes().router;
