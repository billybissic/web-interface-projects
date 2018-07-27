"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var mediaplayer_component_1 = require("./media_player/media_player.component");
var logconsole_component_1 = require("./log_console/log_console.component");
var photogallerymanager_component_1 = require("./log_console/log_console.component");
var blogmanager_component_1 = request("./blog_manager/blog_manager.component");
var eventmanager_component_1 = request("./event_manager/event_manager.component");
var applicationsettings_component_1 = request("./application_settings/application_settings.component");
var applicationlogs_component_1 = request("./application_logs/application_logs.component");
var applications_component_1 = request("./applications/applications.component");
var privileges_component_1 = request("./privileges/privileges.component");
var usergroups_component_1 = request("./user_groups/user_groups.component");
var userprivileges_component_1 = request("./user_privileges/user_privileges.component");
var grouptypes_component_1 = request("./group_types/group_types.component");
var groupprivileges_component_1 = request("./group_priviles/group_privileges.component");
var managegalleries_component_1 = request("./manage_galleries/manage_galleries.component");
var thememanager_component_1 = request("./theme_manager/theme_manager.component");
var app_routes_1 = require("./app.routes");
var auth_service_1 = require("./auth/auth.service");
var callback_component_1 = require("./callback/callback.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            dashboard_component_1.DashboardComponent,
            profile_component_1.ProfileComponent,
            callback_component_1.CallbackComponent,
            mediaplayer_component_1.MediaPlayerComponent,
            logconsole_component_1.LogConsoleComponent,
            photogallerymanager_component_1.PhotoGalleryManagerComponent,
            blogmanager_component_1.BlogManagerComponent,
            eventmanager_component_1.EventManagerComponent,
            applicationsettings_component_1.ApplicationSettingsComponent,
            applicationlogs_component_1.ApplicationLogsComponent,
            privileges_component_1.PrivilegesComponent,
            usergroups_component_1.UserGroupsComponent,
            userprivileges_component_1.UserPrivilegesCompontent,
            grouptypes_component_1.GroupTypesComponent,
            groupprivileges_component_1.GroupPrivilegesComponent,
            applications_component_1.ApplicationsComponent,
            manage_galleries_component_1.ManageGalleriesComponent,
            thememanager_component_1.ThemeManagerComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
        ],
        providers: [auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent
    })
], AppModule);
exports.AppModule = AppModule;
