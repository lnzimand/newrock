<template>
  <v-theme-provider>
    <section id="hero">
      <v-container class="fill-height">
        <v-carousel
          cycle
          :interval="interval"
          :show-arrows="false"
          max-width="100%"
          hide-delimiters
          delimiter-icon="mdi-minus"
          gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
        >
          <v-carousel-item
            v-for="i in 18"
            :key="i"
            :src="require(`@/assets/newrock-${i}.jpg`)"
          >
            <v-responsive
              class="d-flex align-center"
              height="100%"
              max-width="700"
              width="100%"
            >
              <base-heading
                class="orange--text"
                title="NewRock Audio"
              />

              <div
                :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
                class="d-flex flex-wrap"
              >
                <base-btn
                  href="Services"
                >
                  Services
                </base-btn>

                <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

                <base-btn
                  :ripple="false"
                  class="pa-1"
                  height="auto"
                  text
                  href="Events"
                >
                  Previous Events
                </base-btn>
              </div>
            </v-responsive>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    data () {
      return {
        interval: 8000,
      }
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
