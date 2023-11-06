import { Subscription } from '../models/Subscription';
import express, { Request, Response, Router } from 'express';
import Container from 'typedi';
import { SubscriptionService } from '../services/SubscriptionService';

export class SubcriptionController {
	private subscriptionService: SubscriptionService;

	constructor() {
		this.subscriptionService = Container.get(SubscriptionService);
	}

	updateSubcription = async (req: Request, res: Response) => {
		try {
			const { email, idUser } = req.body;

			await this.subscriptionService.updateSubscription(1, new Date());
			return res.status(200).json({
				status: 'Ok!',
				message: 'Successfully',
			});
		} catch (error) {
			res.status(500).json({ error: 'Can not' });
		}
	};

	createSubcriptionType = async (req: Request, res: Response) => {
		try {
			const { name } = req.body;
			await this.subscriptionService.createOrUpdateSubscriptionType(name);
			return res.status(200).json({
				status: 'Ok!',
				message: 'Successfully',
			});
		} catch (error) {
			res.status(500).json({ error: 'Can not' });
		}
	};

	updateSubcriptionType = async (req: Request, res: Response) => {
		try {
			const { name, subcriptionTypeId } = req.body;
			await this.subscriptionService.createOrUpdateSubscriptionType(
				name,
				subcriptionTypeId
			);
			return res.status(200).json({
				status: 'Ok!',
				message: 'Successfully',
			});
		} catch (error) {
			res.status(500).json({ error: 'Can not' });
		}
	};
}
