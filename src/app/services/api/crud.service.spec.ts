import {TestBed, inject, fakeAsync, tick} from '@angular/core/testing';
import {APP_CONFIG, AppConfig} from "../../config";
import {BaseRequestOptions, Response, ResponseOptions, Http, ConnectionBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {CrudService} from "./crud.service";
import {IAppConfig} from "../../config/iapp-config";
import {Model} from "../../models/model";
import {Observable} from "rxjs/Rx";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

describe('CrudService', () => {

    let crudService:CrudService;
    let mockBackend:MockBackend;
    let http:Http;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            //     providers: [
            //         // HttpClient,
            //         // HttpHandler,
            //         HttpClientTestingModule
            // //         {provide: APP_CONFIG, useValue: AppConfig},
            // //         {
            // //             provide: Http, useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
            // //             return new Http(backend, defaultOptions)
            // //         },
            // //             deps: [MockBackend, BaseRequestOptions]
            // //         },
            //     ]
        });

        // mockBackend = new MockBackend();
        // http = new Http(mockBackend, new BaseRequestOptions());
        // crudService = new CrudService('somePath', AppConfig, http);
    });

    // it('should return correct apipath', () => {
    //     expect(crudService.getApiPath()).toEqual('somePath');
    // });


    // it('should make correct getAll request', fakeAsync(()=> {
    //
    //     mockBackend.connections.subscribe(connection => {
    //         expect(connection.request.url).toBe('http://fake.test.url/api/somePath');
    //         connection.mockRespond(getExpectedGetResponse())
    //     });
    //
    //     var result;
    //     crudService.getAll()
    //         .subscribe(data => {
    //             result = data;
    //         });
    //
    //     expect(result).toEqual("something");
    // }));
    //
    // it('should make correct getById request', fakeAsync(()=> {
    //
    //     mockBackend.connections.subscribe(connection => {
    //         expect(connection.request.url).toBe('http://fake.test.url/api/somePath/5');
    //         connection.mockRespond(getExpectedGetResponse())
    //     });
    //
    //     var result;
    //     crudService.getById(5)
    //         .subscribe(data => {
    //             result = data;
    //         });
    //
    //     expect(result).toEqual("something");
    // }));


    // @todo: Use that for other tests
    it('expects a ble GET request', inject([HttpClient, HttpTestingController], (http:HttpClient, httpMock:HttpTestingController) => {

        // http
        //     .get('/data')
        //     .subscribe(data => expect(data['name']).toEqual('Test Data'));
        mockBackend = new MockBackend();
        // http = new Http(mockBackend, new BaseRequestOptions());
        crudService = new CrudService('somePath', AppConfig, http);

        crudService.getAll()
            .subscribe(result => {
                expect(result).toEqual("something");
            });

        // At this point, the request is pending, and no response has been
        // sent. The next step is to expect that the request happened.
        const req = httpMock.expectOne('/data');

        // If no request with that URL was made, or if multiple requests match,
        // expectOne() would throw. However this test makes only one request to
        // this URL, so it will match and return a mock request. The mock request
        // can be used to deliver a response or make assertions against the
        // request. In this case, the test asserts that the request is a GET.
        expect(req.request.method).toEqual('GET');

        // Next, fulfill the request by transmitting a response.
        req.flush({name: 'Test Data'});

        // Finally, assert that there are no outstanding requests.
        httpMock.verify();
    }));


    // it('should make correct create request', fakeAsync(()=> {
    //
    //     spyOn(http, 'post').and.returnValue(new Observable<Response>((response:Response)=> {
    //         return getExpectedGetResponse()
    //     }));
    //
    //     var result;
    //     let model = new FakeModel();
    //     model.field = 'someValue';
    //     crudService.create(model)
    //         .subscribe(data => {
    //             result = data;
    //         });
    //
    //     expect(result).toEqual("something");
    // }));


    function getExpectedGetResponse() {
        let httpData = `{
        "success": true,
        "data": "something"
        }`;
        let responseOpt = new ResponseOptions({body: httpData});
        return new Response(responseOpt);
    }
});

class FakeModel extends Model {
    field:string;
}
