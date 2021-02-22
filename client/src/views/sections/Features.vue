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
          text: 'We have the best and latest equipment to make your recording of the best possible quality. Every kind of video recording you require we can make for you, from singles to live dvd recordings, we are equipped to help you record anywhere, anytime...from our studio, to theatre and even outdoors. Contact us soon and make your booking on time.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Photography',
          text: 'Our studio is fitted with the best aesthetics for your pictures. We can create any look and customize it to your liking. For all your photo needs, contact us urgently. From music events, weddings, graduations to anything you want memories of. We are at your service.',
        },
        {
          icon: 'mdi-record-rec',
          title: 'Recordings',
          text: 'We record singles in studio, record albums in studio, we specialize in live music therefore your recorded album in our studio will have a live feel as everything will be played live. We even do voice overs and everything that needs to be recorded, we are your best option',
        },
        {
          icon: 'mdi-more',
          title: 'And many more',
          text: 'We have got a wide variety of experienced personnel in the media industry. We can do for your event, lighting, sound, recording, and we will provide the best band, backing vocalists, MCs and a lot of other things you require to have the best event possible. We are unique due to the experience we have in the industry and our innovative ideas sets us apart, our drive for excellence will get your event the best of everything',
        },
      ],
    }),
  }
</script>
