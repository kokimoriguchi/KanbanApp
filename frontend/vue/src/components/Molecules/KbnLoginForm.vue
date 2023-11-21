<template>
  <!-- novalidateはHTML5のデフォルトのバリデーションを無効にする属性 -->
  <form novalidate>
    <div class="form-item">
      <p>aaaaaa</p>
      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例: kanban@domain.com"
        @focus="resetError"
      />
    </div>
    <div class="form-item">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例: xxxxxxxxxxx"
        @focus="resetError"
      />
    </div>
    <div class="form-actions">
      <KbnButton @click="handleClick"> LOGIN </KbnButton>
      <p v-if="progress" class="login-progress">now loading...</p>
      <p v-if="error" class="login-error">{{ error }}</p>
    </div>
  </form>
</template>

<script>
import KbnButton from "@/components/Atoms/KbnButton.vue";
// ここではauth.jsでexportされているオブジェクトをauthApiというエイリアス名でインポートしている。
import authApi from "@/api/auth.js";
export default {
  name: "KbnLoginForm",

  components: {
    KbnButton,
  },

  data() {
    return {
      email: "",
      password: "",
      progress: false,
      error: "",
    };
  },

  methods: {
    async handleClick() {
      this.progress = true;

      try {
        const response = await authApi.login(this.email, this.password); // APIを叩く
        if (response.data && response.data.token && response.data.userId) {
          this.$store.commit("setAuth", response.data); // $store.commitを使用してVuexのmutationをコミット
          this.$router.push("/board"); // ログイン後はボードページに遷移
        } else {
          console.error("Invalid response data");
        }
      } catch (error) {
        console.error("API request failed:", error); // エラー処理
      }
    },
  },
};
</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
}
label {
  display: block;
}
input {
  width: 100%;
  height: 32px;
  padding: 0;
  margin: 0.25em 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.25em 0;
}
ul li {
  font-size: 0.5em;
}
.validation-errors {
  height: 32px;
}
.form-actions {
  font-size: 0.5em;
}
</style>
