import {InjectionToken} from "@angular/core";
import {IAppConfig} from "./iapp-config";
import {environment} from "../../environments/environment";

export let APP_CONFIG = new InjectionToken<string>("app.config");

export const AppConfig:IAppConfig = {
    apiEndpoint: environment.apiEndpoint
};