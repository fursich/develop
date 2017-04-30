(function(){Spree.AddStockItemView=Backbone.View.extend({initialize:function(){return this.$countInput=this.$("[name='count_on_hand']"),this.$locationSelect=this.$("[name='stock_location_id']"),this.$backorderable=this.$("[name='backorderable']")},events:{"click .submit":"onSubmit"},validate:function(){var t;return t=this.$locationSelect.siblings(".select2-container"),t.toggleClass("error",!this.$locationSelect.val()),this.$countInput.toggleClass("error",!this.$countInput.val()),t.hasClass("error")||this.$countInput.hasClass("error")},onSuccess:function(){var t,e,o;return e=this.$locationSelect.find("option:selected"),o=e.text().trim(),e.remove(),t=new Spree.EditStockItemView({model:this.model,stockLocationName:o}),t.$el.insertBefore(this.$el),this.model=new Spree.StockItem({variant_id:this.model.get("variant_id"),stock_location_id:this.model.get("stock_location_id")}),1===this.$locationSelect.find("option").length?this.remove():(this.$locationSelect.select2(),this.$countInput.val(""),this.$backorderable.prop("checked",!1))},onSubmit:function(t){var e;if(t.preventDefault(),!this.validate())return this.model.set({backorderable:this.$backorderable.prop("checked"),count_on_hand:this.$countInput.val(),stock_location_id:this.$locationSelect.val()}),e={success:function(t){return function(){return t.onSuccess(),show_flash("success",Spree.translations.created_successfully)}}(this),error:function(){return function(t,e){return show_flash("error",e.responseText)}}()},this.model.save(null,e)}}),$(function(){return $(".js-add-stock-item").each(function(){var t,e;return t=$(this),e=new Spree.StockItem({variant_id:t.data("variant-id")}),new Spree.AddStockItemView({el:t,model:e})})})}).call(this);