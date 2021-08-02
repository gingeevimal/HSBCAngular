// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment =  {
    production: false,
  
    // localhost
    // 'loginServiceUrl': "https://localhost:44321/User/",
    // 'menuserviceUrl': "https://localhost:44321/MenuMaster/",
    // 'roleserviceUrl': "https://localhost:44321/MenuMaster/",
    // 'userGroupserviceUrl': "https://localhost:44321/UserGroup/",
    // 'clientAdministrationServiceUrl': "https://localhost:44321/ClientDetails/",
    // 'userManagementServiceUrl': "https://localhost:44321/UserManagement/",
    // 'servicecatalogUrl': "https://localhost:44321/ServiceCatalog/",
    // 'roleDefinitionServiceUrl': "https://localhost:44321/RoleDefinition/",
    // 'projectTypeRegulationServiceUrl': "https://localhost:44321/ProjectTypeRegulation/",
    // 'projectUserRoleMappingServiceUrl': "https://localhost:44321/ProjectUserRoleMapping/",
    // 'projectDefinitionServiceUrl': "https://localhost:44321/ProjectDefinition/",
    // 'clientAdminUserBoardServiceUrl':"https://localhost:44321/AdminUserBoard/",
    // 'projectConfigurationServiceUrl':"https://localhost:44321/input/",
    // 'workflowServiceUrl':"https://localhost:44321/Worxtream/workflowapi/"

    'loginServiceUrl': "http://18.232.242.41:8000/User/",
    'menuserviceUrl': "http://18.232.242.41:8000/MenuMaster/",
    'roleserviceUrl': "https://localhost:44321/MenuMaster/",
    'userGroupserviceUrl': "http://18.232.242.41:8000/UserGroup/",
    'clientAdministrationServiceUrl': "http://18.232.242.41:8000/ClientDetails/",
    'userManagementServiceUrl': "http://18.232.242.41:8000/UserManagement/",
    'servicecatalogUrl': "http://18.232.242.41:8000/ServiceCatalog/",
    'roleDefinitionServiceUrl': "http://18.232.242.41:8000/RoleDefinition/",
    'projectTypeRegulationServiceUrl': "http://18.232.242.41:8000/ProjectTypeRegulation/",
    'projectUserRoleMappingServiceUrl': "http://18.232.242.41:8000/ProjectUserRoleMapping/",
    'projectDefinitionServiceUrl': "http://18.232.242.41:8000/ProjectDefinition/",
    'clientAdminUserBoardServiceUrl': "http://18.232.242.41:8000/AdminUserBoard/",
    'projectConfigurationServiceUrl':"http://18.232.242.41:8000/input/",
    'workflowServiceUrl': "http://18.232.242.41:8081/Worxtream/workflowapi/",

     'CADServiceUrl': "https://localhost:44373/",

    // 'MATServiceURL':"http://34.248.199.184:8083/api/",
    'MATServiceURL':"http://localhost:57779/api/",
    'path': "",
    'rowsPerPageOptions': [10, 20, 50, 100],
    'rows': 10,
    'defaultPassword':"Angular@123",
    'roles':{1:"superAdmin",2:"ideAdmin",3:"ideUser",4:"collegeAdmin",5:"collegeUser",6:"collegeNcpUser",7:"collegeQA",8:"collegePresident"},
    'statusIcon':{success:"text-success fa fa-square",reject:"fa fa-circle text-danger",pending:"fa fa-play fa-rotate-270 text-warning",reSubmit:"fa fa-certificate text-info", InActive:"fa fa-play fa-rotate-270 text-warning"},  
    'toastTimeout':5000,  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.