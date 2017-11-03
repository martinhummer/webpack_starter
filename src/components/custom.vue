<template>

</template>

<script>
  export default {
    props: ['test'],
    data() {
      return {

      }
    },
    created () {

    }
  }
</script>

<style lang="scss">
    .modal {
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
    }

    .test {
        font-size: 30px;
        & h1 {
            font-size: 35px;
        }
    }
</style>
