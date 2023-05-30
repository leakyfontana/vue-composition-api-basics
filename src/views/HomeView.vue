<template>
  <div class="home">

    <h2>{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>

  </div>
</template>

<!-- Composition API implementation (script setup pattern) -->
<script setup>
/* 
  imports
*/
import { reactive, computed, watch, onMounted } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

/* 
app title
*/

const appTitle = 'My Amazing Counter App';

onMounted(() => {
  console.log('Do stuff related to App Title');
});

/*
Counter
*/

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

watch(() => counterData.count, (newCount) => {
  if (newCount === 20) {
    alert('Way to go you made it to twenty!!!')
  }
});

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) {
    return "even";
  }
  return "odd";
});

const increaseCounter = (amount) => {
  counterData.count += amount;
}

const decreaseCounter = (amount) => {
  counterData.count -= amount;
}

onMounted(() => {
  console.log('Do stuff related to Counter');
});

</script>

<!-- Options API computed properties implementation -->
<!-- <script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    computed: {
      myComputedProperty() {
        // perform logic based on a data property
        return 'my result';
      }
    },
    watch: {
      count(newCount, oldCount) {
        if (newCount == 20) alert('asdfasd');
      }
    },
    mounted() {
      console.log("mounted");
    },
    unmounted() {
      console.log("unmounted");
    },
    directives: {
      autofocus: {
        mounted(el) {
          el.focus()
        }
      }
    }
  }
</script> -->

<!-- Composition API implementation (function setup pattern) -->
<!-- 
<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  }
}
</script> 
-->

<!-- Options API implementation -->
<!-- 
  <script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    },
  }
}
</script> 
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
