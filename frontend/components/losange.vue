<template>

	<div ref="losangesContainer" class="losanges-container">

		<div ref="losangeExt" class="losange-ext">

			<div ref="losangeIn" class="losange-in"></div>

			<h3 ref="losangeText" class="losange-in-text">

				<span v-for="letter in letters">
					{{ letter }}
				</span>

			</h3>

		</div>

	</div>

</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				letters: this.text.split("")
			}
		}
	}

</script>

<style lang="scss" scoped>

	$fontSize: 2vw;
	$fontSizeMobile: 3.5vw;
	$borderSize: 2px;

	.losanges-container {
		position: relative;
		width: 100%;
		top: 10vh;
		margin-top: 390px;

		display: flex;
		flex-flow: row nowrap;
		justify-content: center;

		@media #{$mobile} {
			top: 0;
			margin-top: 33vh;
		}
		
		.losange {

			&-ext {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				transform: rotate(45deg);
	
				border: solid $borderSize currentColor;
				// border-left: solid $borderSize currentColor;

				@media #{$mobile} {
					margin-top: 0;
				}

			}

			&-in {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				
				width: min(10vw, 250px);
				height: min(10vw, 250px);
				margin: min(30vw, 600px);
	
				border: solid $borderSize var(--color-primary);

				@media #{$mobile} {
					margin: 150px;
					width: 70px;
					height: 70px;
				}

				&-text {
					position: absolute;
					width: min(70vw, 1000px);

					display: flex;
					justify-content: space-between;

					max-width: $columnMaxWith;
					text-transform: uppercase;
					transform-origin: center center;

					// -35vw refers to the half of the 70vw of with
					// -0.5vw refers to the font-size
					transform: translate(
							calc(-0.5vw - min(35vw, 500px) + 50%), 
							calc(-0.5vw + 50%)
						) 
						rotate(-45deg);

					color: var(--color-white);
					font-family: "PresicavRg";
					font-weight: bold;
					font-size: min($fontSize, 40px);
					letter-spacing: 124px;

					@media #{$mobile} {
						
						font-size: $fontSizeMobile;

						width: 90vw;

						// 45vw is the half of the 90vw of with
						transform: translate(calc(-0.5vw - 45vw + 50%), calc(-0.5vw + 50%)) rotate(-45deg);
					}

					span {
						width: 0;
						text-align: center;

						@media #{$mobile} {
							
							width: 1vw;

						}

					}

				}

			}

		}

	}

</style>
