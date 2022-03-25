module.exports = ({ env }) => ({
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				accessKeyId: env('AWSAccessKeyId'),
				secretAccessKey: env('AWSSecretKey'),
				region: env('AWSRegion'),
				params: {
					Bucket: env("AWSBucketName"),
				},
			},
		},
	},
  });