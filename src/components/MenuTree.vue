<script setup lang="jsx">
const props = defineProps({
  tree: {
    type: Object,
    default() {
      return [];
    },
  },
});

const genMenu = ()=>{
    const MenuItemRender = (menuInfo)=>{
    if(_.isArrayFill(menuInfo.children)){
        return (    
            <SubMenu v-slots={{ icon:()=><AppleOutlined/>, title:()=>menuInfo.label, default:()=>_.map(menuInfo.children,MenuItemRender) }}/>
        );
    }else{
        return (
            <MenuItem key={menuInfo.id} >{{ icon:()=><UserOutlined/>, default:()=><span>{menuInfo.label}</span> }}</MenuItem>
        );
    }
};
return _.map(props.tree,MenuItemRender);
};
</script>

<template>
  <Menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline"
  >
    <!-- jsx 循环 menuTree -->
    <xRender :render="genMenu" />
    <!-- <xRender
      :render="MenuItemRender"
      :state="menuInfo"
      v-for="menuInfo in props.tree"
      :key="menuInfo.id"
    /> -->
    <!-- <MenuItem key="1">
      <template #icon>
        <UserOutlined />
      </template>
      <span>nav 1</span>
    </MenuItem>
    <MenuItem key="2">
      <VideoCameraOutlined />
      <span>nav 2</span>
    </MenuItem>
    <MenuItem key="3">
      <UploadOutlined />
      <span>nav 3</span>
    </MenuItem> -->
  </Menu>
</template>


