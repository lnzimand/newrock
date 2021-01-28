<template>
  <v-system-bar
    v-if="model"
    app
    class="orange"
    height="58"
  >
    <v-img
      src="@/assets/sysbar.jpg"
      height="58"
      width="100%"
    />
  </v-system-bar>
</template>

<script>
  export default {
    name: 'HomeSystemBar',

    data: () => ({
      model: true,
    }),
  }
</script>
