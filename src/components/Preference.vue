<template>
    <div class="card">
        <div class="card-content">
            <div class="card-title">{{ configTitle }}</div>
            <div id="desc">
                <slot id="prefDesc" name="prefDesc"></slot>
            </div>
            <slot name="prefContent"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['configTitle'],
    name: 'preference',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#desc {
    color: grey;
    padding-bottom: 1em;
}
</style>
