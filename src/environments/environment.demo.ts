// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
      // Demo server
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
    'workflowServiceUrl': "http://18.232.242.41:8081/Worxtream/workflowapi/",
    'clientAdminUserBoardServiceUrl': "http://18.232.242.41:8000/AdminUserBoard/",
    'projectConfigurationServiceUrl':"http://18.232.242.41:8000/input/",
  
   
  

  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.