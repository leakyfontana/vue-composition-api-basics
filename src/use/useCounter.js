import { reactive, computed, watch, onMounted, nextTick } from 'vue';

const counterData = reactive({
    count: 0,
    title: 'My Counter',
});

export const useCounter = () => {
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

    const increaseCounter = async (amount) => {
        counterData.count += amount;
        await nextTick();
        console.log('do something when counter has updated in the dom');
    }

    const decreaseCounter = (amount) => {
        counterData.count -= amount;
    }

    onMounted(() => {
        console.log('Do stuff related to Counter');
    });

    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,
    }
}