const pkg = require('../../package.json');

export interface MetaStore {
    description: string,
    version: string
}

export default (): MetaStore =>
    ({...pkg});
