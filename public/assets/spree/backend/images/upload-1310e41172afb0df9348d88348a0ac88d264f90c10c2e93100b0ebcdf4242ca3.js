Spree.prepareImageUploader=function(){var e=document.getElementById("upload-zone");if(e){var t=Backbone.View.extend({el:e,events:{dragover:"onDragOver",dragleave:"onDragLeave",drop:"onDrop",'change input[type="file"]':"onFileBrowserSelect"},progressZone:document.getElementById("progress-zone"),initialize:function(){"filereader formdata progress".split(" ").forEach(function(e){this.support[e].className=!1===this.tests[e]?"red":"hidden"},this)},upload:function(e){if(FormData){var t=new r({file:e});t.previewFile(),t.uploadFile();var i=new a({model:t});this.progressZone.appendChild(i.render().el)}},dragClass:"with-images",onDragOver:function(e){this.el.classList.add(this.dragClass),e.preventDefault()},onDragLeave:function(){this.el.classList.remove(this.dragClass)},onDrop:function(e){this.el.classList.remove(this.dragClass),e.preventDefault(),_.each(e.originalEvent.dataTransfer.files,this.upload,this)},onFileBrowserSelect:function(e){_.each(e.target.files,this.upload,this)},tests:{filereader:"undefined"!=typeof FileReader,dnd:"draggable"in document.createElement("span"),formdata:!!window.FormData,progress:"upload"in new XMLHttpRequest},support:{filereader:document.getElementById("filereader"),formdata:document.getElementById("formdata"),progress:document.getElementById("progress")}}),r=Backbone.Model.extend({initialize:function(){this.set({summary:this.get("file").name})},defaults:function(){return{file:null,imgSrc:"",progress:0,serverError:!1,summary:""}},acceptedTypes:{"image/png":!0,"image/jpeg":!0,"image/gif":!0},variantId:document.querySelector('input[name="image[viewable_id]"]').value,previewFile:function(){var e=this.get("file"),t=this;if(FileReader&&!0===this.acceptedTypes[e.type]){var r=new FileReader;r.onload=function(e){t.set({imgSrc:e.target.result})},r.readAsDataURL(e)}else{var a="Uploading "+e.name+" "+(e.size?(e.size/1024|0)+"K":"");this.set({summary:a})}},uploadFile:function(){var e=new FormData,t=this;e.append("image[attachment]",this.get("file")),e.append("image[viewable_id]",this.variantId),e.append("upload_id",this.cid),Spree.ajax({url:window.location.pathname,type:"POST",dataType:"script",data:e,processData:!1,contentType:!1,xhr:function(){return xhr=$.ajaxSettings.xhr(),xhr.upload&&(xhr.upload.onprogress=function(e){if(e.lengthComputable){var r=e.loaded/e.total*100|0;t.set({progress:r})}}),xhr}}).done(function(){t.set({progress:100})}).error(function(){t.set({serverError:!0})})}}),a=Backbone.View.extend({tagName:"div",template:HandlebarsTemplates["products/upload_progress"],initialize:function(){this.listenTo(this.model,"change:progress",this.updateProgressBar),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"destroy",this.remove)},events:{clear:"clear"},className:"col-sm-6 col-md-4 margin-bottom-one",attributes:function(){return{"data-upload-id":this.model.cid}},render:function(){var e=Object.keys(this.model.changed);return 1===e.length&&"progress"==e[0]?this:(this.el.innerHTML=this.template(this.model.attributes),this)},updateProgressBar:function(){var e=this.el.querySelector("progress");return e.value=e.innerHTML=this.model.get("progress"),this},clear:function(){this.model.destroy()}});new t}},Spree.ready(function(){Spree.prepareImageUploader()});