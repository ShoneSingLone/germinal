<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";

export default defineComponent({
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    propperties: {
      get() {
        const onClick = this.onClick;
        const loading = this.loading;
        return _.merge({}, this.configs, { onClick, loading });
      },
    },
    text() {
      if (_.isFunction(this.$slots?.default)) {
        /*
        *
        <xButton :configs="configsSubmit">
          <template #default="{loading}">
            {{ loading ? "loading..." : "Submit" }};
          </template>
        </xButton>
        * */
        return this.$slots.default(this);
      }

      if (_.isFunction(this.configs.text)) {
        return this.configs.text(this) || "";
      }

      return this.configs.text || "";
    },
  },
  watch: {
    configs: {
      immediate: true,
      handler(configs) {
        this.loading = !!configs.loading;
      },
    },
  },
  created() {},
  methods: {
    async onClick() {
      if (_.isFunction(this.configs.onClick)) {
        this.loading = true;
        try {
          await this.configs.onClick(this);
        } catch (e) {
          console.error(e);
        } finally {
          this.loading = false;
        }
      }
    },
  },
  render(h) {
    return <Button {...this.propperties}>{this.text}</Button>;
  },
});
</script>
