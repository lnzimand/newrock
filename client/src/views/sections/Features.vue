<template>
  <base-section
    id="features"
    class="purple"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-video',
          title: 'Video Recording',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam quidem obcaecati mollitia ipsam soluta reiciendis suscipit error aliquid provident enim, velit odio tempora officiis quod repellat vero voluptate qui!',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Photography',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam quidem obcaecati mollitia ipsam soluta reiciendis suscipit error aliquid provident enim, velit odio tempora officiis quod repellat vero voluptate qui!',
        },
        {
          icon: 'mdi-record-rec',
          title: 'Recordings',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam quidem obcaecati mollitia ipsam soluta reiciendis suscipit error aliquid provident enim, velit odio tempora officiis quod repellat vero voluptate qui!',
        },
        {
          icon: 'mdi-more',
          title: 'And many more',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam quidem obcaecati mollitia ipsam soluta reiciendis suscipit error aliquid provident enim, velit odio tempora officiis quod repellat vero voluptate qui!',
        },
      ],
    }),
  }
</script>
