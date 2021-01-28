<template>
  <v-theme-provider light>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-instagram
      </base-icon>

      <base-icon class="ml-4 mb-8">
        mdi-facebook
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Social Media"
      >
        For exciting content and to see our next events, follow us on social media
      </base-section-heading>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="#dd2a7b"
        href="https://instagram.com/newrockmedias?igshid=1afosihmmlqad"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Follow Us

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
      <v-btn
        class="font-weight-bold ml-4"
        color="#3b5998"
        href="https://facebook.com/newrockproduction"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Like Our Page

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
