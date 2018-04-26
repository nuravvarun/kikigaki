webpackJsonp([9],{

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/audioplay/audioplay.module": [
		656,
		8
	],
	"../pages/content/content.module": [
		657,
		7
	],
	"../pages/item-detail/item-detail.module": [
		658,
		6
	],
	"../pages/list-master/list-master.module": [
		659,
		5
	],
	"../pages/login/login.module": [
		660,
		1
	],
	"../pages/settings/settings.module": [
		661,
		4
	],
	"../pages/signup/signup.module": [
		662,
		0
	],
	"../pages/tabs/tabs.module": [
		663,
		3
	],
	"../pages/tutorial/tutorial.module": [
		664,
		2
	],
	"../pages/welcome/welcome.module": [
		352
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 283;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    WelcomePage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\Projectkikigaki\kikigaki\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n  <div class="scroll-content">\n  <div class="splash-logo"></div>\n  <div padding>\n    <button ion-button block (click)="signup()">{{ \'SIGNUP\' | translate }}</button>\n    <button ion-button block (click)="login()" class="login">{{ \'LOGIN\' | translate }}</button>\n  </div></div>\n</ion-content>\n'/*ion-inline-end:"D:\Projectkikigaki\kikigaki\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ItemDetailPage';
var Tab2Root = 'ListMasterPage';
var Tab3Root = 'ContentPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_audio__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__options__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(311);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AudioplayPage = /** @class */ (function () {
    function AudioplayPage(popoverCtrl, navCtrl, viewCtrl, translateService, angFire, _audioProvider, navParams, modalCtrl, formBuilder, loadingCtrl, file, transfer, media, platform) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
        this._audioProvider = _audioProvider;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.transfer = transfer;
        this.media = media;
        this.platform = platform;
        this.is_playing = false;
        this.is_in_play = false;
        this.is_ready = false;
        this.duration = -1;
        this.position = 0;
        this.options = [
            new __WEBPACK_IMPORTED_MODULE_8__options__["a" /* Options */](1, 'True'),
            new __WEBPACK_IMPORTED_MODULE_8__options__["a" /* Options */](2, 'False'),
        ];
        // assign storage directory
        this.platform.ready().then(function () {
            if (_this.platform.is('ios')) {
                _this.storageDirectory = _this.file.dataDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = _this.file.externalDataDirectory;
            }
        });
        this.title = this.navParams.get('Name');
        this.audiosRef = angFire.doc('audio_1/' + this.navParams.get('Id'))
            .collection('qlist');
        this.questions = this.audiosRef.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    }
    AudioplayPage.prototype.presentPopover = function (myEvent) {
        //let popover = this.popoverCtrl.create();
        //popover.present({
        //  ev: myEvent
        // });
    };
    AudioplayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.stopPlayRecording();
    };
    AudioplayPage.prototype.getValue = function (id) {
        console.log(id);
    };
    AudioplayPage.prototype.submitpaper = function (radioValue) {
        this.selectedOption = this.options.filter(function (item) { return item.id == radioValue; })[0];
        if (this.selectedOption.id = this.options[0].id) {
            console.log('working');
        }
        else {
            console.log('not working');
        }
    };
    AudioplayPage.prototype.ionViewDidLoad = function () {
        this.prepareAudioFile();
        console.log(this.navParams.get('audiof'));
        console.log(this.navParams.get('Id'));
        console.log(this.navParams.get('Name'));
    };
    AudioplayPage.prototype.select = function (value) {
        console.log(value);
    };
    AudioplayPage.prototype.ionViewWillEnter = function () {
        // comment out the following line when adjusting UI in browsers
    };
    AudioplayPage.prototype.prepareAudioFile = function () {
        var _this = this;
        var url = this.navParams.get('audiof');
        console.log(url);
        this.platform.ready().then(function () {
            _this.file.resolveDirectoryUrl(_this.storageDirectory).then(function (resolvedDirectory) {
                // inspired by: https://github.com/ionic-team/ionic-native/issues/1711
                console.log("resolved  directory: " + resolvedDirectory.nativeURL);
                _this.file.checkFile(resolvedDirectory.nativeURL, _this.navParams.get('Name')).then(function (data) {
                    if (data == true) {
                        _this.getDurationAndSetToPlay();
                    }
                    else {
                        console.log("not found!");
                        throw { code: 1, message: "NOT_FOUND_ERR" };
                    }
                }).catch(function (err) {
                    console.log("Error occurred while checking local files:");
                    console.log(err);
                    if (err.code == 1) {
                        // not found! download!
                        console.log("not found! download!");
                        var loading_1 = _this.loadingCtrl.create({
                            content: 'Downloading the song from the web...'
                        });
                        loading_1.present();
                        var fileTransfer = _this.transfer.create();
                        fileTransfer.download(url, _this.storageDirectory + _this.navParams.get('Name')).then(function (entry) {
                            console.log('download complete' + entry.toURL());
                            loading_1.dismiss();
                            _this.getDurationAndSetToPlay();
                        }).catch(function (err_2) {
                            console.log("Download error!");
                            loading_1.dismiss();
                            console.log(err_2);
                        });
                    }
                });
            });
        });
    };
    AudioplayPage.prototype.createAudioFile = function (pathToDirectory, filename) {
        if (this.platform.is('ios')) {
            return this.media.create((pathToDirectory).replace(/^file:\/\//, '') + '/' + filename);
        }
        else {
            return this.media.create(pathToDirectory + filename);
        }
    };
    AudioplayPage.prototype.getDurationAndSetToPlay = function () {
        this.curr_playing_file = this.createAudioFile(this.storageDirectory, this.navParams.get('Name'));
        this.curr_playing_file.play();
        this.curr_playing_file.setVolume(0.0); // you don't want users to notice that you are playing the file
        var self = this;
        this.get_duration_interval = setInterval(function () {
            if (self.duration == -1) {
                self.duration = ~~(self.curr_playing_file.getDuration()); // make it an integer
                // self.duration_string = self.fmtMSS(self.duration);   // replaced by the Angular DatePipe
            }
            else {
                self.curr_playing_file.stop();
                self.curr_playing_file.release();
                self.setRecordingToPlay();
                clearInterval(self.get_duration_interval);
            }
        }, 100);
    };
    AudioplayPage.prototype.getAndSetCurrentAudioPosition = function () {
        var diff = 1;
        var self = this;
        this.get_position_interval = setInterval(function () {
            var last_position = self.position;
            self.curr_playing_file.getCurrentPosition().then(function (position) {
                if (position >= 0 && position < self.duration) {
                    if (Math.abs(last_position - position) >= diff) {
                        // set position
                        self.curr_playing_file.seekTo(last_position * 1000);
                    }
                    else {
                        // update position for display
                        self.position = position;
                    }
                }
                else if (position >= self.duration) {
                    self.stopPlayRecording();
                    self.setRecordingToPlay();
                }
            });
        }, 100);
    };
    AudioplayPage.prototype.setRecordingToPlay = function () {
        var _this = this;
        this.curr_playing_file = this.createAudioFile(this.storageDirectory, this.navParams.get('Name'));
        this.curr_playing_file.onStatusUpdate.subscribe(function (status) {
            // 2: playing
            // 3: pause
            // 4: stop
            _this.message = status;
            switch (status) {
                case 1:
                    _this.is_in_play = false;
                    break;
                case 2:// 2: playing
                    _this.is_in_play = true;
                    _this.is_playing = true;
                    break;
                case 3:// 3: pause
                    _this.is_in_play = true;
                    _this.is_playing = false;
                    break;
                case 4: // 4: stop
                default:
                    _this.is_in_play = false;
                    _this.is_playing = false;
                    break;
            }
        });
        console.log("audio file set");
        this.message = "audio file set";
        this.is_ready = true;
        this.getAndSetCurrentAudioPosition();
    };
    AudioplayPage.prototype.playRecording = function () {
        this.curr_playing_file.play();
    };
    AudioplayPage.prototype.pausePlayRecording = function () {
        this.curr_playing_file.pause();
    };
    AudioplayPage.prototype.stopPlayRecording = function () {
        this.curr_playing_file.stop();
        this.curr_playing_file.release();
        clearInterval(this.get_position_interval);
        this.position = 0;
    };
    AudioplayPage.prototype.controlSeconds = function (action) {
        var step = 15;
        var number = this.position;
        switch (action) {
            case 'back':
                this.position = number < step ? 0.001 : number - step;
                break;
            case 'forward':
                this.position = number + step < this.duration ? number + step : this.duration;
                break;
            default:
                break;
        }
    };
    /*** utility functions ***/
    // this is replaced by the angular DatePipe:
    // https://angular.io/api/common/DatePipe
    AudioplayPage.prototype.fmtMSS = function (s) {
        return (s - // take value s and subtract (will try to convert String to Number)
            (s %= 60) // the new value of s, now holding the remainder of s divided by 60 
        ) / 60 + (
        // (can never result in a fractional value = no need for rounding)
        // to which we concatenate a String (converts the Number to String)
        // who's reference is chosen by the conditional operator:
        9 < s // if    seconds is larger than 9
            ? ':' // then  we don't need to prepend a zero
            : ':0' // else  we do need to prepend a zero
        ) + s; // and we add Number s to the string (converting it to String as well)
    };
    AudioplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-audioplay',template:/*ion-inline-start:"D:\Projectkikigaki\kikigaki\src\pages\audioplay\audioplay.html"*/'<ion-header>\n\n    <ion-navbar>\n            <ion-buttons left>\n            <button ion-button icon-only  (click)="dismiss()">\n                    <ion-icon name="close"></ion-icon>\n            </button>\n            </ion-buttons>\n      <ion-title>{{ title }}</ion-title>\n      <ion-buttons end>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                    <ion-icon name="more"></ion-icon>\n                  </button>\n          </ion-buttons>\n    </ion-navbar> \n    </ion-header>\n\n<ion-content padding="true">\n       \n    <h4>{{ \'QUESTION_TITLE\' | translate }}</h4>\n    <form name="myForm" ng-submit="submitpaper(option.id)">\n    <ion-list *ngFor="let question of questions | async" >\n  \n    <ion-list radio-group (ionChange)="getValue(id)" name="radio">\n        <ion-list-header>\n            {{ question.id }}\n        </ion-list-header>\n            <ion-item>  \n            <ion-label>{{ \'ANS_TRUE\' | translate  }}</ion-label>\n            <ion-radio  value="true" id=question.id></ion-radio>\n            </ion-item>    \n            <ion-item>\n            <ion-label>{{ \'ANS_FALSE\' | translate }}</ion-label>\n            <ion-radio  value="false"id=question.id></ion-radio>\n            </ion-item>\n    </ion-list>\n    </ion-list> \n</form>\n</ion-content>\n\n\n<div class="progress-bar">\n        <ion-range min="0" max="{{duration}}" [(ngModel)]="position"> <!--  [disabled]="is_in_play && is_playing"  -->\n          <!--  <ion-label range-left>{{ position*1000 | date:\'mm:ss\' }}</ion-label>\n            <ion-label range-right *ngIf="duration == -1" >--:--</ion-label>\n            <ion-label range-right *ngIf="duration != -1">{{ duration*1000 | date:\'mm:ss\' }}</ion-label>-->\n          </ion-range>\n </div>\n<ion-footer>\n  <ion-grid>\n\n      <ion-row>\n\n       <ion-col width="33">\n              <button (click)="makebookmark()" color="light" clear ion-button icon-only><ion-icon name="star"></ion-icon></button>\n          </ion-col>\n\n          <ion-col width="33">\n              <button ion-button class="play-pause-btn" (click)="playRecording()" color="primary" *ngIf="!is_playing" [disabled]="!is_ready" clear ion-button icon-only><ion-icon name="play"></ion-icon></button>\n              <button  class="play-pause-btn" (click)="pausePlayRecording()" color="secondary" *ngIf="is_playing" [disabled]="!is_ready" clear ion-button icon-only><ion-icon name="pause"></ion-icon></button>\n          </ion-col>\n        <!--  <ion-fab right bottom>\n            <button  ion-fab> <ion-icon name="checkmark"></ion-icon></button>\n         </ion-fab>-->\n\n          <ion-col width="33">\n              <button type="submit" ng-disabled="checked" color="light" clear ion-button icon-only><ion-icon name="checkmark"></ion-icon></button>\n          </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n'/*ion-inline-end:"D:\Projectkikigaki\kikigaki\src\pages\audioplay\audioplay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_audio__["a" /* AudioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], AudioplayPage);
    return AudioplayPage;
}());

//# sourceMappingURL=audioplay.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(418);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export myCustomAudioProviderFactory */
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_audio__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_firestore__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_audioplay_audioplay__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_vibration__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_media__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_progress_bar_progress_bar__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_audio__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var firebaseConfig = {
    apiKey: "AIzaSyCYK_GRsKygHXQGXbPpPFUHC-XrAWBfMoM",
    authDomain: "kikigakiaudiosdb.firebaseapp.com",
    databaseURL: "https://kikigakiaudiosdb.firebaseio.com",
    projectId: "kikigakiaudiosdb",
    storageBucket: "kikigakiaudiosdb.appspot.com",
    messagingSenderId: "506828991311"
};
function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_26_ionic_audio__["b" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_26_ionic_audio__["d" /* WebAudioProvider */]();
}
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_audioplay_audioplay__["a" /* AudioplayPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/audioplay/audioplay.module#AudioplayPageModule', name: 'AudioplayPage', segment: 'audioplay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic_audio__["c" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_26_ionic_audio__["e" /* defaultAudioProviderFactory */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_audioplay_audioplay__["a" /* AudioplayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_audio__["a" /* NativeAudio */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Options; });
var Options = /** @class */ (function () {
    function Options(id, name) {
        this.id = id;
        this.name = name;
    }
    return Options;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    User.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    User.prototype.signupUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/email")
                .set(email);
        })
            .catch(function (error) {
            console.error(error);
            throw new Error(error);
        });
    };
    User.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    User.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
            .database()
            .ref("/userProfile/" + userId)
            .off();
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signOut();
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_vibration__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(vibration, menuCtrl, user, translate, platform, settings, config, statusBar, splashScreen) {
        var _this = this;
        this.vibration = vibration;
        this.menuCtrl = menuCtrl;
        this.user = user;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Master Detail', component: 'ListMasterPage' },
            { title: 'Settings', component: 'SettingsPage' },
            { title: 'Item Details', component: 'ItemDetailPage' },
            { title: 'Audio Player', component: 'AudioplayPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
            _this.vibration.vibrate(1000);
        });
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyCYK_GRsKygHXQGXbPpPFUHC-XrAWBfMoM",
            authDomain: "kikigakiaudiosdb.firebaseapp.com",
            databaseURL: "https://kikigakiaudiosdb.firebaseio.com",
            projectId: "kikigakiaudiosdb",
            storageBucket: "kikigakiaudiosdb.appspot.com",
            messagingSenderId: "506828991311"
        });
        this.initTranslate();
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */];
                unsubscribe();
            }
            else {
                _this.rootPage = 'TabsPage';
                unsubscribe();
            }
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a
            .database()
            .ref("/userProfile/" + userId)
            .off();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */]);
        this.menuCtrl.close();
        return __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().signOut();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n    <ion-list>\n      <button ion-item (click)=\"openPage(homePage)\">\n        About\n      </button>\n      <button ion-item (click)=\"openPage(friendsPage)\">\n        Settings\n      </button>\n      <button ion-item (click)=\"openPage(eventsPage)\">\n        Review Us\n      </button>\n      <button ion-item (click)=\"logoutUser()\">\n        Log Out\n      </button>\n    </ion-list>\n     \n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"D:\Projectkikigaki\kikigaki\src\components\progress-bar\progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n\n\n    <div>\n        \n    </div>\n'/*ion-inline-end:"D:\Projectkikigaki\kikigaki\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(544);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ })

},[405]);
//# sourceMappingURL=main.js.map