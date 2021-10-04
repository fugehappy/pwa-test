module.exports = {
  presets: ['@magento/peregrine'],
  plugins: [
    [
        'module-resolver',
        {
            root: ['./'],
            extensions: ['.js', '.jsx'],
            alias: {
                '@components': './src/components',
                '@svgs': './src/public/svgs',
                '@talons': './src/talons',
                '@images': './src/public/images',
                '@src': './src'
            }
        }
    ],
    ['react-require'],
    ['inline-react-svg']
  ]
};
