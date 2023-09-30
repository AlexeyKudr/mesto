(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=r,this._handleCardClick=n}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._cardLike=this._element.querySelector(".card__like"),this._cardDelete=this._element.querySelector(".card__delete"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._cardDelete.addEventListener("click",(function(){t._onDeleteCard()})),this._cardLike.addEventListener("click",(function(){t._onLikeClick()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_onDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_onLikeClick",value:function(){this._cardLike.classList.toggle("card__like_active")}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=r.formSelector,this._inputSelector=r.inputSelector,this._submitButtonSelector=r.submitButtonSelector,this._inactiveButtonClass=r.inactiveButtonClass,this._inputErrorClass=r.inputErrorClass,this._errorClass=r.errorClass,this._formEl=e,this._buttonElement=this._formEl.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formEl.querySelectorAll(this._inputSelector))}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t){var e=this._formEl.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formEl.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass)}},{key:"_checkValidateInput",value:function(t){var e=this._formEl.querySelector("#".concat(t.id,"-error"));t.validity.valid?(e.textContent=t.validationMessage,this._hideInputError(t)):(e.textContent=t.validationMessage,this._showInputError(t))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.enableSubmitButton()}},{key:"disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled","disabled"),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"enableSubmitButton",value:function(){this._buttonElement.removeAttribute("disabled","disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidateInput(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formEl.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error-message"},l=document.querySelector(".profile__title"),c=document.querySelector("#name-input"),a=document.querySelector("#edit-form"),s=document.querySelector("#input-subtitle"),p=document.querySelector(".profile__subtitle"),f=document.querySelector(".cards"),y=document.querySelector(".popup__add-form"),m=document.querySelector("#card-input-title"),d=document.querySelector("#place-input-subtitle"),v=document.querySelector("#add-popup-button"),b=document.querySelector(".profile__edit-button");function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var S=function(){function t(e,r){var n=e.data,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=document.querySelector(r),this._renderedItems=n}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.append(t)}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=document.querySelector(e),this._closeButton=this._popupSelector.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupSelector.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose.bind(this))}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target===this._popupSelector&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close()})),this._popupSelector.addEventListener("mousedown",(function(e){return t._handleOverlayClose(e)}))}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},O.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._title=e._popupSelector.querySelector(".popup__name-photo"),e._image=e._popupSelector.querySelector(".popup__image-full"),e}return e=u,(r=[{key:"open",value:function(t,e){this._title.textContent=t,this._image.src=e,this._image.alt=t,O(C(u.prototype),"open",this).call(this)}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var B=function(){function t(e){var r=e.profileName,n=e.profileDescription;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=r,this._profileDescription=n}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileDescription.textContent=t.about}}])&&I(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},R.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(n);if(o){var r=V(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._submitForm=n,e._form=e._popupSelector.querySelector(".popup__form"),e._inputList=e._form.querySelectorAll(".popup__input"),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._valuesInput={},this._inputList.forEach((function(e){t._valuesInput[e.name]=e.value})),this._valuesInput}},{key:"setEventListeners",value:function(){var t=this;R(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues()),R(V(u.prototype),"close",t).call(t)}))}},{key:"close",value:function(){R(V(u.prototype),"close",this).call(this),this._form.reset()}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w),A=function(t){return new r(t,".card-template",z).generateCard()},F=new S({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){var e=A(t);F.addItem(e)}},".cards");F.renderItems(),new i(a,u).enableValidation();var U=new i(y,u);U.enableValidation();var M=new L(".popup_black");function z(t,e){M.open(t,e)}M.setEventListeners();var G=new N({popupSelector:"#add-popup",submitForm:function(t){A(t),f.prepend(A({name:m.value,link:d.value})),y.reset(),U.disableSubmitButton(),G.close()}});v.addEventListener("click",(function(){U.disableSubmitButton(),G.open()})),G.setEventListeners();var H=new B({profileName:l,profileDescription:p}),J=new N({popupSelector:"#edit-popup",submitForm:function(t){H.setUserInfo(t),J.close()}});b.addEventListener("click",(function(){var t=H.getUserInfo();c.value=t.name,s.value=t.about,J.open()})),J.setEventListeners()})();