<script setup>
import logoImg from "../assets/logo.png";
</script>

<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <div class="user-layout-lang">
        <select-lang class="select-lang-trigger"/>
      </div>
      <div class="user-layout-content">
        <div class="top">
          <div class="header">
            <a href="/">
              <img :src="logoImg" class="logo" alt="logo"/>
              <span class="title">Ant Design</span>
            </a>
          </div>
          <div class="desc">
            {{ $t("layouts.userLayout.title") }}
          </div>
        </div>

        <router-view/>

        <div class="footer">
          <div class="links">
            <a href="_self">帮助</a>
            <a href="_self">隐私</a>
            <a href="_self">条款</a>
          </div>
          <div class="copyright">Copyright &copy; 2018 vueComponent</div>
        </div>
      </div>
    </div>
  </div>
</template>
