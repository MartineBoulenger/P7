(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89123124"],{"32a5":function(e,t,a){},"77be":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"profile"}},[a("div",[a("img",{attrs:{src:e.dataUser.photo}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataUser.firstName,expression:"dataUser.firstName"}],staticClass:"coordonees",attrs:{type:"text",placeholder:"First-name","aria-label":"Prénom de l'utilisateur"},domProps:{value:e.dataUser.firstName},on:{input:function(t){t.target.composing||e.$set(e.dataUser,"firstName",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataUser.lastName,expression:"dataUser.lastName"}],staticClass:"coordonees",attrs:{type:"text",placeholder:"Last-name","aria-label":"Nom de famille de l'utilisateur"},domProps:{value:e.dataUser.lastName},on:{input:function(t){t.target.composing||e.$set(e.dataUser,"lastName",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataUser.email,expression:"dataUser.email"}],staticClass:"coordonees",attrs:{type:"email","aria-label":"Email de l'utilisateur",placeholder:"name@example.com"},domProps:{value:e.dataUser.email},on:{input:function(t){t.target.composing||e.$set(e.dataUser,"email",t.target.value)}}}),a("label",{attrs:{id:"img-profile"}},[a("div",{attrs:{role:"button","aria-label":"Téléchargement d'un fichier"}},[e.newUserData.photo?a("span",[e._v("Fichier séléctionné : "+e._s(e.newUserData.photo.name))]):a("span",{staticClass:"ajout"},[e._v("Ajouter un fichier ")])]),a("input",{ref:"photo",staticClass:"fichier",attrs:{type:"file"},on:{change:function(t){return e.handleFileUpload()}}})]),a("div",{attrs:{id:"btn-profile"}},[a("div",[a("button",{staticClass:"maj",attrs:{type:"submit","aria-label":"Modifier les informations utilisateur"},on:{click:function(t){return t.preventDefault(),e.updateUserInformations(t)}}},[e._v("Mettre à jour les informations")])]),a("div",[a("button",{staticClass:"delete",attrs:{type:"submit","aria-label":"Supprimer l'utilisateur"},on:{click:function(t){return t.preventDefault(),e.deleteUser(t)}}},[e._v("Supprimer le compte")])])])])])},s=[],r=(a("b0c0"),a("bc3a")),i=a.n(r),n={name:"account",data:function(){return{cookie:this.$cookies.get("token"),dataUser:{firstName:"",lastName:"",email:"",photo:""},newUserData:{photo:null}}},created:function(){var e=this;i.a.get("http://localhost:3000/api/users/me",{headers:{Authorization:"Bearer "+this.cookie}}).then((function(t){console.log(t.data),e.dataUser=t.data.user}))},methods:{updateUserInformations:function(){var e=this;if(console.log(this.newUserData.photo),null!==this.newUserData.photo){console.log("non null");var t=new FormData;t.append("email",this.dataUser.email),t.append("firstName",this.dataUser.firstName),t.append("lastName",this.dataUser.lastName),t.append("photo",this.newUserData.photo,this.newUserData.photo.name),i.a.put("http://localhost:3000/api/users/me",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.cookie}}).then((function(){console.log("Image téléchargée !"),e.$router.go()})).catch((function(e){return console.log(e)}))}else{console.log("null");var a=new FormData;a.append("email",this.dataUser.email),a.append("firstName",this.dataUser.firstName),a.append("lastName",this.dataUser.lastName),a.append("photo",this.dataUser.photo),i.a.put("http://localhost:3000/api/users/me",a,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.cookie}}).then((function(){console.log("Image téléchargée !"),e.$router.go()})).catch((function(e){return console.log(e)}))}},loadUser:function(){var e=this;i.a.get("http://localhost:3000/api/users/me",{headers:{Authorization:"Bearer "+this.cookie}}).then((function(t){console.log(t.data),e.dataUser=t.data.user}))},handleFileUpload:function(){this.newUserData.photo=this.$refs.photo.files[0]},deleteUser:function(){var e=this;this.$confirm({message:"Êtes-vous sur de vouloir supprimer votre compte ?",button:{no:"No",yes:"Yes"},callback:function(t){if(t){var a=e.dataUser.id;i.a.delete("http://localhost:3000/api/users/"+a,{headers:{Authorization:"Bearer "+e.cookie}}).then((function(t){console.log(t.data),e.$cookies.remove("token"),e.$router.push("/signup")})).catch((function(e){return console.log(e)}))}}})}}},l=n,u=(a("90c7"),a("2877")),c=Object(u["a"])(l,o,s,!1,null,null,null);t["default"]=c.exports},"90c7":function(e,t,a){"use strict";a("32a5")}}]);
//# sourceMappingURL=chunk-89123124.9d6cc2df.js.map