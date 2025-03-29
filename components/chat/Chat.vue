<template>
  <div class="chat-container">
    <h2 class="chat-title">Chat</h2>

    <div ref="messagesContainer" class="messages-container">
      <div v-for="msg in messages" :key="msg.id" class="message">
        <strong>{{ msg.user }}:</strong> {{ msg.text }}
      </div>
    </div>

    <div class="input-container">
      <input
          v-model="message"
          class="chat-input"
          placeholder="Sent a message..."
          @keyup.enter="sendMessage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      message: "",
      user: "User" + Math.floor(Math.random() * 1000),
    };
  },
  mounted() {
    this.$signalR.on("ReceiveMessage", (user, message) => {
      this.messages.push({user, text: message});
      this.scrollToBottom();
    });
  },
  methods: {
    sendMessage() {
      if (!this.$signalR || this.$signalR.state !== 'Connected') {
        console.error('SignalR bağlantısı hazır değil!');
        return;
      }

      if (this.message.trim() !== "") {
        this.$signalR.invoke("SendMessage", this.user, this.message)
            .catch(err => console.error(err));
        this.message = "";
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer;
        container.scrollTop = container.scrollHeight;
      });
    }
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.chat-title {
  text-align: center;
  background: #014dd1;
  color: white;
  padding: 10px;
  margin: 0;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #f9f9f9;
  min-height: 200px;
}

.message {
  padding: 8px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.input-container {
  padding: 10px;
  background: white;
  border-top: 1px solid #ddd;
}

.chat-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}
</style>
