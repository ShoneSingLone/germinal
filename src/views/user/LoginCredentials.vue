<script setup>
import {ITEM_TYPE} from "@ventose/ui/common.js";
import {reactive,defineComponent, createApp} from "vue";
import {$t} from "@language";
import {reactiveItemConfigs} from "@ventose/ui/common";

const handleUsernameOrEmail = _.doNoting;

var a = defineComponent({
  template:`
    <a-input
              size="large"
              type="text"
              :placeholder="$t('user.login.username.placeholder')"
              v-decorator="[
                'username',
                {rules: [{ required: true, message: $t('user.userName.required') }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
              ]"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
  `
});
console.log(a);

const state = reactive({
  configsForm: {
    userName: reactiveItemConfigs({
      value: "",
      size: "large",
      /* 变化的时候重新获取 */
      placeholder: () => $t("user.login.username.placeholder").label,
      rules: [
        {required: true, message: $t("user.userName.required").label},
        {validator: handleUsernameOrEmail},
      ],
    }),
  },
});
</script>

<template>
  <div class="LoginCredentials-form">
    state.configsForm.userName: {{state.configsForm.userName.value}}
    <xItem :configs="state.configsForm.userName"/>
    <div
        data-v-1ecd471f=""
        class="ant-row ant-form-item ant-form-item-with-help"
    >
      <div class="ant-col ant-form-item-control-wrapper">
        <div class="ant-form-item-control has-error">
          <span class="ant-form-item-children"
          ><span
              data-v-1ecd471f=""
              class="
                ant-input-affix-wrapper
                ant-input-affix-wrapper-lg
                ant-input-password
                ant-input-password-large
              "
          ><span class="ant-input-prefix"
          ><i
              data-v-1ecd471f=""
              aria-label="icon: lock"
              class="anticon anticon-lock"
              style="color: rgba(0, 0, 0, 0.25)"
          ><svg
              viewBox="64 64 896 896"
              data-icon="lock"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class=""
          >
                    <path
                        d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"
                    ></path></svg></i></span
          ><input
              placeholder="password: admin or ant.design"
              type="password"
              data-__meta="[object Object]"
              data-__field="[object Object]"
              id="password"
              class="ant-input ant-input-lg"/><span class="ant-input-suffix"
          ><i
              aria-label="icon: eye-invisible"
              tabindex="-1"
              class="anticon anticon-eye-invisible ant-input-password-icon"
          ><svg
              viewBox="64 64 896 896"
              data-icon="eye-invisible"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class=""
          >
                    <path
                        d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"
                    ></path>
                    <path
                        d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"
                    ></path></svg></i></span></span
          ></span>
          <div class="ant-form-explain">Please enter your password!</div>
        </div>
      </div>
    </div>
  </div>
</template>
