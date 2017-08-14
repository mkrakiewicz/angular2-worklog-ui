import {OpaqueToken} from "@angular/core";
import {IAppConfig} from "./iapp-config";
import {environment} from "../../environments/environment.test";

export let APP_CONFIG_TEST = new OpaqueToken("app2.config");

export const AppConfigTest:IAppConfig = {
    apiEndpoint: environment.apiEndpoint
};