<template>
  <base-section id="404">
    <base-img
      :src="require('@/assets/logo.png')"
      class="mx-auto mb-12"
      contain
      height="150"
      width="250"
    />

    <base-heading title="404" />

    <div class="text-center">
      <base-btn :to="{ name: 'Home' }">
        Gerrara Here
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'FourOhFour',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
