import axios from 'axios';
import UrlDefinition from '../definitions/UrlDefinition';

export default class CharactersService {

  static get() {

    var promise = new Promise(function(resolve, reject) {
      
      let url = UrlDefinition.characters(0, 20);

      axios.get(url).then(response => {

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