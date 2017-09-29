const pkg = require('../../package.json');

export interface IMetaStore {
    description: string;
    version: string;
}

export default (): IMetaStore => ({ ...pkg });
