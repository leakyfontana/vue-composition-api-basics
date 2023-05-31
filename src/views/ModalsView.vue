<template>
    <div class="modals">
        <h1>Modals</h1>
        <button v-if="!showModal" @click="showModal = true">Show modal</button>
        <Teleport to=".modals-container">
            <div v-if="showModal" class="modal">
                <h1>This is a modal</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium tenetur molestias tempora
                    illo sunt est vero, saepe quae aspernatur voluptates dolor odio vel, ipsa facilis! Exercitationem dicta
                    consectetur obcaecati eos illum fuga voluptatibus laudantium ipsa doloribus impedit? Cum et consequuntur
                    vitae perferendis voluptatum assumenda. Quisquam recusandae commodi maxime excepturi?</p>
                <button v-if="showModal" @click="showModal = false">Hide modal</button>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
/*
    imports
*/

import { ref } from 'vue';

/*
    modals
*/

const showModal = ref(false);
</script>

<style>
.modal {
    background: beige;
    color: black;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>