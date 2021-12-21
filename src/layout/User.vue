<script setup>
import logoImg from "../assets/logo.png";
import backgroundImg from "../assets/background.svg";
import SelectLanguage from "lsrc/components/SelectLanguage/SelectLanguage.vue";
import { StateApp } from "lsrc/state/StateApp";

const styles = {
  container: `background:#f0f2f5 url(${backgroundImg}) no-repeat 50%;`,
};
</script>

<template>
  <div
    id="userLayout"
    :class="['user-layout-wrapper', AppState.isMobile && 'mobile']"
  >
    <div
      class="container"
      :style="styles.container"
    >
      <div class="user-layout-lang">
        <SelectLanguage class="select-lang-trigger" />
      </div>
      <div class="user-layout-content">
        <div class="top">
          <div class="header">
            <a href="/">
              <img
                :src="logoImg"
                class="logo"
                alt="logo"
              >
              <span class="title">{{ $t("login.title").label }}</span>
            </a>
          </div>
          <div class="desc">
            {{ $t("layouts.userLayout.title").label }}
          </div>
        </div>

        <router-view />

        <div class="footer">
          <div class="links">
            <a href="_self">帮助</a>
            <a href="_self">隐私</a>
            <a href="_self">条款</a>
          </div>
          <div class="copyright">
            Copyright &copy; 2018 vueComponent
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
