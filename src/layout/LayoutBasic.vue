<script setup lang="jsx">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { getColor, StateAppActions, StateApp } from "lsrc/state/StateApp";


</script>

<template>
  <Layout>
    <LayoutSider
      v-model:collapsed="StateApp.collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <Menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <MenuItem key="1">
          <UserOutlined />
          <span>nav 1</span>
        </MenuItem>
        <MenuItem key="2">
          <VideoCameraOutlined />
          <span>nav 2</span>
        </MenuItem>
        <MenuItem key="3">
          <UploadOutlined />
          <span>nav 3</span>
        </MenuItem>
      </Menu>
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
