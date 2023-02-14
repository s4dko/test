const path = require('path');
const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
    eslint: {
        enable: false
    },
    webpack: {
        alias: {
            '@atoms': resolvePath('./src/components/atoms'),
            '@molecules': resolvePath('./src/components/molecules'),
            '@organisms': resolvePath('./src/components/organisms'),
            '@pages': resolvePath('./src/pages'),
            '@home': resolvePath('./src'),
        },
    }
}