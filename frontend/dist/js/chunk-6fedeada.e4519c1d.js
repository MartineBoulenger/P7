(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fedeada"],{a55b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"conteneur"}},[e._m(0),a("div",{attrs:{id:"login"}},[a("div",[a("div",[e._m(1),a("div",{attrs:{id:"lien"}},[a("router-link",{attrs:{to:"/signup"}},[e._v("Inscription")])],1)])]),a("div",[a("div",{attrs:{id:"connect"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataUser.email,expression:"dataUser.email"}],attrs:{type:"email",id:"email",placeholder:"name@example.com","aria-label":"email d'un utilisateur"},domProps:{value:e.dataUser.email},on:{input:function(t){t.target.composing||e.$set(e.dataUser,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataUser.password,expression:"dataUser.password"}],attrs:{type:"password",id:"password-input",placeholder:"Votre mot de passe","aria-label":"Mot de passe d'un utilisateur"},domProps:{value:e.dataUser.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin(t)},input:function(t){t.target.composing||e.$set(e.dataUser,"password",t.target.value)}}}),a("button",{staticClass:"btn",attrs:{type:"submit","aria-label":"Connexion d'un utilisateur"},on:{click:function(t){return t.preventDefault(),e.submitLogin(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin(t)}}},[e._v("Se connecter")])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"accueil"}},[a("div",[a("i",{staticClass:"fas fa-user-friends"}),a("p",[e._v("Apprenez à connaître votre entourage professionnel.")])]),a("div",[a("i",{staticClass:"fas fa-image"}),a("p",[e._v("Partagez vos expériences.")])]),a("div",[a("i",{staticClass:"far fa-comments"}),a("p",[e._v("Rejoignez la conversation.")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"title"}},[a("h3",[e._v("Connexion")])])}],i=a("bc3a"),r=a.n(i),o={name:"login",data:function(){return{dataUser:{email:"",password:""}}},methods:{submitLogin:function(){var e=this;null!==this.email||null!==this.password?r.a.post("http://localhost:3000/api/users/login",this.dataUser).then((function(t){localStorage.setItem("token",t.data.token),e.$cookies.set("token",t.data.token,"1d"),e.$router.push("/")})).catch((function(e){console.log(e.response)})):alert("L'un des champs n'est pas renseigné !")}}},l=o,d=(a("d6db"),a("2877")),u=Object(d["a"])(l,n,s,!1,null,null,null);t["default"]=u.exports},d6db:function(e,t,a){"use strict";a("e67a")},e67a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-6fedeada.e4519c1d.js.map