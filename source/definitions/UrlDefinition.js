import React from 'react';

const apiBaseURl = 'https://gateway.marvel.com/v1/public/';
const apiKey = 'd89c919dbb61f12a1764b86bd8e8b73d';
const apiHash = 'da037efefed402e4a5f43a0a3a57c18e';
const apiTs = 'abcdefghijlmanopq';

export default class UrlDefinition {

    static characters(offset, limit) {
      parameters = `&offset=${offset}&limit=${limit}`;
      return this.mountUrl('characters', parameters);
    }

    static comics(id) {
      return this.mountUrl(`characters/${id}/comics`);
    }

    static mountUrl(method, parameters = '') {
      return apiBaseURl + method + "?apikey=" + apiKey + "&hash=" + apiHash + "&ts=" + apiTs + parameters;
    }

}