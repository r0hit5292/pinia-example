<script setup lang="ts">
import { ref } from 'vue';
import { pointsStore, counterStore } from './useStore';

const counter = counterStore();
counter.setCounter(5);
counter.incrementCounter();

const points = pointsStore();
points.setPoints(5, 7);

const arr :number[][]= [];
let tmp = counter.getCounter;
for (let i = 0; i < tmp; i++) {
	arr.push(points.getPoints);
	points.setPoints(points.getPoints[0] + counter.getCounter, points.getPoints[1])
}
</script>

<template>
	<ul>
		<li  v-for="elem in arr">{{elem}}</li>
	</ul>
</template>

<style scoped>

</style>