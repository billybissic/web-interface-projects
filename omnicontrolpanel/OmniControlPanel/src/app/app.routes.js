"use strict";
exports.__esModule = true;
var home_component_1 = require("./home/home.component");
var dashboard_component_1 = require("./dashboard/dashboard");
var profile_component_1 = require("./profile/profile.component");
var mediaplayer_component_1 = require("./media_player/media_player.component");
var photogallerymanager_component_1 = require("./photo_gallery_manager/photo_gallery_manager.component");
var logconsole_component_1 = require("./log_console/log_console.component");
var blogmanager_component_1 = require("./blog_manager/blog_manager.component");
var eventmanager_component_1 = require("./event_manager/event_manager.component");
var applicationsettings_componet_1 = require("./application_settings/application_settings.component");
var applicationlogs_component_1 = require("./application_logs/application_logs.component");
var applications_component_1 = require("./applications/applications.component");
var priliveges_component_1 = require("./privileges/privileges.component");
var usergroups_component_1 = require("./user_groups/user_groups.component");
var userprivileges_component_1 = require("./user_privileges/user_privileges.component");
var grouptypes_component_1 = require("./group_types/group_types.component");
var groupprivileges_component_1 = require("./group_privileges/group_privileges.component");
var managegalleries_component_1 = require("./manage_galleries/manage_galleries.component");
var thememanager_component_1 = require("./theme_manager/theme_manager.component");
var article_component_1 = require("./testform/article.component");
var callback_component_1 = require("./callback/callback.component");

exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    /* main menu routes */
    { path: 'callback', component: callback_component_1.CallbackComponent },
    { path: 'dashboard', component: dashboard_component_1.DashBoardComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'mediaplayer', component: mediaplayer_component_1.MediaPlayerComponent },
    { path: 'logconsole', component: logconsole_component_1.LogConsoleComponent },
    { path: 'photogallerymanager', component: photogallerymanager_component_1.PhotoGalleryManagerComponent },
    /* dashboard routes */
    { path: 'dashboard/blogmanager', component: blogmanager_component_1.BlogManagerComponent },
    { path: 'dashboard/eventmanager', component: eventmanager_component_1.EventManagerComponent },
    { path: 'dashboard/applicationsettings', component: applicationsettings_component_1.ApplicationSettingsComponent },
    { path: 'dashboard/applications', component: applications_component_1.ApplicationsComponent },
    { path: 'dashboard/applicationlogs', component: applicationlogs_component_1.ApplicationLogsComponent },
    { path: 'dashboard/privileges', component: privileges_component_1.PrivilegesComponent },
    { path: 'dashboard/usergroups', component: usergroups_component_1.UserGroupsComponent },
    { path: 'dashboard/userprivileges', component: userprivileges_component_1.UserPrivilegesComponent },
    { path: 'dashboard/grouptypes', component: grouptypes_component_1.GroupTypesComponent },
    { path: 'dashboard/groupprivileges', component: groupprivileges_component_1.GroupPrivilegesComponent },
    { path: 'dashboard/managegalleries', component: managegalleries_component_1.ManageGalleriesComponent },
    { path: 'dashboard/thememanager', component: thememanager_component_1.ThemeManagerComponent },
    { path: 'dashboard/testform', component: article_component_1.ArticleComponent },
    { path: '**', redirectTo: '' }
];
