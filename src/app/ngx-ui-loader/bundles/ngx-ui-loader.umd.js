(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/router'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-ui-loader', ['exports', 'rxjs', '@angular/common', '@angular/platform-browser', '@angular/router', '@angular/common/http', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global['ngx-ui-loader'] = {}),global.rxjs,global.ng.common,global.ng.platformBrowser,global.ng.router,global.ng.common.http,global.rxjs.operators,global.ng.core));
}(this, (function (exports,rxjs,common,platformBrowser,router,http,operators,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SPINNER = {
        ballScaleMultiple: 'ball-scale-multiple',
        ballSpin: 'ball-spin',
        ballSpinClockwise: 'ball-spin-clockwise',
        ballSpinClockwiseFadeRotating: 'ball-spin-clockwise-fade-rotating',
        ballSpinFadeRotating: 'ball-spin-fade-rotating',
        chasingDots: 'chasing-dots',
        circle: 'circle',
        cubeGrid: 'cube-grid',
        doubleBounce: 'double-bounce',
        fadingCircle: 'fading-circle',
        foldingCube: 'folding-cube',
        pulse: 'pulse',
        rectangleBounce: 'rectangle-bounce',
        rectangleBounceParty: 'rectangle-bounce-party',
        rectangleBouncePulseOut: 'rectangle-bounce-pulse-out',
        rectangleBouncePulseOutRapid: 'rectangle-bounce-pulse-out-rapid',
        rotatingPlane: 'rotating-plane',
        squareJellyBox: 'square-jelly-box',
        squareLoader: 'square-loader',
        threeBounce: 'three-bounce',
        threeStrings: 'three-strings',
        wanderingCubes: 'wandering-cubes',
    };
    /** @enum {string} */
    var POSITION = {
        bottomCenter: 'bottom-center',
        bottomLeft: 'bottom-left',
        bottomRight: 'bottom-right',
        centerCenter: 'center-center',
        centerLeft: 'center-left',
        centerRight: 'center-right',
        topCenter: 'top-center',
        topLeft: 'top-left',
        topRight: 'top-right',
    };
    /** @enum {string} */
    var PB_DIRECTION = {
        leftToRight: 'ltr',
        rightToLeft: 'rtl',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The default value of task id
     * @type {?}
     */
    var DEFAULT_TASK_ID = 'default';
    /**
     * The default value of loader id
     * @type {?}
     */
    var DEFAULT_MASTER_LOADER_ID = 'master';
    /** @type {?} */
    var CLOSING_TIME = 1001;
    /** @type {?} */
    var WAITING_FOR_OVERLAY_DISAPPEAR = 500;
    /**
     * The configuration of spinners
     * @type {?}
     */
    var SPINNER_CONFIG = {
        'ball-scale-multiple': {
            divs: 3,
            class: 'sk-ball-scale-multiple'
        },
        'ball-spin': {
            divs: 8,
            class: 'sk-ball-spin'
        },
        'ball-spin-clockwise': {
            divs: 8,
            class: 'sk-ball-spin-clockwise'
        },
        'ball-spin-clockwise-fade-rotating': {
            divs: 8,
            class: 'sk-ball-spin-clockwise-fade-rotating'
        },
        'ball-spin-fade-rotating': {
            divs: 8,
            class: 'sk-ball-spin-fade-rotating'
        },
        'chasing-dots': {
            divs: 2,
            class: 'sk-chasing-dots'
        },
        'circle': {
            divs: 12,
            class: 'sk-circle'
        },
        'cube-grid': {
            divs: 9,
            class: 'sk-cube-grid'
        },
        'double-bounce': {
            divs: 2,
            class: 'sk-double-bounce'
        },
        'fading-circle': {
            divs: 12,
            class: 'sk-fading-circle'
        },
        'folding-cube': {
            divs: 4,
            class: 'sk-folding-cube'
        },
        'pulse': {
            divs: 1,
            class: 'sk-pulse'
        },
        'rectangle-bounce': {
            divs: 5,
            class: 'sk-rectangle-bounce'
        },
        'rectangle-bounce-party': {
            divs: 5,
            class: 'sk-rectangle-bounce-party'
        },
        'rectangle-bounce-pulse-out': {
            divs: 5,
            class: 'sk-rectangle-bounce-pulse-out'
        },
        'rectangle-bounce-pulse-out-rapid': {
            divs: 5,
            class: 'sk-rectangle-bounce-pulse-out-rapid'
        },
        'rotating-plane': {
            divs: 1,
            class: 'sk-rotating-plane'
        },
        'square-jelly-box': {
            divs: 2,
            class: 'sk-square-jelly-box'
        },
        'square-loader': {
            divs: 1,
            class: 'sk-square-loader'
        },
        'three-bounce': {
            divs: 3,
            class: 'sk-three-bounce'
        },
        'three-strings': {
            divs: 3,
            class: 'sk-three-strings'
        },
        'wandering-cubes': {
            divs: 2,
            class: 'sk-wandering-cubes'
        },
    };
    /**
     * The default configuration of ngx-ui-loader
     * @type {?}
     */
    var DEFAULT_CONFIG = {
        bgsColor: '#00ACC1',
        bgsOpacity: 0.5,
        bgsPosition: POSITION.bottomRight,
        bgsSize: 60,
        bgsType: SPINNER.ballSpinClockwise,
        blur: 5,
        fgsColor: '#00ACC1',
        fgsPosition: POSITION.centerCenter,
        fgsSize: 60,
        fgsType: SPINNER.ballSpinClockwise,
        gap: 24,
        logoPosition: POSITION.centerCenter,
        logoSize: 120,
        logoUrl: '',
        masterLoaderId: DEFAULT_MASTER_LOADER_ID,
        overlayBorderRadius: '0',
        overlayColor: 'rgba(40, 40, 40, 0.8)',
        pbColor: '#00ACC1',
        pbDirection: PB_DIRECTION.leftToRight,
        pbThickness: 3,
        hasProgressBar: true,
        text: '',
        textColor: '#FFFFFF',
        textPosition: POSITION.centerCenter,
        threshold: 500
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Injection token for ngx-ui-loader configuration
     * @type {?}
     */
    var NGX_UI_LOADER_CONFIG_TOKEN = new i0.InjectionToken('ngxUiLoaderCustom.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiLoaderService = /** @class */ (function () {
        /**
         * Constructor
         * @param config
         */
        function NgxUiLoaderService(config) {
            this.config = config;
            this.defaultConfig = __assign({}, DEFAULT_CONFIG);
            if (this.config) {
                if (this.config.threshold && this.config.threshold <= 0) {
                    this.config.threshold = DEFAULT_CONFIG.threshold;
                }
                this.defaultConfig = __assign({}, this.defaultConfig, this.config);
            }
            this.loaders = {};
            this.showForeground = new rxjs.BehaviorSubject({ loaderId: '', isShow: false });
            this.showForeground$ = this.showForeground.asObservable();
            this.showBackground = new rxjs.BehaviorSubject({ loaderId: '', isShow: false });
            this.showBackground$ = this.showBackground.asObservable();
            this.fgClosing = new rxjs.BehaviorSubject({ loaderId: '', isShow: false });
            this.foregroundClosing$ = this.fgClosing.asObservable();
            this.bgClosing = new rxjs.BehaviorSubject({ loaderId: '', isShow: false });
            this.backgroundClosing$ = this.bgClosing.asObservable();
        }
        /**
         * For internal use only. It may be changed in the future.
         * @docs-private
         */
        /**
         * For internal use only. It may be changed in the future.
         * \@docs-private
         * @param {?} loaderId
         * @return {?}
         */
        NgxUiLoaderService.prototype.initLoaderData = /**
         * For internal use only. It may be changed in the future.
         * \@docs-private
         * @param {?} loaderId
         * @return {?}
         */
            function (loaderId) {
                /** @type {?} */
                var isMaster = false;
                if (loaderId === this.defaultConfig.masterLoaderId) {
                    this.throwErrorIfMasterLoaderExists(true);
                    isMaster = true;
                }
                else { // not master loader
                    this.throwErrorIfLoaderExists(loaderId, true);
                }
                if (this.loaders[loaderId]) {
                    this.loaders[loaderId].isBound = true;
                    this.loaders[loaderId].isMaster = isMaster;
                    // emit showEvent after data loader is bound
                    if (this.hasForeground(loaderId)) {
                        this.showForeground.next({ loaderId: loaderId, isShow: true });
                    }
                    else {
                        if (this.hasBackground(loaderId)) {
                            this.showBackground.next({ loaderId: loaderId, isShow: true });
                        }
                    }
                }
                else {
                    this.createLoaderData(loaderId, isMaster, true);
                }
            };
        /**
         * For internal use only. It may be changed in the future.
         * @docs-private
         */
        /**
         * For internal use only. It may be changed in the future.
         * \@docs-private
         * @param {?} loaderId
         * @param {?} newLoaderId
         * @return {?}
         */
        NgxUiLoaderService.prototype.updateLoaderId = /**
         * For internal use only. It may be changed in the future.
         * \@docs-private
         * @param {?} loaderId
         * @param {?} newLoaderId
         * @return {?}
         */
            function (loaderId, newLoaderId) {
                this.throwErrorIfLoaderNotExist(loaderId);
                if (this.loaders[loaderId].loaderId === this.defaultConfig.masterLoaderId) {
                    console.warn("[ngx-ui-loader] - Cannot change loaderId of master loader. The current " +
                        ("master's loaderId is \"" + this.defaultConfig.masterLoaderId + "\". If you really want to ") +
                        "change it, please use NgxUiLoaderModule.forRoot() method.");
                    return;
                }
                if (newLoaderId !== loaderId) {
                    this.throwErrorIfLoaderExists(newLoaderId, true);
                    this.loaders[newLoaderId] = {
                        loaderId: newLoaderId,
                        background: __assign({}, this.loaders[loaderId].background),
                        foreground: __assign({}, this.loaders[loaderId].foreground),
                        isMaster: false,
                        isBound: this.loaders[loaderId].isBound
                    };
                    delete this.loaders[loaderId];
                }
            };
        /**
         * For internal use only. It may be changed in the future.
         * @docs-private
         */
        /**
         * For internal use only. It may be changed in the future.
         * \@docs-private
         * @param {?} loaderId
         * @return {?}
         */
        NgxUiLoaderService.prototype.destroyLoaderData = /**
         * For internal use only. It may be changed in the future.
         * \@docs-private
         * @param {?} loaderId
         * @return {?}
         */
            function (loaderId) {
                this.stopLoaderAll(loaderId);
                delete this.loaders[loaderId];
            };
        /**
         * Get default loader configuration
         * @returns default configuration object
         */
        /**
         * Get default loader configuration
         * @return {?} default configuration object
         */
        NgxUiLoaderService.prototype.getDefaultConfig = /**
         * Get default loader configuration
         * @return {?} default configuration object
         */
            function () {
                return __assign({}, this.defaultConfig);
            };
        /**
         * Get all the loaders
         */
        /**
         * Get all the loaders
         * @return {?}
         */
        NgxUiLoaderService.prototype.getLoaders = /**
         * Get all the loaders
         * @return {?}
         */
            function () {
                return JSON.parse(JSON.stringify(this.loaders));
            };
        /**
         * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
         */
        /**
         * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
         * @param {?=} loaderId
         * @return {?}
         */
        NgxUiLoaderService.prototype.getLoader = /**
         * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
         * @param {?=} loaderId
         * @return {?}
         */
            function (loaderId) {
                if (loaderId) {
                    this.throwErrorIfLoaderNotExist(loaderId);
                }
                else {
                    this.throwErrorIfMasterLoaderNotExist();
                    loaderId = this.defaultConfig.masterLoaderId;
                }
                return JSON.parse(JSON.stringify(this.loaders[loaderId]));
            };
        /**
         * @deprecated use getLoader() or getLoaders() instead. This will be removed in the version 8.x.x
         * Return status of master loader
         */
        /**
         * @deprecated use getLoader() or getLoaders() instead. This will be removed in the version 8.x.x
         * Return status of master loader
         * @return {?}
         */
        NgxUiLoaderService.prototype.getStatus = /**
         * @deprecated use getLoader() or getLoaders() instead. This will be removed in the version 8.x.x
         * Return status of master loader
         * @return {?}
         */
            function () {
                this.throwErrorIfMasterLoaderNotExist();
                return {
                    waitingBackground: this.loaders[this.defaultConfig.masterLoaderId].background,
                    waitingForeground: this.loaders[this.defaultConfig.masterLoaderId].foreground
                };
            };
        /**
         * Check whether the queue has a waiting foreground loader with the given `taskId`.
         * If no `taskId` specified, it will check whether the queue has any waiting foreground loader.
         * @param loaderId the loader Id
         * @param taskId the optional task Id
         * @returns boolean
         */
        /**
         * Check whether the queue has a waiting foreground loader with the given `taskId`.
         * If no `taskId` specified, it will check whether the queue has any waiting foreground loader.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id
         * @return {?} boolean
         */
        NgxUiLoaderService.prototype.hasForeground = /**
         * Check whether the queue has a waiting foreground loader with the given `taskId`.
         * If no `taskId` specified, it will check whether the queue has any waiting foreground loader.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id
         * @return {?} boolean
         */
            function (loaderId, taskId) {
                if (this.loaders[loaderId]) {
                    if (taskId) {
                        return this.loaders[loaderId].foreground[taskId] ? true : false;
                    }
                    return Object.keys(this.loaders[loaderId].foreground).length > 0;
                }
                return false;
            };
        /**
         * Check whether the queue has a waiting background loader with the given `taskId`.
         * If no `taskId` specified, it will check whether the queue has any waiting background loader.
         * @param loaderId the loader Id
         * @param taskId the optional task Id
         * @returns boolean
         */
        /**
         * Check whether the queue has a waiting background loader with the given `taskId`.
         * If no `taskId` specified, it will check whether the queue has any waiting background loader.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id
         * @return {?} boolean
         */
        NgxUiLoaderService.prototype.hasBackground = /**
         * Check whether the queue has a waiting background loader with the given `taskId`.
         * If no `taskId` specified, it will check whether the queue has any waiting background loader.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id
         * @return {?} boolean
         */
            function (loaderId, taskId) {
                if (this.loaders[loaderId]) {
                    if (taskId) {
                        return this.loaders[loaderId].background[taskId] ? true : false;
                    }
                    return Object.keys(this.loaders[loaderId].background).length > 0;
                }
                return false;
            };
        /**
         * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
         * @param loaderId the loader Id
         * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
         */
        /**
         * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
        NgxUiLoaderService.prototype.startLoader = /**
         * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
            function (loaderId, taskId) {
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.createLoaderData(loaderId, undefined, false);
                /** @type {?} */
                var foregroundRunning = this.hasForeground(loaderId);
                this.loaders[loaderId].foreground[taskId] = Date.now();
                if (!this.loaders[loaderId].isBound) {
                    return;
                }
                if (!foregroundRunning) {
                    if (this.hasBackground(loaderId)) {
                        this.backgroundCloseout(loaderId);
                        this.showBackground.next({ loaderId: loaderId, isShow: false });
                    }
                    this.showForeground.next({ loaderId: loaderId, isShow: true });
                }
            };
        /**
         * Start the foreground loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stop() method.
         * NOTE: Really this function just wraps startLoader() function
         * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
         */
        /**
         * Start the foreground loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stop() method.
         * NOTE: Really this function just wraps startLoader() function
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
        NgxUiLoaderService.prototype.start = /**
         * Start the foreground loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stop() method.
         * NOTE: Really this function just wraps startLoader() function
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
            function (taskId) {
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.startLoader(this.defaultConfig.masterLoaderId, taskId);
            };
        /**
         * Start the background loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
         * @param loaderId the loader Id
         * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
         */
        /**
         * Start the background loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
        NgxUiLoaderService.prototype.startBackgroundLoader = /**
         * Start the background loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
            function (loaderId, taskId) {
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.createLoaderData(loaderId, undefined, false);
                this.loaders[loaderId].background[taskId] = Date.now();
                if (!this.loaders[loaderId].isBound) {
                    return;
                }
                if (!this.hasForeground(loaderId)) {
                    this.showBackground.next({ loaderId: loaderId, isShow: true });
                }
            };
        /**
         * Start the background loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
         * NOTE: Really this function just wraps startBackgroundLoader() function
         * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
         */
        /**
         * Start the background loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
         * NOTE: Really this function just wraps startBackgroundLoader() function
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
        NgxUiLoaderService.prototype.startBackground = /**
         * Start the background loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
         * NOTE: Really this function just wraps startBackgroundLoader() function
         * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
         * @return {?}
         */
            function (taskId) {
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.startBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
            };
        /**
         * Stop a foreground loading of loader having `loaderId` with specific `taskId`
         * @param loaderId the loader Id
         * @param taskId the optional task Id to stop. If not provided, 'default' is used.
         * @returns Object
         */
        /**
         * Stop a foreground loading of loader having `loaderId` with specific `taskId`
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
        NgxUiLoaderService.prototype.stopLoader = /**
         * Stop a foreground loading of loader having `loaderId` with specific `taskId`
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
            function (loaderId, taskId) {
                var _this = this;
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.throwErrorIfLoaderNotExist(loaderId);
                // Update loader data {{{
                /** @type {?} */
                var now = Date.now();
                if (this.hasForeground(loaderId, taskId)) {
                    if (this.loaders[loaderId].foreground[taskId] + this.defaultConfig.threshold > now) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.stopLoader(loaderId, taskId);
                        }), this.loaders[loaderId].foreground[taskId] + this.defaultConfig.threshold - now);
                        return;
                    }
                    delete this.loaders[loaderId].foreground[taskId];
                }
                else {
                    return;
                }
                // }}}
                // Emit ShowEvents to update view {{{
                if (!this.hasForeground(loaderId)) {
                    this.foregroundCloseout(loaderId);
                    this.showForeground.next({ loaderId: loaderId, isShow: false });
                    if (this.hasBackground(loaderId)) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            if (_this.hasBackground(loaderId)) { // still have background tasks
                                _this.showBackground.next({ loaderId: loaderId, isShow: true });
                            }
                        }), WAITING_FOR_OVERLAY_DISAPPEAR);
                    }
                }
                // }}}
            };
        /**
         * Stop a foreground loading of master loader with specific `taskId`
         * @param taskId the optional task Id to stop. If not provided, 'default' is used.
         * @returns Object
         */
        /**
         * Stop a foreground loading of master loader with specific `taskId`
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
        NgxUiLoaderService.prototype.stop = /**
         * Stop a foreground loading of master loader with specific `taskId`
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
            function (taskId) {
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.stopLoader(this.defaultConfig.masterLoaderId, taskId);
            };
        /**
         * Stop a background loading of loader having `loaderId` with specific `taskId`
         * @param loaderId the loader Id
         * @param taskId the optional task Id to stop. If not provided, 'default' is used.
         * @returns Object
         */
        /**
         * Stop a background loading of loader having `loaderId` with specific `taskId`
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
        NgxUiLoaderService.prototype.stopBackgroundLoader = /**
         * Stop a background loading of loader having `loaderId` with specific `taskId`
         * @param {?} loaderId the loader Id
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
            function (loaderId, taskId) {
                var _this = this;
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.throwErrorIfLoaderNotExist(loaderId);
                // Update loader data {{{
                /** @type {?} */
                var now = Date.now();
                if (this.hasBackground(loaderId, taskId)) {
                    if (this.loaders[loaderId].background[taskId] + this.defaultConfig.threshold > now) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.stopBackgroundLoader(loaderId, taskId);
                        }), this.loaders[loaderId].background[taskId] + this.defaultConfig.threshold - now);
                        return;
                    }
                    delete this.loaders[loaderId].background[taskId];
                }
                else {
                    return;
                }
                // }}}
                // Emit ShowEvents to update view {{{
                if (!this.hasForeground(loaderId) && !this.hasBackground(loaderId)) {
                    this.backgroundCloseout(loaderId);
                    this.showBackground.next({ loaderId: loaderId, isShow: false });
                }
                // }}}
            };
        /**
         * Stop a background loading of master loader with specific taskId
         * @param taskId the optional task Id to stop. If not provided, 'default' is used.
         * @returns Object
         */
        /**
         * Stop a background loading of master loader with specific taskId
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
        NgxUiLoaderService.prototype.stopBackground = /**
         * Stop a background loading of master loader with specific taskId
         * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
         * @return {?} Object
         */
            function (taskId) {
                if (taskId === void 0) {
                    taskId = DEFAULT_TASK_ID;
                }
                this.stopBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
            };
        /**
         * Stop all the background and foreground loadings of loader having `loaderId`
         * @param loaderId the loader Id
         */
        /**
         * Stop all the background and foreground loadings of loader having `loaderId`
         * @param {?} loaderId the loader Id
         * @return {?}
         */
        NgxUiLoaderService.prototype.stopLoaderAll = /**
         * Stop all the background and foreground loadings of loader having `loaderId`
         * @param {?} loaderId the loader Id
         * @return {?}
         */
            function (loaderId) {
                this.throwErrorIfLoaderNotExist(loaderId);
                if (this.hasForeground(loaderId)) {
                    this.foregroundCloseout(loaderId);
                    this.showForeground.next({ loaderId: loaderId, isShow: false });
                }
                else if (this.hasBackground(loaderId)) {
                    this.backgroundCloseout(loaderId);
                    this.showBackground.next({ loaderId: loaderId, isShow: false });
                }
                this.loaders[loaderId].foreground = {};
                this.loaders[loaderId].background = {};
            };
        /**
         * Stop all the background and foreground loadings of master loader
         */
        /**
         * Stop all the background and foreground loadings of master loader
         * @return {?}
         */
        NgxUiLoaderService.prototype.stopAll = /**
         * Stop all the background and foreground loadings of master loader
         * @return {?}
         */
            function () {
                this.stopLoaderAll(this.defaultConfig.masterLoaderId);
            };
        /**
         * Create loader data if it does not exist
         * @param loaderId
         * @param isMaster
         * @param isBound
         * @docs-private
         */
        /**
         * Create loader data if it does not exist
         * \@docs-private
         * @private
         * @param {?} loaderId
         * @param {?} isMaster
         * @param {?} isBound
         * @return {?}
         */
        NgxUiLoaderService.prototype.createLoaderData = /**
         * Create loader data if it does not exist
         * \@docs-private
         * @private
         * @param {?} loaderId
         * @param {?} isMaster
         * @param {?} isBound
         * @return {?}
         */
            function (loaderId, isMaster, isBound) {
                if (!this.loaders[loaderId]) {
                    this.loaders[loaderId] = {
                        loaderId: loaderId,
                        foreground: {},
                        background: {},
                        isMaster: isMaster,
                        isBound: isBound
                    };
                }
            };
        /**
         * Throw error if the loaderId does not exist.
         * @docs-private
         */
        /**
         * Throw error if the loaderId does not exist.
         * \@docs-private
         * @private
         * @param {?} loaderId
         * @return {?}
         */
        NgxUiLoaderService.prototype.throwErrorIfLoaderNotExist = /**
         * Throw error if the loaderId does not exist.
         * \@docs-private
         * @private
         * @param {?} loaderId
         * @return {?}
         */
            function (loaderId) {
                if (!this.loaders[loaderId]) {
                    throw new Error("[ngx-ui-loader] - loaderId \"" + loaderId + "\" does not exist.");
                }
            };
        /**
         * Throw error if the loaderId has already existed.
         * @docs-private
         */
        /**
         * Throw error if the loaderId has already existed.
         * \@docs-private
         * @private
         * @param {?} loaderId
         * @param {?=} useIsBoundProp
         * @return {?}
         */
        NgxUiLoaderService.prototype.throwErrorIfLoaderExists = /**
         * Throw error if the loaderId has already existed.
         * \@docs-private
         * @private
         * @param {?} loaderId
         * @param {?=} useIsBoundProp
         * @return {?}
         */
            function (loaderId, useIsBoundProp) {
                if (this.loaders[loaderId] && (this.loaders[loaderId].isBound && useIsBoundProp)) {
                    throw new Error("[ngx-ui-loader] - loaderId \"" + loaderId + "\" is duplicated. Please choose another one!");
                }
            };
        /**
         * Throw error if the master loader has already existed.
         * @docs-private
         */
        /**
         * Throw error if the master loader has already existed.
         * \@docs-private
         * @private
         * @param {?=} useIsBoundProp
         * @return {?}
         */
        NgxUiLoaderService.prototype.throwErrorIfMasterLoaderExists = /**
         * Throw error if the master loader has already existed.
         * \@docs-private
         * @private
         * @param {?=} useIsBoundProp
         * @return {?}
         */
            function (useIsBoundProp) {
                if (this.loaders[this.defaultConfig.masterLoaderId] && (this.loaders[this.defaultConfig.masterLoaderId].isBound && useIsBoundProp)) {
                    throw new Error("[ngx-ui-loader] - The master loader has already existed. "
                        + "The app should have only one master loader and it should be placed in the root app template");
                }
            };
        /**
         * Throw error if the master loader does not exist.
         * @docs-private
         */
        /**
         * Throw error if the master loader does not exist.
         * \@docs-private
         * @private
         * @return {?}
         */
        NgxUiLoaderService.prototype.throwErrorIfMasterLoaderNotExist = /**
         * Throw error if the master loader does not exist.
         * \@docs-private
         * @private
         * @return {?}
         */
            function () {
                if (!this.loaders[this.defaultConfig.masterLoaderId]) {
                    throw new Error("[ngx-ui-loader] - The master loader does not exist.");
                }
            };
        /**
         * Manage to close foreground loading
         * @param loaderId the loader id
         */
        /**
         * Manage to close foreground loading
         * @private
         * @param {?} loaderId the loader id
         * @return {?}
         */
        NgxUiLoaderService.prototype.foregroundCloseout = /**
         * Manage to close foreground loading
         * @private
         * @param {?} loaderId the loader id
         * @return {?}
         */
            function (loaderId) {
                var _this = this;
                this.fgClosing.next({ loaderId: loaderId, isShow: true });
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.fgClosing.next({ loaderId: loaderId, isShow: false });
                }), CLOSING_TIME);
            };
        /**
         * Manage to close background loading
         * @param loaderId the loader id
         */
        /**
         * Manage to close background loading
         * @private
         * @param {?} loaderId the loader id
         * @return {?}
         */
        NgxUiLoaderService.prototype.backgroundCloseout = /**
         * Manage to close background loading
         * @private
         * @param {?} loaderId the loader id
         * @return {?}
         */
            function (loaderId) {
                var _this = this;
                this.bgClosing.next({ loaderId: loaderId, isShow: true });
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.bgClosing.next({ loaderId: loaderId, isShow: false });
                }), CLOSING_TIME);
            };
        NgxUiLoaderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxUiLoaderService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [NGX_UI_LOADER_CONFIG_TOKEN,] }] }
            ];
        };
        /** @nocollapse */ NgxUiLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function NgxUiLoaderService_Factory() { return new NgxUiLoaderService(i0.inject(NGX_UI_LOADER_CONFIG_TOKEN, 8)); }, token: NgxUiLoaderService, providedIn: "root" });
        return NgxUiLoaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Coerce a value (string) to a number
     * @param {?} value
     * @param {?} fallbackValue
     * @return {?}
     */
    function coerceNumber(value, fallbackValue) {
        return !isNaN(parseFloat(( /** @type {?} */(value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiLoaderComponent = /** @class */ (function () {
        /**
         * Constructor
         * @param domSanitizer
         * @param ngxService
         */
        function NgxUiLoaderComponent(domSanitizer, changeDetectorRef, ngxService) {
            this.domSanitizer = domSanitizer;
            this.changeDetectorRef = changeDetectorRef;
            this.ngxService = ngxService;
            this.initialized = false;
            this.defaultConfig = this.ngxService.getDefaultConfig();
            this.bgsColor = this.defaultConfig.bgsColor;
            this.bgsOpacity = this.defaultConfig.bgsOpacity;
            this.bgsPosition = this.defaultConfig.bgsPosition;
            this.bgsSize = this.defaultConfig.bgsSize;
            this.bgsType = this.defaultConfig.bgsType;
            this.fgsColor = this.defaultConfig.fgsColor;
            this.fgsPosition = this.defaultConfig.fgsPosition;
            this.fgsSize = this.defaultConfig.fgsSize;
            this.fgsType = this.defaultConfig.fgsType;
            this.gap = this.defaultConfig.gap;
            this.loaderId = this.defaultConfig.masterLoaderId;
            this.logoPosition = this.defaultConfig.logoPosition;
            this.logoSize = this.defaultConfig.logoSize;
            this.logoUrl = this.defaultConfig.logoUrl;
            this.overlayBorderRadius = this.defaultConfig.overlayBorderRadius;
            this.overlayColor = this.defaultConfig.overlayColor;
            this.pbColor = this.defaultConfig.pbColor;
            this.pbDirection = this.defaultConfig.pbDirection;
            this.pbThickness = this.defaultConfig.pbThickness;
            this.hasProgressBar = this.defaultConfig.hasProgressBar;
            this.text = this.defaultConfig.text;
            this.textColor = this.defaultConfig.textColor;
            this.textPosition = this.defaultConfig.textPosition;
        }
        /**
         * On init event
         */
        /**
         * On init event
         * @return {?}
         */
        NgxUiLoaderComponent.prototype.ngOnInit = /**
         * On init event
         * @return {?}
         */
            function () {
                var _this = this;
                this.initializeSpinners();
                this.ngxService.initLoaderData(this.loaderId);
                this.determinePositions();
                this.bgsPosition = ( /** @type {?} */(this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition)));
                this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
                this.pbDirection = ( /** @type {?} */(this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection)));
                this.showForegroundWatcher = this.ngxService.showForeground$
                    .pipe(operators.filter(( /**
             * @param {?} showEvent
             * @return {?}
             */function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    _this.showForeground = data.isShow;
                    _this.changeDetectorRef.markForCheck();
                }));
                this.showBackgroundWatcher = this.ngxService.showBackground$
                    .pipe(operators.filter(( /**
             * @param {?} showEvent
             * @return {?}
             */function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    _this.showBackground = data.isShow;
                    _this.changeDetectorRef.markForCheck();
                }));
                this.foregroundClosingWatcher = this.ngxService.foregroundClosing$
                    .pipe(operators.filter(( /**
             * @param {?} showEvent
             * @return {?}
             */function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    _this.foregroundClosing = data.isShow;
                    _this.changeDetectorRef.markForCheck();
                }));
                this.backgroundClosingWatcher = this.ngxService.backgroundClosing$
                    .pipe(operators.filter(( /**
             * @param {?} showEvent
             * @return {?}
             */function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    _this.backgroundClosing = data.isShow;
                    _this.changeDetectorRef.markForCheck();
                }));
                this.initialized = true;
            };
        /**
         * On changes event
         * @param changes
         */
        /**
         * On changes event
         * @param {?} changes
         * @return {?}
         */
        NgxUiLoaderComponent.prototype.ngOnChanges = /**
         * On changes event
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.initialized) {
                    return;
                }
                /** @type {?} */
                var bgsTypeChange = changes.bgsType;
                /** @type {?} */
                var bgsPositionChange = changes.bgsPosition;
                /** @type {?} */
                var fgsTypeChange = changes.fgsType;
                /** @type {?} */
                var loaderIdChange = changes.loaderId;
                /** @type {?} */
                var logoUrlChange = changes.logoUrl;
                /** @type {?} */
                var pbDirectionChange = changes.pbDirection;
                if (fgsTypeChange || bgsTypeChange) {
                    this.initializeSpinners();
                }
                if (loaderIdChange) {
                    this.ngxService.updateLoaderId(loaderIdChange.previousValue, this.loaderId);
                }
                this.determinePositions();
                if (bgsPositionChange) {
                    this.bgsPosition = ( /** @type {?} */(this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition)));
                }
                if (logoUrlChange) {
                    this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
                }
                if (pbDirectionChange) {
                    this.pbDirection = ( /** @type {?} */(this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection)));
                }
            };
        /**
         * Initialize spinners
         */
        /**
         * Initialize spinners
         * @private
         * @return {?}
         */
        NgxUiLoaderComponent.prototype.initializeSpinners = /**
         * Initialize spinners
         * @private
         * @return {?}
         */
            function () {
                this.fgsType = ( /** @type {?} */(this.validate('fgsType', this.fgsType, SPINNER, this.defaultConfig.fgsType)));
                this.bgsType = ( /** @type {?} */(this.validate('bgsType', this.bgsType, SPINNER, this.defaultConfig.bgsType)));
                this.fgDivs = Array(SPINNER_CONFIG[this.fgsType].divs).fill(1);
                this.fgSpinnerClass = SPINNER_CONFIG[this.fgsType].class;
                this.bgDivs = Array(SPINNER_CONFIG[this.bgsType].divs).fill(1);
                this.bgSpinnerClass = SPINNER_CONFIG[this.bgsType].class;
            };
        /**
         * Determine the positions of spinner, logo and text
         */
        /**
         * Determine the positions of spinner, logo and text
         * @private
         * @return {?}
         */
        NgxUiLoaderComponent.prototype.determinePositions = /**
         * Determine the positions of spinner, logo and text
         * @private
         * @return {?}
         */
            function () {
                this.fgsPosition = ( /** @type {?} */(this.validate('fgsPosition', this.fgsPosition, POSITION, this.defaultConfig.fgsPosition)));
                this.logoPosition = ( /** @type {?} */(this.validate('logoPosition', this.logoPosition, POSITION, this.defaultConfig.logoPosition)));
                this.textPosition = ( /** @type {?} */(this.validate('textPosition', this.textPosition, POSITION, this.defaultConfig.textPosition)));
                this.gap = coerceNumber(this.gap, this.defaultConfig.gap);
                this.logoTop = 'initial';
                this.spinnerTop = 'initial';
                this.textTop = 'initial';
                /** @type {?} */
                var textSize = 24;
                if (this.logoPosition.startsWith('center')) {
                    this.logoTop = '50%';
                }
                else if (this.logoPosition.startsWith('top')) {
                    this.logoTop = '30px';
                }
                if (this.fgsPosition.startsWith('center')) {
                    this.spinnerTop = '50%';
                }
                else if (this.fgsPosition.startsWith('top')) {
                    this.spinnerTop = '30px';
                }
                if (this.textPosition.startsWith('center')) {
                    this.textTop = '50%';
                }
                else if (this.textPosition.startsWith('top')) {
                    this.textTop = '30px';
                }
                if (this.fgsPosition === POSITION.centerCenter) {
                    if (this.logoUrl && this.logoPosition === POSITION.centerCenter) {
                        if (this.text && this.textPosition === POSITION.centerCenter) { // logo, spinner and text
                            this.logoTop = this.domSanitizer
                                .bypassSecurityTrustStyle("calc(50% - " + this.fgsSize / 2 + "px - " + textSize / 2 + "px - " + this.gap + "px)");
                            this.spinnerTop = this.domSanitizer
                                .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px - " + textSize / 2 + "px)");
                            this.textTop = this.domSanitizer
                                .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap + "px + " + this.fgsSize / 2 + "px)");
                        }
                        else { // logo and spinner
                            this.logoTop = this.domSanitizer
                                .bypassSecurityTrustStyle("calc(50% - " + this.fgsSize / 2 + "px - " + this.gap / 2 + "px)");
                            this.spinnerTop = this.domSanitizer
                                .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap / 2 + "px)");
                        }
                    }
                    else {
                        if (this.text && this.textPosition === POSITION.centerCenter) { // spinner and text
                            this.spinnerTop = this.domSanitizer
                                .bypassSecurityTrustStyle("calc(50% - " + textSize / 2 + "px - " + this.gap / 2 + "px)");
                            this.textTop = this.domSanitizer
                                .bypassSecurityTrustStyle("calc(50% + " + this.fgsSize / 2 + "px + " + this.gap / 2 + "px)");
                        }
                    }
                }
                else {
                    if (this.logoUrl && this.logoPosition === POSITION.centerCenter
                        && this.text && this.textPosition === POSITION.centerCenter) { // logo and text
                        this.logoTop = this.domSanitizer
                            .bypassSecurityTrustStyle("calc(50% - " + textSize / 2 + "px - " + this.gap / 2 + "px)");
                        this.textTop = this.domSanitizer
                            .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap / 2 + "px)");
                    }
                }
            };
        /**
         * @private
         * @param {?} inputName
         * @param {?} value
         * @param {?} validTypeObj
         * @param {?} fallbackValue
         * @return {?}
         */
        NgxUiLoaderComponent.prototype.validate = /**
         * @private
         * @param {?} inputName
         * @param {?} value
         * @param {?} validTypeObj
         * @param {?} fallbackValue
         * @return {?}
         */
            function (inputName, value, validTypeObj, fallbackValue) {
                if (Object.keys(validTypeObj).map(( /**
                 * @param {?} k
                 * @return {?}
                 */function (k) { return validTypeObj[k]; })).findIndex(( /**
                 * @param {?} v
                 * @return {?}
                 */function (v) { return v === value; })) === -1) {
                    console.error("[ngx-ui-loader] - " + inputName + " (\"" + value + "\") is invalid. "
                        + ("Default value \"" + fallbackValue + "\" is used."));
                    return fallbackValue;
                }
                return value;
            };
        /**
         * On destroy event
         */
        /**
         * On destroy event
         * @return {?}
         */
        NgxUiLoaderComponent.prototype.ngOnDestroy = /**
         * On destroy event
         * @return {?}
         */
            function () {
                this.ngxService.destroyLoaderData(this.loaderId);
                if (this.showForegroundWatcher) {
                    this.showForegroundWatcher.unsubscribe();
                }
                if (this.showBackgroundWatcher) {
                    this.showBackgroundWatcher.unsubscribe();
                }
                if (this.foregroundClosingWatcher) {
                    this.foregroundClosingWatcher.unsubscribe();
                }
                if (this.backgroundClosingWatcher) {
                    this.backgroundClosingWatcher.unsubscribe();
                }
            };
        NgxUiLoaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-ui-loader',
                        template: "<!-- Progress bar {{{ -->\n<div *ngIf=\"hasProgressBar\"\n  class=\"ngx-progress-bar\"\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\n  [ngClass]=\"'ngx-progress-bar-' + pbDirection\"\n  [style.height.px]=\"pbThickness\"\n  [style.color]=\"pbColor\"\n  [class.loading-foreground]=\"showForeground\"\n  [class.foreground-closing]=\"foregroundClosing\"></div>\n<!-- Progress bar }}} -->\n\n<!-- Foreground container {{{ -->\n<div class=\"ngx-overlay\"\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\n  [style.background-color]=\"overlayColor\"\n  [style.border-radius]=\"overlayBorderRadius\"\n  [class.loading-foreground]=\"showForeground\"\n  [class.foreground-closing]=\"foregroundClosing\">\n\n  <!-- Logo {{{ -->\n  <img *ngIf=\"logoUrl\" class=\"ngx-loading-logo\"\n    [ngClass]=\"logoPosition\" [src]=\"trustedLogoUrl\"\n    [style.width.px]=\"logoSize\" [style.height.px]=\"logoSize\"\n    [style.top]=\"logoTop\">\n  <!-- Logo }}} -->\n\n  <!-- Foreground spinner {{{ -->\n  <div class=\"ngx-foreground-spinner\"\n    [ngClass]=\"fgsPosition\" [style.color]=\"fgsColor\"\n    [style.width.px]=\"fgsSize\" [style.height.px]=\"fgsSize\"\n    [style.top]=\"spinnerTop\">\n    <div [class]=\"fgSpinnerClass\">\n      <div *ngFor=\"let div of fgDivs\"></div>\n    </div>\n  </div>\n  <!-- Foreground spinner }}} -->\n\n  <!-- Loading text {{{ -->\n  <div class=\"ngx-loading-text\"\n    [ngClass]=\"textPosition\"\n    [style.top]=\"textTop\"\n    [style.color]=\"textColor\">{{text}}</div>\n  <!-- Loading text }}} -->\n\n</div>\n<!-- Foreground container }}} -->\n\n<!-- Background spinner {{{ -->\n<div class=\"ngx-background-spinner\"\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\n  [ngClass]=\"bgsPosition\"\n  [class.loading-background]=\"showBackground\"\n  [class.background-closing]=\"backgroundClosing\"\n  [style.width.px]=\"bgsSize\" [style.height.px]=\"bgsSize\"\n  [style.color]=\"bgsColor\" [style.opacity]=\"bgsOpacity\">\n  <div [class]=\"bgSpinnerClass\">\n    <div *ngFor=\"let div of bgDivs\"></div>\n  </div>\n</div>\n<!-- Background spinner }}} -->\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-progress-bar{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1;overflow:hidden}.ngx-progress-bar.foreground-closing,.ngx-progress-bar.loading-foreground{display:block}.ngx-progress-bar.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar::after,.ngx-progress-bar::before{background-color:currentColor;content:'';display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr::before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.ngx-progress-bar-ltr::after{-webkit-animation:20s ease-out progressBar-slide-ltr;animation:20s ease-out progressBar-slide-ltr;-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}.ngx-progress-bar-rtl::before{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.ngx-progress-bar-rtl::after{-webkit-animation:20s ease-out progressBar-slide-rtl;animation:20s ease-out progressBar-slide-rtl;-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}.foreground-closing.ngx-progress-bar-ltr::before{-webkit-animation:1s ease-out progressBar-slide-complete-ltr;animation:1s ease-out progressBar-slide-complete-ltr;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.foreground-closing.ngx-progress-bar-rtl::before{-webkit-animation:1s ease-out progressBar-slide-complete-rtl;animation:1s ease-out progressBar-slide-complete-rtl;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}@-webkit-keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}}@keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}}@-webkit-keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}}@keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}}@-webkit-keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75%,0,0);transform:translate3d(-75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75%,0,0);transform:translate3d(-75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75%,0,0);transform:translate3d(75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75%,0,0);transform:translate3d(75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:rgba(40,40,40,.8);cursor:progress;display:none}.ngx-overlay.foreground-closing,.ngx-overlay.loading-foreground{display:block}.ngx-overlay.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay>.ngx-foreground-spinner{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay>.ngx-loading-logo{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay>.ngx-loading-text{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.background-closing,.ngx-background-spinner.loading-background{display:block}.ngx-background-spinner.background-closing{opacity:0!important;transition:opacity .7s ease-out}.ngx-position-absolute,.ngx-position-absolute>.ngx-foreground-spinner,.ngx-position-absolute>.ngx-loading-logo,.ngx-position-absolute>.ngx-loading-text{position:absolute!important}.ngx-position-absolute.ngx-progress-bar{z-index:99996!important}.ngx-position-absolute.ngx-overlay{z-index:99995!important}.ngx-position-absolute .sk-square-jelly-box>div:nth-child(1),.ngx-position-absolute.ngx-background-spinner{z-index:99994!important}.top-left{top:30px;left:30px}.top-center{top:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.top-right{top:30px;right:30px}.center-left{top:50%;left:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.center-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.center-right{top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bottom-left{bottom:30px;left:30px}.bottom-center{bottom:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bottom-right{bottom:30px;right:30px}.sk-ball-scale-multiple,.sk-ball-scale-multiple>div{position:relative;box-sizing:border-box}.sk-ball-scale-multiple{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.sk-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin,.sk-ball-spin>div{position:relative;box-sizing:border-box}.sk-ball-spin{width:100%;height:100%;font-size:0}.sk-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise,.sk-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating,.sk-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating{font-size:0;width:100%;height:100%;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.sk-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin-fade-rotating,.sk-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating{width:100%;height:100%;font-size:0;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.sk-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.sk-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.sk-chasing-dots{margin:auto;width:100%;height:100%;position:absolute;text-align:center;-webkit-animation:2s linear infinite sk-chasingDots-rotate;animation:2s linear infinite sk-chasingDots-rotate}.sk-chasing-dots>div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDots-bounce;animation:2s ease-in-out infinite sk-chasingDots-bounce}.sk-chasing-dots>div:nth-child(2){top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-circle{margin:auto;width:100%;height:100%;position:relative}.sk-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circle-bounceDelay;animation:1.2s ease-in-out infinite both sk-circle-bounceDelay}.sk-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-cube-grid{width:100%;height:100%;margin:auto}.sk-cube-grid>div{width:33%;height:33%;background-color:currentColor;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay;animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay}.sk-cube-grid>div:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid>div:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid>div:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}.sk-double-bounce{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce>div{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce-bounce;animation:2s ease-in-out infinite sk-doubleBounce-bounce}.sk-double-bounce>div:nth-child(2){-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-fading-circle{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay;animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay}.sk-fading-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}.sk-folding-cube{margin:auto;width:100%;height:100%;position:relative;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.sk-folding-cube>div{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);transform:scale(1.1)}.sk-folding-cube>div::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;-webkit-animation:2.4s linear infinite both sk-foldingCube-angle;animation:2.4s linear infinite both sk-foldingCube-angle;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.sk-folding-cube>div:nth-child(2){-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube>div:nth-child(3){-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube>div:nth-child(4){-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube>div:nth-child(2)::before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube>div:nth-child(3)::before{-webkit-animation-delay:.9s;animation-delay:.9s}.sk-folding-cube>div:nth-child(4)::before{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse{width:100%;height:100%;margin:auto}.sk-pulse>div{width:100%;height:100%;background-color:currentColor;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulse-scaleOut;animation:1s ease-in-out infinite sk-pulse-scaleOut}@-webkit-keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.sk-rectangle-bounce{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce>div{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay;animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay}.sk-rectangle-bounce>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rectangle-bounce>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rectangle-bounce>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.sk-rectangle-bounce-party,.sk-rectangle-bounce-party>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation-name:rectangle-bounce-party;animation-name:rectangle-bounce-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.sk-rectangle-bounce-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.sk-rectangle-bounce-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-rectangle-bounce-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.sk-rectangle-bounce-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.sk-rectangle-bounce-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}@-webkit-keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}.sk-rectangle-bounce-pulse-out,.sk-rectangle-bounce-pulse-out>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out}.sk-rectangle-bounce-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out>div:nth-child(2),.sk-rectangle-bounce-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-rectangle-bounce-pulse-out>div:nth-child(1),.sk-rectangle-bounce-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rectangle-bounce-pulse-out-rapid,.sk-rectangle-bounce-pulse-out-rapid>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(2),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(1),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rotating-plane{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane>div{width:100%;height:100%;background-color:currentColor;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box,.sk-square-jelly-box>div{position:relative;box-sizing:border-box}.sk-square-jelly-box{width:100%;height:100%;font-size:0}.sk-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box>div:nth-child(1),.sk-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box>div:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.sk-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.sk-square-loader,.sk-square-loader>div{position:relative;box-sizing:border-box}.sk-square-loader{font-size:0;width:100%;height:100%}.sk-square-loader>div{display:inline-block;float:none;border:3px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.sk-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.sk-three-bounce{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce>div{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay;animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay}.bottom-center>.sk-three-bounce>div,.bottom-left>.sk-three-bounce>div,.bottom-right>.sk-three-bounce>div{margin-top:70%!important}.top-center>.sk-three-bounce>div,.top-left>.sk-three-bounce>div,.top-right>.sk-three-bounce>div{margin-top:0!important}.sk-three-bounce>div:nth-child(1){-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce>div:nth-child(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-three-strings{width:100%;height:100%}.sk-three-strings>div{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings>div:nth-child(1){left:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateOne;animation:1s linear infinite sk-threeStrings-rotateOne;border-bottom:3px solid currentColor}.sk-three-strings>div:nth-child(2){right:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateTwo;animation:1s linear infinite sk-threeStrings-rotateTwo;border-right:3px solid currentColor}.sk-three-strings>div:nth-child(3){right:0;bottom:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateThree;animation:1s linear infinite sk-threeStrings-rotateThree;border-top:3px solid currentColor}@-webkit-keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}.sk-wandering-cubes{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes>div{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove;animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove}.sk-wandering-cubes>div:nth-child(2){-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-179deg);transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-179deg);transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}"]
                    }] }
        ];
        /** @nocollapse */
        NgxUiLoaderComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer },
                { type: i0.ChangeDetectorRef },
                { type: NgxUiLoaderService }
            ];
        };
        NgxUiLoaderComponent.propDecorators = {
            bgsColor: [{ type: i0.Input }],
            bgsOpacity: [{ type: i0.Input }],
            bgsPosition: [{ type: i0.Input }],
            bgsSize: [{ type: i0.Input }],
            bgsType: [{ type: i0.Input }],
            fgsColor: [{ type: i0.Input }],
            fgsPosition: [{ type: i0.Input }],
            fgsSize: [{ type: i0.Input }],
            fgsType: [{ type: i0.Input }],
            gap: [{ type: i0.Input }],
            loaderId: [{ type: i0.Input }],
            logoPosition: [{ type: i0.Input }],
            logoSize: [{ type: i0.Input }],
            logoUrl: [{ type: i0.Input }],
            overlayBorderRadius: [{ type: i0.Input }],
            overlayColor: [{ type: i0.Input }],
            pbColor: [{ type: i0.Input }],
            pbDirection: [{ type: i0.Input }],
            pbThickness: [{ type: i0.Input }],
            hasProgressBar: [{ type: i0.Input }],
            text: [{ type: i0.Input }],
            textColor: [{ type: i0.Input }],
            textPosition: [{ type: i0.Input }]
        };
        return NgxUiLoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiLoaderBlurredDirective = /** @class */ (function () {
        function NgxUiLoaderBlurredDirective(elementRef, renderer, ngxUiLoaderService) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.ngxUiLoaderService = ngxUiLoaderService;
            this.blurNumber = this.ngxUiLoaderService.getDefaultConfig().blur;
            this.loaderId = this.ngxUiLoaderService.getDefaultConfig().masterLoaderId;
        }
        Object.defineProperty(NgxUiLoaderBlurredDirective.prototype, "blur", {
            get: /**
             * @return {?}
             */ function () {
                return this.blurNumber;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.blurNumber = coerceNumber(value, this.ngxUiLoaderService.getDefaultConfig().blur);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * On Init event
         */
        /**
         * On Init event
         * @return {?}
         */
        NgxUiLoaderBlurredDirective.prototype.ngOnInit = /**
         * On Init event
         * @return {?}
         */
            function () {
                var _this = this;
                this.showForegroundWatcher = this.ngxUiLoaderService.showForeground$
                    .pipe(operators.filter(( /**
             * @param {?} showEvent
             * @return {?}
             */function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    if (data.isShow) {
                        /** @type {?} */
                        var filterValue = "blur(" + _this.blurNumber + "px)";
                        _this.renderer.setStyle(_this.elementRef.nativeElement, '-webkit-filter', filterValue);
                        _this.renderer.setStyle(_this.elementRef.nativeElement, 'filter', filterValue);
                    }
                    else {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            if (!_this.ngxUiLoaderService.hasForeground(data.loaderId)) {
                                _this.renderer.setStyle(_this.elementRef.nativeElement, '-webkit-filter', 'none');
                                _this.renderer.setStyle(_this.elementRef.nativeElement, 'filter', 'none');
                            }
                        }), WAITING_FOR_OVERLAY_DISAPPEAR);
                    }
                }));
            };
        /**
         * On destroy event
         */
        /**
         * On destroy event
         * @return {?}
         */
        NgxUiLoaderBlurredDirective.prototype.ngOnDestroy = /**
         * On destroy event
         * @return {?}
         */
            function () {
                if (this.showForegroundWatcher) {
                    this.showForegroundWatcher.unsubscribe();
                }
            };
        NgxUiLoaderBlurredDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ngxUiLoaderBlurred]' },] }
        ];
        /** @nocollapse */
        NgxUiLoaderBlurredDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: NgxUiLoaderService }
            ];
        };
        NgxUiLoaderBlurredDirective.propDecorators = {
            blur: [{ type: i0.Input }],
            loaderId: [{ type: i0.Input }]
        };
        return NgxUiLoaderBlurredDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiLoaderModule = /** @class */ (function () {
        function NgxUiLoaderModule() {
        }
        /**
         * forRoot
         * @param ngxUiLoaderConfig
         * @returns A module with its provider dependencies
         */
        /**
         * forRoot
         * @param {?} ngxUiLoaderConfig
         * @return {?} A module with its provider dependencies
         */
        NgxUiLoaderModule.forRoot = /**
         * forRoot
         * @param {?} ngxUiLoaderConfig
         * @return {?} A module with its provider dependencies
         */
            function (ngxUiLoaderConfig) {
                return {
                    ngModule: NgxUiLoaderModule,
                    providers: [
                        {
                            provide: NGX_UI_LOADER_CONFIG_TOKEN,
                            useValue: ngxUiLoaderConfig
                        }
                    ]
                };
            };
        NgxUiLoaderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            NgxUiLoaderComponent,
                            NgxUiLoaderBlurredDirective,
                        ],
                        exports: [
                            NgxUiLoaderComponent,
                            NgxUiLoaderBlurredDirective,
                        ]
                    },] }
        ];
        return NgxUiLoaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Injection token for ngx-ui-loader-router configuration
     * @type {?}
     */
    var NGX_UI_LOADER_ROUTER_CONFIG_TOKEN = new i0.InjectionToken('ngxUiLoaderRouterCustom.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Router loader id
     * @type {?}
     */
    var ROUTER_LOADER_ID = '$_router_loader';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiLoaderRouterModule = /** @class */ (function () {
        /**
         * Constructor
         *
         * @param parentModule
         * @param config
         * @param router
         * @param ngxUiLoaderService
         */
        function NgxUiLoaderRouterModule(parentModule, config, router$$1, ngxUiLoaderService) {
            if (parentModule) {
                throw new Error('[ngx-ui-loader] - NgxUiLoaderRouterModule is already loaded. It should be imported in the root `AppModule` only!');
            }
            /** @type {?} */
            var defaultConfig = {
                loaderId: ngxUiLoaderService.getDefaultConfig().masterLoaderId,
                showForeground: true
            };
            if (config) {
                defaultConfig = __assign({}, defaultConfig, config);
            }
            router$$1.events
                .subscribe(( /**
         * @param {?} event
         * @return {?}
         */function (event) {
                if (event instanceof router.NavigationStart) {
                    if (defaultConfig.showForeground) {
                        ngxUiLoaderService.startLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                    }
                    else {
                        ngxUiLoaderService.startBackgroundLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                    }
                }
                if (event instanceof router.NavigationEnd || event instanceof router.NavigationCancel || event instanceof router.NavigationError) {
                    if (defaultConfig.showForeground) {
                        ngxUiLoaderService.stopLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                    }
                    else {
                        ngxUiLoaderService.stopBackgroundLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                    }
                }
            }));
        }
        /**
         * forRoot
         * @param routerConfig Configuration
         * @returns A module with its provider dependencies
         */
        /**
         * forRoot
         * @param {?} routerConfig Configuration
         * @return {?} A module with its provider dependencies
         */
        NgxUiLoaderRouterModule.forRoot = /**
         * forRoot
         * @param {?} routerConfig Configuration
         * @return {?} A module with its provider dependencies
         */
            function (routerConfig) {
                return {
                    ngModule: NgxUiLoaderRouterModule,
                    providers: [
                        {
                            provide: NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,
                            useValue: routerConfig
                        }
                    ]
                };
            };
        NgxUiLoaderRouterModule.decorators = [
            { type: i0.NgModule, args: [{},] }
        ];
        /** @nocollapse */
        NgxUiLoaderRouterModule.ctorParameters = function () {
            return [
                { type: NgxUiLoaderRouterModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,] }] },
                { type: router.Router },
                { type: NgxUiLoaderService }
            ];
        };
        return NgxUiLoaderRouterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Injection token for ngx-ui-loader-http configuration
     * @type {?}
     */
    var NGX_UI_LOADER_HTTP_CONFIG_TOKEN = new i0.InjectionToken('ngxUiLoaderHttpCustom.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Http loader id
     * @type {?}
     */
    var HTTP_LOADER_ID = '$_http-loader';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiLoaderHttpInterceptor = /** @class */ (function () {
        /**
         * Constructor
         * @param config
         * @param ngxUiLoaderService
         */
        function NgxUiLoaderHttpInterceptor(config, ngxUiLoaderService) {
            this.ngxUiLoaderService = ngxUiLoaderService;
            this.count = 0;
            this.defaultConfig = {
                loaderId: this.ngxUiLoaderService.getDefaultConfig().masterLoaderId,
                showForeground: false
            };
            if (config) {
                if (config.exclude) {
                    this.exclude = config.exclude.map(( /**
                     * @param {?} url
                     * @return {?}
                     */function (url) { return url.toLowerCase(); }));
                }
                if (config.excludeRegexp) {
                    this.excludeRegexp = config.excludeRegexp.map(( /**
                     * @param {?} regexp
                     * @return {?}
                     */function (regexp) { return new RegExp(regexp, 'i'); }));
                }
                this.defaultConfig = __assign({}, this.defaultConfig, config);
            }
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        NgxUiLoaderHttpInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                var _this = this;
                if (this.isIgnored(req.url)) {
                    return next.handle(req);
                }
                this.count++;
                if (this.defaultConfig.showForeground) {
                    if (!this.ngxUiLoaderService.hasForeground(this.defaultConfig.loaderId, HTTP_LOADER_ID)) {
                        this.ngxUiLoaderService.startLoader(this.defaultConfig.loaderId, HTTP_LOADER_ID);
                    }
                }
                else {
                    if (!this.ngxUiLoaderService.hasBackground(this.defaultConfig.loaderId, HTTP_LOADER_ID)) {
                        this.ngxUiLoaderService.startBackgroundLoader(this.defaultConfig.loaderId, HTTP_LOADER_ID);
                    }
                }
                return next.handle(req).pipe(operators.finalize(( /**
                 * @return {?}
                 */function () {
                    _this.count--;
                    if (_this.count === 0) {
                        if (_this.defaultConfig.showForeground) {
                            _this.ngxUiLoaderService.stopLoader(_this.defaultConfig.loaderId, HTTP_LOADER_ID);
                        }
                        else {
                            _this.ngxUiLoaderService.stopBackgroundLoader(_this.defaultConfig.loaderId, HTTP_LOADER_ID);
                        }
                    }
                })));
            };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        NgxUiLoaderHttpInterceptor.prototype.isIgnored = /**
         * @private
         * @param {?} url
         * @return {?}
         */
            function (url) {
                if (this.exclude) {
                    // do not show the loader for api urls in the `exclude` list
                    if (this.exclude.findIndex(( /**
                     * @param {?} str
                     * @return {?}
                     */function (str) { return url.toLowerCase().startsWith(str); })) !== -1) {
                        return true;
                    }
                }
                if (this.excludeRegexp) {
                    // do not show the loader for api urls which matches regexps in the `excludeRegexp` list
                    if (this.excludeRegexp.findIndex(( /**
                     * @param {?} regexp
                     * @return {?}
                     */function (regexp) { return regexp.test(url); })) !== -1) {
                        return true;
                    }
                }
                return false;
            };
        NgxUiLoaderHttpInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NgxUiLoaderHttpInterceptor.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN,] }] },
                { type: NgxUiLoaderService }
            ];
        };
        return NgxUiLoaderHttpInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiLoaderHttpModule = /** @class */ (function () {
        /**
         * Constructor
         * @param parentModule optional
         */
        function NgxUiLoaderHttpModule(parentModule) {
            if (parentModule) {
                throw new Error('[ngx-ui-loader] - NgxUiLoaderHttpModule is already loaded. It should be imported in the root `AppModule` only!');
            }
        }
        /**
         * forRoot
         * @param httpConfig Configuration
         * @returns A module with its provider dependencies
         */
        /**
         * forRoot
         * @param {?} httpConfig Configuration
         * @return {?} A module with its provider dependencies
         */
        NgxUiLoaderHttpModule.forRoot = /**
         * forRoot
         * @param {?} httpConfig Configuration
         * @return {?} A module with its provider dependencies
         */
            function (httpConfig) {
                return {
                    ngModule: NgxUiLoaderHttpModule,
                    providers: [
                        {
                            provide: NGX_UI_LOADER_HTTP_CONFIG_TOKEN,
                            useValue: httpConfig
                        }
                    ]
                };
            };
        NgxUiLoaderHttpModule.decorators = [
            { type: i0.NgModule, args: [{
                        providers: [
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: NgxUiLoaderHttpInterceptor,
                                multi: true
                            }
                        ],
                    },] }
        ];
        /** @nocollapse */
        NgxUiLoaderHttpModule.ctorParameters = function () {
            return [
                { type: NgxUiLoaderHttpModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return NgxUiLoaderHttpModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxUiLoaderService = NgxUiLoaderService;
    exports.NgxUiLoaderModule = NgxUiLoaderModule;
    exports.SPINNER = SPINNER;
    exports.POSITION = POSITION;
    exports.PB_DIRECTION = PB_DIRECTION;
    exports.NgxUiLoaderRouterModule = NgxUiLoaderRouterModule;
    exports.NgxUiLoaderHttpModule = NgxUiLoaderHttpModule;
    exports.ɵc = NgxUiLoaderBlurredDirective;
    exports.ɵa = NGX_UI_LOADER_CONFIG_TOKEN;
    exports.ɵb = NgxUiLoaderComponent;
    exports.ɵf = NGX_UI_LOADER_HTTP_CONFIG_TOKEN;
    exports.ɵe = NgxUiLoaderHttpInterceptor;
    exports.ɵd = NGX_UI_LOADER_ROUTER_CONFIG_TOKEN;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ui-loader.umd.js.map