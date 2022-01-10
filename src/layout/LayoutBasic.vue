<script setup lang="jsx">
import { getColor, StateAppActions, StateApp } from "lsrc/state/StateApp";
import MenuTree from "lsrc/components/MenuTree.vue";
import logoImg from "lsrc/assets/logo.png";

const menuTree = [{ id:1,label: "demo1", children: [{ id:2,label: "demo2" }, { id:3,label: "demo3" }] }];

</script>

<template>
  <Layout>
    <LayoutSider
      v-model:collapsed="StateApp.collapsed"
      :trigger="null"
      collapsible
    >
      <img :src="logoImg">
      <MenuTree v-model:tree="menuTree" />
    </LayoutSider>
    <Layout>
      <LayoutHeader style="background: #fff; padding: 0">
        <MenuUnfoldOutlined
          v-if="StateApp.collapsed"
          class="trigger"
          @click="() => (StateApp.collapsed = !StateApp.collapsed)"
        />
        <MenuFoldOutlined
          v-else
          class="trigger"
          @click="() => (StateApp.collapsed = !StateApp.collapsed)"
        />
      </LayoutHeader>
      <LayoutContent
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <RouterView />
      </LayoutContent>
    </Layout>
  </Layout>
</template>
