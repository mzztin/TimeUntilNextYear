<script lang="ts">
	import Timer from "$lib/components/Timer.svelte";
	import { deadlines, isNextYear } from "$lib/utils/deadlines";
	import { getTimeLeft } from "$lib/utils/time";

	const deadlinesIndexed = Object.keys(deadlines);
	let time = getTimeLeft();
	let selectedDeadline: string = "2023";

	const reset = () => {
		time = getTimeLeft(new Date(deadlines[selectedDeadline]));
	};

	setInterval(reset, 1000);
</script>

<body />

<Timer {time} text={isNextYear(selectedDeadline) ? "next year" : selectedDeadline} />

<select
	id="years"
	name="Years"
	bind:value={selectedDeadline}
	on:change={(ev) => {
		reset();
	}}
>
	{#each deadlinesIndexed as deadline}
		<option
			value={deadline}
			style={deadline == selectedDeadline ? `color: aliceblue; background-color: red;` : ""}
			>{deadline}</option
		>
	{/each}
</select>

<footer>
	Made by<a class="connection" href="https://github.com/mzztin">Martin</a>with LOVE
</footer>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

	body {
		background-image: url("background.jpg");
        margin: 0;
        border: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

	footer {
		color: aliceblue;
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.connection {
		color: aliceblue;
		margin: 0.5em;
		text-decoration: none;
	}

	.connection:hover {
		color: tomato;
		text-decoration: underline;
	}

	select {
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		font-size: 24px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	select option {
		color: aliceblue;
		background-color: black;
	}

	select:focus {
		outline: none;
		border-color: #0077ff;
		box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
	}

	footer {
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		font-size: 32px;
	}

	select:hover {
		stroke: #0077ff;
	}
</style>
