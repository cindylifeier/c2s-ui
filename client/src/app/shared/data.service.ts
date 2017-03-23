import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {ExceptionService} from "../core/exception.service";
import {Observable} from "rxjs";
import {C2sUiApiUrlService} from "./c2s-ui-api-url.service";
import {ConsentList} from "../consent/shared/consent-list.model";
import {ConsentProvider} from "./consent-provider.model";

@Injectable()
export class DataService {

  constructor(private c2sUiApiUrlService: C2sUiApiUrlService,
              private http: Http,
              private exceptionService: ExceptionService) {
  }

  getProviders(): Observable<ConsentProvider[]> {
    const resourceUrl = this.c2sUiApiUrlService.getPcmBaseUrl().concat("/patients/providers");
    return this.http.get(resourceUrl)
      .map((resp: Response) => <ConsentProvider>(resp.json()))
      .catch(this.exceptionService.handleError);
  }

  getConsents(page: number): Observable<ConsentList> {
    const resourceUrl = this.c2sUiApiUrlService.getPcmBaseUrl().concat("/patients/consents");
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page.toString());
    return this.http.get(resourceUrl, {search: params})
      .map((resp: Response) => <ConsentList>(resp.json()))
      .catch(this.exceptionService.handleError);
  }
}
