import * as apiProvider from './provider';

export default class apiCore {
    constructor(options) {
        if (options.getAll) {
            this.getAll = () => {
                return apiProvider.getAll(options.url);
            };
        }

        if (options.getSingle) {
            this.getSingle = () => {
                return apiProvider.getSingle(options.url, id)
            };
        }
    }
}