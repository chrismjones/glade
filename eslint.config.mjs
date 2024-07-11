// https://eslint.org/docs/latest/use/configure/migration-guide
// https://www.raulmelo.me/en/blog/migration-eslint-to-flat-config
import globals from "globals";
import eslint from "@eslint/js";

export default [
	eslint.configs.recommended,  // This is 'eslint:recommended'
	{
		ignores: ["**/.*", "dist/**", "node_modules/**"],
	},
	{
		files: ["**/*.js"],
		languageOptions: {
			globals: {
				...globals.browser,
				Glade:"writable"
			},
		},
		rules: {
			'max-len': 'off',                            // Allow long comments, such as in JSDoc notation
			'no-multi-spaces': 'off',                    // Allow liberal formatting of imports/exports
        }
	}
];
