<script>
import UserComponent from "./UserComponent.vue";
import CurrentUser from "./CurrentUser.vue";

export default {
  name: "UserList",
  components: {CurrentUser, UserComponent},
  data() {
    return {
      users: [],
      currentIdx: null,
    };
  },
  methods: {
    setCurrentIdx(idx) {
      if (typeof idx === "number") {
        this.currentIdx = idx;
      } else {
        this.currentIdx = null;
      }
    },
    saveUser(obj) {
      const {idx, name, last, mail} = obj;
      this.users[idx] = {
        ...this.users[idx],
        firstName: name,
        lastName: last,
        email: mail,
      };
    }
  },
  created() {
    setTimeout(() => {
      this.users = [
        {
          firstName: "John",
          lastName: "Doe",
          email: "nagibator228@mail.ru",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, culpa."
        },
        {
          firstName: "Jane",
          lastName: "Doherty",
          email: "lol123@mail.ru",
          bio: "Ab dolor fugit impedit possimus praesentium repudiandae sequi similique temporibus."
        },
        {
          firstName: "Max",
          lastName: "Maximus",
          email: "wqerty@mail.ru",
          bio: "Architecto fugiat id ipsa minima, nisi perferendis repudiandae rerum soluta."
        },
      ];
    }, 1500);
  }
};
</script>

<template>
  <div>
    <p>Создайте компонент "Список пользователей" (UserList), который будет отображать список пользователей из
      переданного массива. Каждый пользователь должен быть представлен в виде отдельного компонента "Пользователь"
      (User), принимающего пропсы с данными о пользователе (например, имя, фамилия и электронная почта).</p>
    <p>Разработка приложения для отображения информации о книгах
      Требуется создать компонент "Книга" (Book), который будет отображать информацию о книге, такую как название, автор
      и год издания. Компонент "Книга" должен иметь возможность отображать дополнительные детали о книге по требованию
      пользователя. Также необходимо создать компонент "Список книг" (BookList), который будет отображать список книг из
      переданного массива.</p>
    <CurrentUser v-if="Number.isFinite(currentIdx)"
                 :user="users[currentIdx]"/>
    <button type="button"
            @click="setCurrentIdx">Clear
    </button>
    <p v-if="!users.length">Loading...</p>
    <UserComponent v-for="(user, idx) in users"
                   :key="user.firstName"
                   :user="user"
                   :idx="idx"
                   @set-current="setCurrentIdx"
                   @save-user="saveUser"/>

  </div>
</template>

<style scoped
       lang="scss">
p {
  margin-bottom: 2rem;
  text-align: justify;
}
</style>
