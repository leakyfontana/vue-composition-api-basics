<template>
    <Teleport to=".modals-container">
        <div v-if="modelValue" :class="isDark ? 'modal-dark' : 'modal'">
            <h1>
                {{ title }}
            </h1>
            <slot />
            <button @click="$emit('update:modelValue')">Hide modal</button>
            <div>
                Username is: {{  userData.username }}
            </div>
        </div>
    </Teleport>
</template>

<script setup>
/*
    imports
*/

import { inject } from 'vue';

/*
    props
*/
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    },
    isDark: {
        type: Boolean,
        default: false
    },
});
/*
    emits
*/
const emit = defineEmits(['update:modelValue']);

/*
    user data
*/

const userData = inject('userData');

</script>

<!-- Using props in the options API -->
<!-- 
<script>
export default {
    props: {
        title: {
           type: String,
           default: 'No title specified' 
        }
    }
}
</script> 
-->

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
.modal-dark {
    background: #333;
    color: white;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>