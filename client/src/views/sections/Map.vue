<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.6544550501985!2d26.22342131439033!3d-29.172989982207724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fc5f943f03f73%3A0xc364d205c8f0acac!2s27%20George%20Lubbe%20St%2C%20Hamilton%2C%20Bloemfontein%2C%209301!5e1!3m2!1sen!2sza!4v1613992465604!5m2!1sen!2sza"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'SectionMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
