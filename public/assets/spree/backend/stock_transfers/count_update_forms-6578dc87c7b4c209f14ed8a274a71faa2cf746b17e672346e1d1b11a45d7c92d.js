(function(){var e;e=function(){function e(){}var r,t;return e.beginListening=function(e){return $("body").on("click","#listing_transfer_items .fa-edit",function(){return function(e){var r;return e.preventDefault(),r=$(e.currentTarget).data("id"),Spree.NumberFieldUpdater.hideReadOnly(r),Spree.NumberFieldUpdater.showForm(r)}}()),$("body").on("click","#listing_transfer_items .fa-void",function(){return function(e){var r;return e.preventDefault(),r=$(e.currentTarget).data("id"),Spree.NumberFieldUpdater.hideForm(r),Spree.NumberFieldUpdater.showReadOnly(r)}}()),$("body").on("click","#listing_transfer_items .fa-check",function(){return function(n){var a,i,u,s,c,d;return n.preventDefault(),d=$(n.currentTarget).data("id"),s=$("#stock_transfer_number").val(),i=parseInt($("#number-update-"+d+" input[type='number']").val(),10),a={id:d,stockTransferNumber:s},u=e?"receivedQuantity":"expectedQuantity",a[u]=i,c=new Spree.TransferItem(a),c.update(t,r)}}())},t=function(e){return $("#received-transfer-items").length>0?(Spree.NumberFieldUpdater.successHandler(e.id,e.received_quantity),Spree.StockTransfers.ReceivedCounter.updateTotal()):Spree.NumberFieldUpdater.successHandler(e.id,e.expected_quantity),show_flash("success",Spree.translations.updated_successfully)},r=function(e){return show_flash("error",e.responseText)},e}(),null==Spree.StockTransfers&&(Spree.StockTransfers={}),Spree.StockTransfers.CountUpdateForms=e}).call(this);