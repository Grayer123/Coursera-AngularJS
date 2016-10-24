(function(){
  'use strict'

  angular.module('ShoppingListCheckOffApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .provider('CheckOffService', CheckOffServiceProvider);
    // .config(Config);

    // Config.$inject = ['ShoppingListServiceProvider'];
    // function Config(ShoppingListServiceProvider) {
    //   // Save Yaakov from himself
    //   ShoppingListServiceProvider.defaults.maxItems = 2;
    // }

    //ToBuy Controller
    ToBuyController.$inject = ['CheckOffService'];
    function ToBuyController(CheckOffService){
      var toBuyList = this;

      toBuyList.items = CheckOffService.getToBuyItems();

      toBuyList.checkOffItem = function(itemIndex){
        CheckOffService.checkOffItem(itemIndex);
      }

      toBuyList.checkIfEmpty = function(){
        return CheckOffService.checkIfToBuyEmpty();
      }
    }


    //Already Bought Controller
    AlreadyBoughtController.$inject = ['CheckOffService'];
    function AlreadyBoughtController(CheckOffService){
      var boughtList = this;

      boughtList.items = CheckOffService.getBoughtItems();

      boughtList.checkIfEmpty = function(){
        return CheckOffService.checkIfBoughtEmpty();
      }
    }

    function CheckOffService(){
      var service = this;

      //List of to buy items
      var toBuyItems = [
        { name: "cookies",
          quantity: 10
        },
        { name: "Peas",
          quantity: 5
        },
        { name: "Almond",
          quantity: 3
        },
        { name: "Egg-tart",
          quantity: 5
        },
        { name: "pistachio",
          quantity: 2
        },
        { name: "Banana",
          quantity: 8
        }];

      //List of bought items
      var boughtItems = [];

      service.getToBuyItems = function(){
        return toBuyItems;
      }

      service.getBoughtItems = function(){
        return boughtItems;
      }

      service.checkOffItem = function(itemIndex){
        var item = (toBuyItems.splice(itemIndex, 1))[0];
        boughtItems.push(item);
      }

      //true for not empty;
      service.checkIfToBuyEmpty = function(){
        return toBuyItems.length > 0;
      }

      //true for not empty;
      service.checkIfBoughtEmpty = function(){
        return boughtItems.length > 0;
      }
    }

    function CheckOffServiceProvider(){
      var provider = this;

  		// provider.defaults = {
  		// 	maxItems : 5
  		// };

      provider.$get = function(){
          var checkOff = new CheckOffService();

          return checkOff;
      };
  }

})();
