module.exports = ({ env }) => ({
	// upload: {
	//   config: {
	// 	breakpoints: {
	// 	  xlarge: 1920,
	// 	  large: 1000,
	// 	  medium: 750,
	// 	  small: 500,
	// 	  thumbnail: 100,
	// 	  xsmall: 64,
	// 	  custom: 20,
	// 	},
	//   },
	// },
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				accessKeyId: env('AWSAccessKeyId'),
				secretAccessKey: env('AWSSecretKey'),
				region: env('AWSRegion'),
				params: {
					Bucket: "judithagency-uploads",
				},
			},
		},
	},
  });