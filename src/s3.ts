import aws from "aws-sdk";
import dotenv from "dotenv";
import crypto from "crypto";
import { promisify } from "util";

const randomBytes = promisify(crypto.randomBytes);

dotenv.config();

const region = "us-east-2";
const bucketName = "ratemyinternship-bucket";
const accessKeyId = process.env.BUCKET_ACCESSKEY;
const secretAccessKey = process.env.BUCKET_SECRETKEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export async function GenerateUploadURL() {
  // econding URL to prevent easily guessing name of images
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString("hex");

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}
