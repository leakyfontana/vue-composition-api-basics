<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input v-model="showDarkModals" type="checkbox" />
            </label>
        </div>
        <button v-if="!showModal" @click="showModal = true">Show modal</button>
        <Modal :isDark="showDarkModals" v-model="showModal" @hideModal="showModal = false" title="My modal title (via prop)">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium tenetur molestias tempora
                illo sunt est vero, saepe quae aspernatur voluptates dolor odio vel, ipsa facilis! Exercitationem dicta
                consectetur obcaecati eos illum fuga voluptatibus laudantium ipsa doloribus impedit? Cum et consequuntur
                vitae perferendis voluptatum assumenda. Quisquam recusandae commodi maxime excepturi?</p>
        </Modal>
    </div>
</template>

<script setup>
/*
    imports
*/

import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

/*
    props
*/

/*
    modals
*/

const showDarkModals = ref(false);
const showModal = ref(false);
</script>

<!-- Importing components with the options API -->
<!-- 
<script>
import Modal from '@/components/Modal.vue'

export default {
    components: {
        Modal
    }
}
</script> 
-->