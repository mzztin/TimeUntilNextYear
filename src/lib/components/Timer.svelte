<script lang="ts">
	import type { Time } from "$lib/types/time";

	export let text: string = "next year";
	export let time: Time;
</script>

<h2>Time until {text}</h2>

<div class="timer-container">
	<p>{time.days} days</p>
	<p>{time.hours} hours</p>
	<p>{time.minutes} minutes</p>
	<p>{time.seconds} seconds</p>
</div>

<style>
	p {
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		color: aliceblue;
		font-size: 60px;
	}

	h2 {
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 120px;
		color: aliceblue;
	}

	.timer-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
</style>
