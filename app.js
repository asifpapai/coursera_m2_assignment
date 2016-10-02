(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.service('ShoppingListService', ShoppingListService);

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListService'];
function ShoppingListController1(ShoppingListService) {
  var list1 = this;
  list1.items = ShoppingListService.getItems();

  list1.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListService'];
function ShoppingListController2(ShoppingListService) {
  var list2 = this;

  list2.items = ShoppingListService.sendItems();
}


function ShoppingListService() {
  var service = this;

  var buyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Cake",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Glusil",
      quantity: "5"
    }
  ];

  var boughtItems =[];
  service.removeItem = function (itemIdex) {
    buyItems.splice(itemIdex, 1);
    boughtItems.push(buyItems[itemIdex]);
  };

  service.getItems = function () {
    return buyItems;
  };
  service.sendItems = function () {
    return boughtItems;
  };
}


})();
