import { defineStore } from 'pinia'

export const useTldrStore = defineStore('tldr', {
  state: () => ({
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget' +
        ' sapien eu magna malesuada convallis. Sed erat nisl, convallis vitae nulla vitae, bibendum finibus nunc. ' +
        'Sed euismod, ex et vulputate malesuada, nisl ex dignissim ex, vitae varius metus elit in libero.',
  }),
})