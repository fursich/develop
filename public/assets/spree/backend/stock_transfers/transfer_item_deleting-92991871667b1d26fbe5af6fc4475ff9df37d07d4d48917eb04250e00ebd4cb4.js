(function(){var e;e=function(){function e(){}var r,n;return e.beginListening=function(){return $("body").on("click","#listing_transfer_items .fa-trash",function(){return function(e){var t,s,a;if(e.preventDefault(),confirm(Spree.translations.are_you_sure_delete))return a=$(e.currentTarget).data("id"),t=$("#stock_transfer_number").val(),s=new Spree.TransferItem({id:a,stockTransferNumber:t}),s.destroy(n,r)}}())},n=function(e){return $("[data-transfer-item-id='"+e.id+"']").remove(),show_flash("success",Spree.translations.deleted_successfully)},r=function(e){return show_flash("error",e.responseText)},e}(),null==Spree.StockTransfers&&(Spree.StockTransfers={}),Spree.StockTransfers.TransferItemDeleting=e}).call(this);