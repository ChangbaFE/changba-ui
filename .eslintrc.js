module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': [2, { 'allowEmptyCatch': true }],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "brace-style": [1, "stroustrup", { "allowSingleLine": true }],
    "comma-style": [1, "last"],
    "default-case": 2,
    "no-floating-decimal": 2,
    "space-before-function-paren": [1, {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "keyword-spacing": [2, { "after": true }],
    "space-before-blocks": 1,
    "wrap-iife": [2, "any"],
    "no-alert": 2,
    "curly": [2, "all"],
    "no-obj-calls": 2,
    "no-unused-vars": [1, { "vars": "local", "args": "after-used" }],
    "no-invalid-regexp": 2,
    "comma-dangle": [1, "never"],
    "no-undef": 2,
    "no-new": 2,
    "no-extra-semi": 0,
    "no-caller": 1,
    "semi": 0,
    "no-unreachable": 2,
    "no-multi-str": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-trailing-spaces": 1,
    "space-infix-ops": 1,
    "no-with": 2,
    "dot-notation": 1,
    "semi-spacing": 1,
    "key-spacing": [1, { "beforeColon": false, "afterColon": true, "mode": "minimum" }],
    "space-in-parens": [1, "never"],
    "prefer-const": 2,
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'constructor-super': 2,
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'generator-star-spacing': 0,
    'handle-callback-err': [2, '^(err|error)$'],
    'jsx-quotes': [2, 'prefer-single'],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-irregular-whitespace': [2, { skipStrings: false, skipTemplates: false, skipComments: false, skipRegExps: false }],
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unsafe-finally': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'object-curly-spacing': [1, 'always', { objectsInObjects: true }],
    'array-bracket-spacing': [2, 'never'],
    'no-var': 2,

    'vue/max-attributes-per-line': 0,
    'vue/attributes-order': 0,
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/require-default-prop': 0,
    'vue/no-parsing-error': ['error', {
      'abrupt-closing-of-empty-comment': true,
      'absence-of-digits-in-numeric-character-reference': true,
      'cdata-in-html-content': true,
      'character-reference-outside-unicode-range': true,
      'control-character-in-input-stream': true,
      'control-character-reference': true,
      'eof-before-tag-name': true,
      'eof-in-cdata': true,
      'eof-in-comment': true,
      'eof-in-tag': true,
      'incorrectly-closed-comment': true,
      'incorrectly-opened-comment': true,
      'invalid-first-character-of-tag-name': true,
      'missing-attribute-value': true,
      'missing-end-tag-name': true,
      'missing-semicolon-after-character-reference': true,
      'missing-whitespace-between-attributes': true,
      'nested-comment': true,
      'noncharacter-character-reference': true,
      'noncharacter-in-input-stream': true,
      'null-character-reference': true,
      'surrogate-character-reference': true,
      'surrogate-in-input-stream': true,
      'unexpected-character-in-attribute-name': true,
      'unexpected-character-in-unquoted-attribute-value': true,
      'unexpected-equals-sign-before-attribute-name': true,
      'unexpected-null-character': true,
      'unexpected-question-mark-instead-of-tag-name': true,
      'unexpected-solidus-in-tag': true,
      'unknown-named-character-reference': true,
      'end-tag-with-attributes': true,
      'duplicate-attribute': true,
      'end-tag-with-trailing-solidus': true,
      'non-void-html-element-start-tag-with-trailing-solidus': false,
      'x-invalid-end-tag': true,
      'x-invalid-namespace': true
    }],
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': [1, {
      "allowUsingIterationVar": true
    }],
    'vue/require-prop-type-constructor': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'vue/block-spacing': [2, 'always'],
    'vue/brace-style': [1, 'stroustrup', { 'allowSingleLine': true }],
    'vue/comma-dangle': [1, 'never'],
    'vue/key-spacing': [1, { "beforeColon": false, "afterColon": true, "mode": "minimum" }],
    'vue/object-curly-spacing': [1, 'always', { objectsInObjects: true }],
    "vue/space-infix-ops": 1,
    'vue/space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'vue/custom-event-name-casing': 0,
    'vue/multi-word-component-names': 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/test/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
