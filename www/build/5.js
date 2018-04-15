webpackJsonp([5],{

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audioplay_audioplay__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, modalCtrl, angFire) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.audiosRef = angFire.collection('audio_1');
        this.audios = this.audiosRef.valueChanges();
    }
    ListMasterPage.prototype.audioTest = function (audiof) {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__audioplay_audioplay__["a" /* AudioplayPage */], audiof);
        myModal.present();
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"D:\Projectkikigaki\kikigaki\src\pages\list-master\list-master.html"*/'<ion-header>\n\n    <ion-navbar>\n            <button ion-button menuToggle icon-only>\n                    <ion-icon name=\'menu\'></ion-icon>\n            </button>\n      <ion-title>Playlist</ion-title>\n    </ion-navbar> \n  </ion-header>\n  \n  <ion-content>\n<ion-list>\n    <ion-item *ngFor="let audio of audios | async">\n      <ion-thumbnail item-start>\n        <img src="assets/img/cd_thumbnail.png">\n      </ion-thumbnail>\n      <h2>{{ audio.name }}</h2>\n      <p>{{ audio.type }} • {{ \'MAX_QUEST\' | translate }} {{ audio.max_questions }}</p>\n      <button ion-button clear item-end (click)="audioTest({audiof:audio.audio})">Play</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Projectkikigaki\kikigaki\src\pages\list-master\list-master.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=5.js.map