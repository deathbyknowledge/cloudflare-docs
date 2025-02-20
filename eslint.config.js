import pluginUnicorn from "eslint-plugin-unicorn";
import pluginTailwind from "eslint-plugin-tailwindcss";
import pluginJavaScript from "@eslint/js";
import pluginTypeScript from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginAstro from "eslint-plugin-astro";
import pluginReactA11y from "eslint-plugin-jsx-a11y";

import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	pluginUnicorn.configs.recommended,
	...pluginTailwind.configs["flat/recommended"],
	{
		settings: {
			tailwindcss: {
				whitelist: [
					"not-content",
					"sl-hidden",
					"sl-flex",
					"sl-markdown-content",
					"feedback-prompt",
					"bleed",
					"gray",
					"live-code-layout",
					"tryit-sidebar",
					"tryit-code",
				],
			},
		},
	},
	pluginJavaScript.configs.recommended,
	...pluginTypeScript.configs.recommended,
	...pluginAstro.configs.recommended,
	...pluginAstro.configs["jsx-a11y-recommended"],
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		...pluginReact.configs.flat.recommended,
		...pluginReactA11y.flatConfigs.recommended,
		...pluginReact.configs.flat["jsx-runtime"],
	},
	{
		ignores: [".astro/", ".wrangler/", "dist/", ".github/"],
	},
	{
		rules: {
			"no-var": "error",
			"unicorn/prevent-abbreviations": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ ignoreRestSiblings: true },
			],
		},
	},
];
