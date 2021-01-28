<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-music"
      title="About our Product"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [
        {
          title: 'First',
          subtitle: 'Anything',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate.',
          callout: '01',
        },
        {
          title: 'Second',
          subtitle: 'Anything',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate.',
          callout: '02',
        },
        {
          title: 'Third',
          subtitle: 'Anything',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate.',
          callout: '03',
        },
      ],
    }),
  }
</script>
