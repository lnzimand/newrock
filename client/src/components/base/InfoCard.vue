<template>
  <v-theme-provider :dark="dark">
    <v-container class="pa-0">
      <v-row
        :justify="justify"
        no-gutters
      >
        <v-col
          v-if="icon"
          :class="`text-${align}`"
          cols="12"
          class="mb-4"
        >
          <base-icon :color="color">
            {{ icon }}
          </base-icon>
        </v-col>

        <v-col
          v-if="title || subtitle"
          :cols="callout ? 9 : 12"
        >
          <base-subtitle
            v-if="subtitle"
            :title="subtitle"
            space="1"
          />

          <base-title
            :title="title"
            class="text-uppercase"
            space="1"
          />

          <v-col
            v-if="image"
            cols="12"
          >
            <div>
              <template>
                <v-row justify="center">
                  <v-img
                    :src="require(`@/assets/${image}`)"
                    :lazy-src="require(`@/assets/${image}`)"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
                </v-row>
              </template>
            </div>
          </v-col>

          <base-divider :color="color" />

          <div
            v-if="position"
            class="text-subtitle-1 font-weight-black purple--text"
          >
            <div
              v-if="motto"
              class="text-caption font-italic deep-orange--text"
              v-text="motto"
            />
            {{ position }}
            <div>
              <span
                class="text-overline deep-orange--text"
                v-text="office"
              />
            </div>
          </div>

          <base-body
            v-if="text || $slots.default"
            :text="text"
            space="6"
          >
            <slot />
          </base-body>
        </v-col>

        <v-col
          v-if="callout"
          cols="2"
        >
          <div
            class="text-h2 grey--text text--lighten-3 font-weight-bold pr-8"
            v-text="callout"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseInfoCard',

    mixins: [Heading],

    props: {
      dark: Boolean,
      callout: String,
      image: String,
      motto: String,
      position: String,
      office: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
    },
  }
</script>
