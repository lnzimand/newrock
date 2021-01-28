<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field
      v-model="name"
      label="Name"
    />

    <base-text-field
      v-model="emailAddress"
      label="Email"
    />

    <base-text-field
      v-model="subject"
      label="Subject"
    />

    <base-textarea
      v-model="message"
      class="mb-6"
      label="Your Need & Description"
    />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      outlined
      @click="sendmail"
    >
      Send message
    </base-btn>
    <div
      v-if="error"
      class="error mt-3 text-center white--text"
      height="200"
      v-html="error"
    />
    <div
      v-if="success"
      class="success mt-3 text-center white--text"
      height="200"
      v-html="success"
    />
  </div>
</template>

<script>
  import authenticationService from '@/services/authenticateForm'

  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'MAIL US YOUR MESSAGE',
      },
    },
    data () {
      return {
        error: null,
        success: null,
        name: '',
        emailAddress: '',
        subject: '',
        message: '',
      }
    },
    methods: {
      async sendmail () {
        try {
          const response = await authenticationService.sendmail({
            name: this.name,
            emailAddress: this.emailAddress,
            subject: this.subject,
            message: this.message,
          })
          this.success = response.data.success
          this.error = ''
          this.name = ''
          this.emailAddress = ''
          this.subject = ''
          this.message = ''
        } catch (error) {
          this.error = error.response.data.error
          this.success = ''
        }
      },
    },
  }
</script>
