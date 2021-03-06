import {ConsentStage} from "./consent-stage.model";
import {ConsentStageOptionKey} from "./consent-stage-option-key.enum";

export const CONSENT_STAGES: ConsentStage[] = [
  {
    consentStage: "SAVED",
    text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.IN_PROGRESS",
    icon: "edit",
    color: "accent",
    options: [
      {
        key: ConsentStageOptionKey.EDIT,
        icon: "edit",
        text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.EDIT_THIS_CONSENT",
        routerLink: '/consents/consent-create-edit'
      },
      {
        key: ConsentStageOptionKey.DOWNLOAD_SAVED_PDF,
        icon: "search",
        text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.PREVIEW_THIS_CONSENT",
        isMethod: true
      },
      {
        key: ConsentStageOptionKey.APPLY_TRY_POLICY,
        icon: "settings",
        text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.APPLY_TRY_POLICY",
        isMethod: true
      },
      {
        key: ConsentStageOptionKey.SIGN,
        icon: "assignment_turned_in",
        text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.PROVIDE_ESIGNATURE",
        routerLink: '/consents/consent-sign'
      },
      {
        key: ConsentStageOptionKey.DELETE,
        icon: "delete_forever",
        text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.DELETE_THIS_CONSENT",
        isMethod: true
      }]
  },
  {
    consentStage: "SIGNED",
    text: "CONSENTS.CARD.CONSENT_SIGNED_STAGE.SIGNED",
    icon: "check_circle",
    color: "primary",
    options: [
      {
        key: ConsentStageOptionKey.DOWNLOAD_SIGNED_PDF,
        icon: "file_download",
        text: "CONSENTS.CARD.CONSENT_SIGNED_STAGE.VIEW_SIGNED_CONSENT",
        isMethod: true
      },
      {
        key: ConsentStageOptionKey.REVOKE,
        icon: "cancel",
        text: "CONSENTS.CARD.CONSENT_SIGNED_STAGE.REVOCATION",
        routerLink: '/consents/consent-revoke'
      },
      {
        key: ConsentStageOptionKey.APPLY_TRY_POLICY,
        icon: "settings",
        text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.APPLY_TRY_POLICY",
        isMethod: true
      }
    ]
  },
  {
    consentStage: "REVOKED",
    text: "CONSENTS.CARD.CONSENT_REVOKED_STAGE.REVOKED",
    icon: "cancel",
    color: "warn",
    options: [
      {
        key: ConsentStageOptionKey.DOWNLOAD_SIGNED_PDF,
        icon: "file_download",
        text: "CONSENTS.CARD.CONSENT_REVOKED_STAGE.VIEW_SIGNED_CONSENT",
        isMethod: true
      },
      {
        key: ConsentStageOptionKey.DOWNLOAD_REVOKED_PDF,
        icon: "file_download",
        text: "CONSENTS.CARD.CONSENT_REVOKED_STAGE.VIEW_SIGNED_REVOCATION",
        isMethod: true
      },
      {
        key: ConsentStageOptionKey.APPLY_TRY_POLICY,
        icon: "settings",
        text: "CONSENTS.CARD.CONSENT_SAVE_STAGE.APPLY_TRY_POLICY",
        isMethod: true
      }
    ]
  }];
