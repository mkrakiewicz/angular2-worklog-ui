import {IAppConfig} from "./iapp-config";
import {environment} from "../../environments/environment.test";

export const AppConfigTest:IAppConfig = {
    apiEndpoint: environment.apiEndpoint
};