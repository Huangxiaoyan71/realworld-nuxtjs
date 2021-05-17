<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link
          to="/"
          class="navbar-brand"
        >conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link
              to="/"
              class="nav-link"
              exact
            >Home</nuxt-link>
          </li>

          <template v-if="user">
            <li class="nav-item">
              <nuxt-link
                to="/editor"
                class="nav-link">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/setting"
                class="nav-link">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/profile/1"
                class="nav-link"
              >
                <img
                  class="user-pic"
                  :src="user.image || 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=265704898,674087460&fm=58'"
                  alt="avator" />
                  {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link
                to="/login"
                class="nav-link">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/register"
                class="nav-link">Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <!-- 子路由 -->
    <nuxt-child />

    <!-- 底部 -->
    <footer>
      <div class="container">
        <nuxt-link
          to="/"
          class="logo-font">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LayoutIndex',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>

</style>