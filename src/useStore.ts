import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const pointsStore = defineStore('Data', () => {
    const points = ref<{x: number, y: number}>({x: 0, y: 0});
    const setPoints = (x: number, y: number) => {points.value.x = x; points.value.y = y};
    const getPoints = computed(() => [points.value.x, points.value.y]);
    return {points, getPoints, setPoints};
})

export const counterStore = defineStore('counter', () => {
    const counter = ref(0);
    const setCounter = (x: number) => {counter.value = x};
    const incrementCounter = () => {counter.value++};
    const getCounter = computed(() => counter.value);
    return {counter, setCounter, getCounter, incrementCounter};
})