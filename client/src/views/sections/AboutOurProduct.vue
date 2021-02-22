<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-music"
      title="Meet the Team  "
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
          title: 'Hana',
          subtitle: 'Nikelo',
          image: 'newrock-1.jpg',
          text: 'With more than 8 years experience as a teacher, Hana is able to deal with and accommodate all personality types, as she is the only lady in the team, she does an excellent job and gives a spark to the aesthetics of all projects the team works on. She is very accommodating and is able to assist all persons with their needs and offers the feminine touch to the team.',
          motto: 'Push until you make it, with God by your side...all is possible.',
          position: 'Shareholder',
          office: 'Client-Relations',
        },
        {
          title: 'Yedidiya',
          subtitle: 'Nikelo',
          image: 'newrock-1.jpg',
          text: 'With more than 10 years experience in the music field, Eddie started as an instrument player, then he moved to being the cable guy, he then became the sound engineer, he is now able to create a sound that is unique to NEWROCK, as our sound is Unique and it is the only one. He is now a producer and an engineer and founder of NewRock.',
          motto: 'Eddie\'s motto.',
          position: 'Founder',
          office: 'Sound Engineer',
        },
        {
          title: 'Thabo',
          subtitle: 'Ngaka',
          image: 'newrock-1.jpg',
          text: 'Thabo has been in the industry for more than 15 years, having founded 2 groups and managed a few artists, he is able to bring the best out of his artists and co-ordinates things accordingly.',
          motto: 'Work on it till you get it right.',
          position: 'Shareholder',
          office: 'Artist Management and Coordinator ',
        },
        {
          title: 'Theo',
          subtitle: 'Mnikes',
          image: 'newrock-1.jpg',
          text: 'Theo has directed music from a very young age, with vast experience across genres, and more than 5 live DVD recordings under his name, with a few playing on national television, he is able to turn any project he is given to its best. His determination and discipline sets him above the rest. He has directed choral music and a few groups, including the Central University of Technology’s choirs. His passion for excellence inspires and pushes the whole team to do best.',
          motto: 'You don’t know how much of it is in your hands.',
          position: 'Shareholder',
          office: 'Project Director and Music Director',
        },
        {
          title: 'Sam',
          subtitle: 'Lehloka',
          image: 'newrock-1.jpg',
          text: 'With more than 15 years experience in the IT field, Sam is able to deal with all situations that might arise that have something and anything to do with computers. He can do everything, from operating cameras, to editing videos and creating the most complex codes. Sam is currently the director of all the videos you see on NewRock as of March 2020.',
          motto: 'Stop pointing out the problem, become part of the solution.',
          position: 'Proxy-Holder',
          office: 'Graphics Director',
        },
        {
          title: 'Majake',
          subtitle: 'Litsooane',
          image: 'newrock-1.jpg',
          text: 'With his calm personality, Majake is able to help the team in making sober decisions. He is never in a hurry and therefore will always offer rational and show hidden points, a very important and strategic man he is.',
          motto: '',
          position: 'Shareholder',
          office: '',
        },
      ],
    }),
  }
</script>
