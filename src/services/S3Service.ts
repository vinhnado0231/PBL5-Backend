import * as Minio from 'minio';
import { Service } from 'typedi';

@Service()
export class S3Service {

    private minioClient: Minio.Client;

    private BUCKET_NAME ='movies';

    private EXPIRATION = 24*60*60;

    constructor() {
        this.minioClient = new Minio.Client({
            endPoint: process.env.MINIO_END_POINT || 'localhost',  
            port: Number(process.env.MINIO_PORT) || 9000,              
            useSSL: false,                 
            accessKey: process.env.MINIO_ACCESS_KEY || 'ftpFjHO7fVotfgaDiO5A',
            secretKey: process.env.MINIO_SECRET_KEY || 'Jx89z4nsbGevSOMDWemErKu3zplNmo03b0WZz1ri',
        });
    }

    getObjectUrl= async (objectName:string, bucketName:string = this.BUCKET_NAME, expiration:number = this.EXPIRATION) =>
    {
        try {
            const url = await this.minioClient.presignedGetObject(bucketName, objectName, expiration);
            return url;
        } catch (err) {
            console.error('Error generating pre-signed URL:', err);
            throw err;
        }
    }

    async generatePresignedUrlUpadte(objectName:string ,bucketName:string = this.BUCKET_NAME, expiration:number= this.EXPIRATION) {
        try {
          const url = await this.minioClient.presignedPutObject(bucketName , objectName, expiration);
          return url;
        } catch (error) {
          console.error('Error generating pre-signed URL:', error);
          throw error; // Rethrow the error for handling later
        }
    }

}