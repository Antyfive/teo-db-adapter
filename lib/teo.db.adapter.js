/*!
 * Teo.JS DB Adapter Abstract implementation
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 2/10/16
 */

"use strict";

const Base = require("teo-base");

module.exports = class TeoDbAdapter extends Base {
    constructor(config) {
        super(config);
        this.createModelsObject();

        this.connected = false;
    }

    applyConfig(config) {
        this.connections = config.connections;
    }

    createModelsObject() {
        this.models = {};
    }


    addModel(key, model) {

    }

    get modelsObject() {
        return this.models;
    }


    * connect() {

    }

    * disconnect() {

    }

    isConnected() {
        return this.connected;
    }
};