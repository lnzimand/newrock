<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <div
            class="mt-5"
            v-html="text"
          />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: '27 George Lubbe St. Hamilton<br>Bloemfontein 9301, Free State',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '(+27) 76 364 6766',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '(+27) 73 999 6178',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'newrockmedias@gmail.com',
        },
      ],
    }),
  }
</script>
