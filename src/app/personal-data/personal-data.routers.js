"use strict";
var personal_data_edit_component_1 = require('./personal-data-edit/personal-data-edit.component');
var personal_data_view_component_1 = require('./personal-data-view/personal-data-view.component');
var guard_service_1 = require('app/shared/services/guard.service');
exports.personalDataRoutes = [
    { path: '', canActivate: [guard_service_1.isHasId], component: personal_data_view_component_1.PersonalDataViewComponent },
    { path: 'edit', component: personal_data_edit_component_1.PersonalDataEditComponent }
];
