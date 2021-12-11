module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  }
}
