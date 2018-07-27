"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ThemeManagerComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ThemeManagerComponent.prototype.ngOnInit = function () {
    };
    return ThemeManagerComponent;
}());
ThemeManagerComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        templateUrl: './theme_manager.component.html',
        styleUrls: ['./theme_manager.component.css']
    })
], ThemeManagerComponent);
exports.ThemeManagerComponent = ThemeManagerComponent;
