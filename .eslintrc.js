module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint/eslint-plugin'],
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
		worker: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
		tsconfigRootDir: __dirname
	},
	rules: {
		'global-require': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': ['error', { args: 'none' }],
		'no-underscore-dangle': 'off',
		'no-param-reassign': 'off',
		'no-restricted-syntax': 'off',
		'default-case': 'off',
		'consistent-return': 'off',
		'max-classes-per-file': 'off',
		'no-plusplus': 'off',
		'no-bitwise': 'off',
		'class-methods-use-this': 'off',
		'no-continue': 'off',
		// Typescript rules
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ args: 'none' }
		],
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/dot-notation': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				'prefer': 'type-imports',
				'fixStyle': 'inline-type-imports',
				'disallowTypeAnnotations': true
			}
		]
	}
}
