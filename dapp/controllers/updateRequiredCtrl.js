(
  function(){
    angular
    .module("multiSigWeb")
    .controller("updateRequiredCtrl", function($scope, Wallet, Transaction, $routeParams, Utils, $location){
      $scope.address = $routeParams.address;

      Wallet
      .loadJson()
      .then(function(){
        Wallet
        .getRequired($scope.address, function(e, required){
          $scope.required = required.toNumber();
          $scope.$apply();
        }).call();
      });

      $scope.update = function(){
        Wallet.updateRequired($scope.address, $scope.required, function(e, tx){
          if(e){
            Utils.error(e);
          }
          else{
            Utils.notification("Transaction sent, will be mined in next 20s");
            Transaction.add({txHash: tx, callback: function(receipt){
              Utils.success("Required confirmations changed");
              $location.path("/wallet/"+$scope.address);
            }});
          }
        });
      }
    });
  }
)();