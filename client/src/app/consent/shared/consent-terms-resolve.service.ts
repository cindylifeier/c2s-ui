import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ConsentService} from "./consent.service";
import {ConsentTerms} from "./consent-terms.model";

@Injectable()
export class ConsentTermsResolveService implements Resolve<any> {
  constructor(private consentService: ConsentService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.consentService.getConsentAttestationTerm()
      .do((attestationConsentTerms: ConsentTerms) => {
        return attestationConsentTerms;
      });
  }


}
