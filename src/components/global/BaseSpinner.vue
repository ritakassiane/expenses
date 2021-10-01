<template>
    <div class="base-spinner fa-3x" v-if='visible'>
        <i class="fas fa-circle-notch fa-spin"></i>
    </div>
</template>
<script>
export default {
    data () {
        return{
            visible: false
        }
    },
    created () {
        //Quando o root ouvir uma ação chamadada Spinner::show
        this.$root.$on('Spinner::show', () => {
            this.visible = true
        }) 
        //Quando o root ouvir uma ação chamadada Spinner::hide
        this.$root.$on('Spinner::hide', () => {
            this.visible = false
        })
    }

    
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables';

.base-spinner {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    z-index: 10000000000;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $dark-medium;
    color: $featured;
}


</style>