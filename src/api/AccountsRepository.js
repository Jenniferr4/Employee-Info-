// export * from './accountsRepository.js';
import axios from 'axios';

export class AccountsRepository{
    
    url = "https://api.johnlawrimore.com/directory/accounts";
    config = {
        headers: {
            Authorization: 'jlawrimore'
        }
    };

    getAccountsById(id){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
                
        });
    });
    }


    getAccounts() {
        return new Promise((resolve, reject) => {
          axios.get(`${this.url}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
              alert(x);
              reject();
            });
        });
      }



}