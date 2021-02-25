<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require(`@/assets/logo-${$vuetify.theme.isDark ? 'dark' : 'light'}.png`)"
        contain
        max-width="128"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="NewRock Medias"
        weight="bold"
        class="purple--text"
      />

      <base-body>
        <span class="deep-orange--text">NewRock Medias</span> is a production company based in Bloemfontein.<br>
        Offering services ranging from recording in studio to doing live dvd recordings, we keep up with current needs and are currently trendsetters in our field.
        We have introduced live-streaming to our services at affordable rates<br><br>
        We offer great quality on time.
        Contact us to make your event a memorable one
      </base-body>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseInfo',

    props: {
      title: String,
      dark: Boolean,
    },

    data: () => ({
    }),
  }
</script>
