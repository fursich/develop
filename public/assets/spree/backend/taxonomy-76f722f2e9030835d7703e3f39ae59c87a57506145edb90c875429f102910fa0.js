(function(){var e,t,n,r,o,a,i,d,u,l,s,c,p,x;Handlebars.registerHelper("isRootTaxon",function(){return null==this.parent_id}),o=function(){return Spree.ajax({url:Spree.routes.taxonomy_path+"?set=nested"})},e=function(e){var t,n,r;return n=e.name,r=e.parent_id,t=e.child_index,Spree.ajax({type:"POST",dataType:"json",url:Spree.routes.taxonomy_taxons_path,data:{taxon:{name:n,parent_id:r,child_index:t}},complete:l})},x=function(e){var t,n,r;return n=e.id,r=e.parent_id,t=e.child_index,Spree.ajax({type:"PUT",dataType:"json",url:Spree.routes.taxonomy_taxons_path+"/"+n,data:{taxon:{parent_id:r,child_index:t}},error:l})},t=function(e){var t;return t=e.id,Spree.ajax({type:"DELETE",dataType:"json",url:Spree.routes.taxonomy_taxons_path+"/"+t,error:l})},n=function(e){var t;return t=HandlebarsTemplates["taxons/tree"],$("#taxonomy_tree").html(t({taxons:[e.root]})).find("ul").sortable({connectWith:"#taxonomy_tree ul",placeholder:"sortable-placeholder ui-state-highlight",tolerance:"pointer",cursorAt:{left:5}})},l=function(){return o().done(n)},s=function(e){var t;return t=e.helper.find(".sortable-handle").outerHeight(),e.placeholder.height(t)},c=function(){return $(".ui-sortable-over").removeClass("ui-sortable-over")},u=function(e){return c(),e.placeholder.parents("ul").addClass("ui-sortable-over")},d=function(e){return x({id:e.data("taxon-id"),parent_id:e.parent().closest("li").data("taxon-id"),child_index:e.index()})},i=function(e){var n;if(n=$(e.target).closest("li"),confirm(Spree.translations.are_you_sure_delete))return t({id:n.data("taxon-id")}),n.remove()},a=function(t){var n,r,o,a;return r=$(t.target).closest("li"),a=r.data("taxon-id"),o="New node",n=0,e({name:o,parent_id:a,child_index:n})},r=function(){return function(t){return t.preventDefault(),o().done(function(t){var n,r,o;return r="New node",o=t.root.id,n=0,e({name:r,parent_id:o,child_index:n})})}},p=function(e){return l(),$("#taxonomy_tree").on({sortstart:function(e,t){return s(t)},sortover:function(e,t){return u(t)},sortstop:c,sortupdate:function(e,t){if(null==t.sender)return d(t.item)}}).on("click",".js-taxon-delete",i).on("click",".js-taxon-add-child",a),$(".add-taxon-button").on("click",r(e))},$(function(){if($("#taxonomy_tree").length)return p($("#taxonomy_tree").data("taxonomy-id"))})}).call(this);