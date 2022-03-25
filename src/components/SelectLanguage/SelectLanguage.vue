<script setup>
import { GlobalOutlined } from "@ant-design/icons-vue";
import { computed } from "vue";
import { State_UI } from "@ventose/ui";

const languageLabels = {
	"zh-CN": { label: "简体中文", icon: "🇨🇳" },
	"en-US": { label: "English", icon: "🇺🇸" }
};

const Cpt_selectedKey = computed(() => {
	return [State_UI.language];
});

const changeLanguage = ({ key }) => {
	State_UI.language = key;
	setTimeout(() => {
		window.location.reload();
	}, 300);
};
</script>

<template>
	<Dropdown placement="bottomRight">
		<GlobalOutlined />
		<template #overlay>
			<Menu :selected-keys="Cpt_selectedKey" @click="changeLanguage">
				<MenuItem v-for="(locale, prop) in languageLabels" :key="prop">
					<span role="img" :aria-label="locale.label"> {{ locale.icon }} </span>
					<span>{{ locale.label }}</span>
				</MenuItem>
			</Menu>
		</template>
	</Dropdown>
</template>
