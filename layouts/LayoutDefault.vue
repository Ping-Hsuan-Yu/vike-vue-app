<template>
  <div class="layout">
    <Sidebar>
      <Logo />
      <Link :href="`${baseUrl}/`"> Welcome </Link>
      <Link :href="`${baseUrl}/todo`">To-Do List</Link>
      <Link :href="`${baseUrl}/weather`">Data Fetching</Link>
    </Sidebar>
    <Content><slot /></Content>
  </div>
</template>
<script lang="ts">
import Counter from "../components/Counter.vue";
import Title from "../components/Title.vue";

const components = { Counter,Title };
export default { components };
</script>
<script lang="ts" setup>
import Content from "../components/Content.vue";
import Link from "../components/Link.vue";
import Logo from "../components/Logo.vue";
import Sidebar from "../components/Sidebar.vue";

const baseUrl = import.meta.env.PUBLIC_ENV__BASE_URL ?? ""
</script>

<style>
/* see https://stackoverflow.com/questions/55206901/how-to-import-css-files-in-vue-3-child-components */
@import "./tailwind.css";

body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
  flex-grow: 1;
}
/* Page Transition Animation */
#page-content {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
body.page-is-transitioning #page-content {
  opacity: 0;
}
</style>
