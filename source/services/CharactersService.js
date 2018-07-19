import axios from 'axios';
import UrlDefinition from '../definitions/UrlDefinition';

export default class CharactersService {

  static list(ofsset, limit) {
    var promise = new Promise(function(resolve, reject) {
      axios.get(UrlDefinition.characters(ofsset, limit)).then(response => {
        if(response.data.code == 200){
          resolve(response.data.data);
        }else{
          reject("Error in API");
        }
      });
    });
    return promise;
  }

  static comics(id) {
    var promise = new Promise(function(resolve, reject) {
      axios.get(UrlDefinition.comics(id)).then(response => {
        if(response.data.code == 200){          
          resolve(response.data.data.results);
        }else{          
          reject("Error in API");
        }
      });
    });
    return promise;
  }

}