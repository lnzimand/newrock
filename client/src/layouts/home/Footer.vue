<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in social">
              <a
                :key="s"
                class="white--text pa-1 pa-md-0"
                :href="links[i]"
                target="_blank"
                v-text="s"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${s}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          <span>
            Copyright &copy; {{ new Date().getFullYear() }}
          </span>
          <span
            class="ml-2 orange--text"
          >New</span>
          <span
            class="deep-orange--text elevation-1"
          ><strong>Rock</strong></span>
          <span
            class="purple--text"
          > Medias</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'Facebook',
        'Instagram',
      ],
      links: [
        'https://facebook.com/newrockproduction',
        'https://instagram.com/newrockmedias?igshid=1afosihmmlqad',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
