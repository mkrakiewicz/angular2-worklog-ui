import {OpaqueToken} from "@angular/core";
import {environment} from "../../environments/environment";
import {IAppConfig} from "./iapp-config";

export let APP_CONFIG = new OpaqueToken("app.config");

export const AppConfig:IAppConfig = {
    apiEndpoint: environment.apiEndpoint
};