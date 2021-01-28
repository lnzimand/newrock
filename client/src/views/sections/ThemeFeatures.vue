<template>
  <base-section id="theme-features">
    <base-section-heading title="The preferred choice for live musical entertainment">
      NewRock brings out excellence in producing good quality sound while promoting local artists(band and singers) NewRock prides itself in recording live shows and offering any sound related services, no event is too big or too small for NewRock..
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            <span
              v-if="!readMores[i].readMoreActivated"
            >
              {{ texts[i].slice(0, 150) }}
            </span>
            <span
              v-if="readMores[i].readMoreActivated"
              v-html="texts[i]"
            />
            <a
              v-if="!readMores[i].readMoreActivated"
              href="#"
              @click="activateReadMore(i)"
            >
              read more
            </a>
            <a
              v-if="readMores[i].readMoreActivated"
              href="#"
              @click="deactivateReadMore(i)"
            >
              show less
            </a>
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          color: 'purple',
          title: 'Audio',
          icon: 'mdi-music',
        },
        {
          color: 'orange',
          title: 'Visuals',
          icon: 'mdi-eye',
        },
        {
          color: 'deep-orange',
          dark: true,
          title: 'Audio Based Service',
          icon: 'mdi-music-note',
        },
        {
          color: 'purple lighten-3',
          title: 'Band',
          icon: 'mdi-music-circle',
        },
      ],
      texts: [
        'NewRock Audio perfectly in tune with your venue- Finely tuned for your best perfomance during Pre, in and post production and Your Audience. Whatever the venue or production, NewRock Audio systems sets the standard for the industry. Our staff draws on years of technical experience to get the details right and achieve a perfectly balanced and tuned system to fit every audio need. We supply equipment and production for a wide range of markets, including theatre, live music, television, and corporate events. The Industries’ Best Audio Gear & Technicians inventory of audio gear is well suited for any size production, including consoles, wireless equipment, speaker systems, and signal processing, modifying stock equipment and customizes rigging and cabling to meet a range of audio requirements. NewRockwill supply your productions and events with the industry’s best audio designers, engineers, mixers, and technicians. Let NewRock work with your team to design, coordinate, and build a sound system that meets your audio requirements for your production.',
        "By taking an emotion-driven and artistic approach to video, We’re driven to craft a connection between your fans and your story, your viewers will appreciate our added cinematic visual perspective. NewRock Visuals thrives to provide the best visuals experience for a client. Image Magnification consists of multi-camera shoots of live music events at the arena and outdoor level; anywhere where an artist wants to project an image crowd to best offer the unparalleled front row experience to the perfomance on the stage. The video displays are positioned strategically to support and enhance the live show's audience experience. We can provide LED video and/or projection solutions in various configurations and resolutions to fit the design of the production. Our talented and experienced crews, directors and engineers work together with clients to deliver award-winning results at live show. Whether it’s the latest in projection technology or the cutting edge of LED video modules, we have the experience to support designers, helping to realize all their creative designs. Additionally, we supply the cameras, switching, and controls for Image Magnification systems to support video directors and engineers in capturing the artists and expanding the concert goers experience through images at the show. Expand your audience by providing the flexibility to watch your event or presentation anytime. Record or broadcast live and on-demand streaming for events of all sizes.",
        'Digital Recording UHF / Digital Microphones Delegate Mic Systems Line Array Audio Digital Consoles Concert Sound Noise control Digital/Audio signal processing Sound Localization Mixing Audio Packaging Wireless Monitoring Systems',
        "Need an inspirational and professional quality at it's best. NewRock Band will give comfort and settle experience to always enjoy your performance on the stage and zeal to always look forward to your recorded perfomed material because they are leaders in the music and entertainment industry. Our MD has the professional experience working with clients to create the best event possible. Our professional Vocalists, Guitarists, Bassist, Drummer and Keyboardists always show up on time to deliver the best corelated harmonious accompaniment and music at its best to your events. With the best experience working with the best, by specializing in only one aspect of an event, 'live music,' we absolutely, positively offer you - our client, the best service at the best price. Guaranteed!",
      ],
      readMores: [
        { readMoreActivated: false },
        { readMoreActivated: false },
        { readMoreActivated: false },
        { readMoreActivated: false },
      ],
    }),
    methods: {
      activateReadMore: function (i) {
        this.readMores[i].readMoreActivated = true
        event.preventDefault()
        event.returnValue = ''
      },
      deactivateReadMore: function (i) {
        this.readMores[i].readMoreActivated = false
        event.preventDefault()
        event.returnValue = ''
      },
    },
  }
</script>
