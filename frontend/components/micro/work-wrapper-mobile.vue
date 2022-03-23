<template>

	<div>

		<h3 class="mobile-title font-section-title">{{ infosWork.title }}</h3>

		<h4 class="mobile-subtitle font-description-subtitle">{{ infosWork.subtitle }}</h4>

		<div 
			v-for="(line, index, id) in infosWork.description" :key="id" 
			class="mobile-description font-description-text"
		>

			{{ line }}
	
		</div>

	</div>
  
</template>

<script>
export default {


	props: {
		infosWork: {
			type: Object,
			required: true
		}
	},


	mounted() {
		console.log("INFO WORK : ", this.infosWork)
	}

}
</script>

<style lang="scss" scoped>

	@include fontWorkWithUs;


	.mobile {

		&-item {

			padding-top: 5px;
			margin-bottom: 60px;
	
			> * {
				position: relative;
			}

			&::before {
				content: "";
				display: block;
				width: 20px;
				height: 20px;
				background-color: var(--color-primary);
				margin: 0 auto;
				margin-bottom: 30px;
				transform: rotate(45deg);
			}

		}

		&-title {
			text-align: center;
			margin-bottom: 5px;
		}

		&-subtitle {
			text-align: center;
			margin-bottom: 30px;

		}

		&-description {
				font-family: "AktivGrotesk";
				font-weight: 100;
				font-size: 22px;
				line-height: 27px;
		}


	}

</style>