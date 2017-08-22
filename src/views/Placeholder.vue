<template>
    <div id="placeholder">
        <center>
            <i class="large material-icons">{{ icon }}</i>
            <br />
            <div id="placeholder-text">
                {{ text }}
            </div>

        </center>
    </div>
</template>

<script>
export default {
    props: ['text', 'icon'],
    name: 'placeholder'
}
</script>

<style scoped>
i {
    color: #bdbdbd;
}

#placeholder {
    /* position: relative; */
  padding-top: 10em;
  /* transform: translateY(-50%); */
}

#placeholder-text {
    font-size: 25px;
    color: #bdbdbd
}
</style>
