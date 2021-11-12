module.exports = {
    root: true,
    "globals": {
        "defineProps": true,
        "defineEmits": true,
        "_": true,
        "Germinal": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        /* "linebreak-style": [ "error", "unix" ], */
        "vue/no-multiple-template-root": "off",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
};