import {Component, OnInit, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Consent} from "../shared/consent.model";
import {CONSENT_STAGES} from "../shared/consent-stages.model";
import {ConsentStageOption} from "../shared/consent-stage-option.model";


@Component({
  selector: 'c2s-consent-card',
  templateUrl: './consent-card.component.html',
  styleUrls: ['./consent-card.component.css']
})
export class ConsentCardComponent implements OnInit, OnChanges {

  @Input() private consent: Consent;

  private detailsVisible: boolean = false;
  private height: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.detailsVisible = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  toggleDetailsVisible(el: any) {
    this.detailsVisible = !this.detailsVisible;
    this.height = this.height ? 0 : el.scrollHeight;
  }

  onResize(event: any, el: any) {
    this.height = this.height ? el.scrollHeight : 0;
  }

  hasDoNotShareSensitivityPolicyCodes(): boolean {
    return !!this.consent && !!this.consent.doNotShareSensitivityPolicyCodes &&
      this.consent.doNotShareSensitivityPolicyCodes.length > 0;
  }

  getHeightPx(): string {
    return `${this.height}px`;
  }

  getConsentStageOptions(): ConsentStageOption[] {
    return CONSENT_STAGES
      .filter(consentStage => consentStage.consentStage === this.consent.consentStage)
      .map(consentStage => consentStage.options)
      .pop();
  }

  getRouterLink(consentOption: ConsentStageOption): any {
    return consentOption.routerLink ? [consentOption.routerLink, this.consent.id] : '.'
  }
}