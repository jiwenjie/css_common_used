export default {
  data() {
    return {
      testData: ''
    }
  },

  mounted() {
    document.querySelector('.button').addEventListener('mousemove', function (e) {
      const x = e.pageX - this.offsetLeft
      const y = e.pageY - this.offsetTop

      this.style.setProperty('--x', `${ x }px`)
      this.style.setProperty('--y', `${ y }px`)
    })
  },

  methods: {

  },
}
