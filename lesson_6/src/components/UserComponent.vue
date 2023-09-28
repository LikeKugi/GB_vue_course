<script>
export default {
  name: "UserComponent",
  props: {
    user: {
      firstName: String,
      lastName: String,
      email: String,
      bio: String,
    },
    idx: Number,
  },
  emits: ["setCurrent", "saveUser"],
  data() {
    return {
      isVisible: false,
      name: "",
      last: "",
      mail: "",
    };
  },
  created() {
    this.name = this.user.firstName;
    this.last = this.user.lastName;
    this.mail = this.user.email;
  },
  methods: {
    setIsVisible() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<template>
  <div>
    <input placeholder="Name..."
           v-model="name">
    <input placeholder="LastName..."
           v-model="last">
    <input placeholder="Email..."
           v-model="mail">
    <button type="button"
            @click="setIsVisible">{{ isVisible ? "Hide" : "Show bio" }}
    </button>
    <p v-if="isVisible">{{ user.bio }}</p>
    <button @click="$emit('saveUser', {
    idx,
    name,
    last,
    mail,
  })">Save
    </button>
    <button @click="$emit('setCurrent', idx)">Show details</button>
    <hr>
  </div>
</template>

<style scoped>

</style>
