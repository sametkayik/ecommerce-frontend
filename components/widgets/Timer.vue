<template>
  <div>
    <div class="timer">
      <ul id="demo">
        <li>
          <span class="timer-num">{{ days }}</span>Days
        </li>
        <li>
          <span class="timer-num">{{ hours }}</span>Hours
        </li>
        <li>
          <span class="timer-num">{{ minutes }}</span>Minutes
        </li>
        <li>
          <span class="timer-num">{{ seconds }}</span>Seconds
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Timer',
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  props: ['date'],
  data() {
    return {
      timerdate: Math.trunc(new Date(this.date).getTime() / 1000),
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    seconds() {
      return (this.timerdate - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.timerdate - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60 / 24)
    }
  }
}
</script>
