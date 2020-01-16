import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantConfigService {
  constructor() {

  }
  public static get domain(): any { return "18.215.216.157"; }
  public static get baseURL(): string { return "http://" + this.domain; }
  public static get ImageUrl(): string { return "http://18.214.252.20/uploads/user/teacher/"; }
  public static get APiUrl(): string { return "https://bigtoe.app/"; }
  public static get AuthModeCookieExpireTime2Week(): number { return 14; }
  public static get AuthModeCookieExpireTime4Week(): number { return 28; }
  public static get AuthModeCookieExpireTimeAlways(): number { return 365; }
  public static get AuthModeCookieEncryptionKey(): string { return "wfVJMILwRXFAvzhzurFBc8uw"; }
  public static get accessToken(): string { return "access_token"; }
  public static get captchaKey(): string { return "6Ldq4hgUAAAAAG29-ZKwU-vKE5QY-ed20H1wobOK"; }
  public static get stripeTestPublishKey(): string { return "pk_test_VJLwfwRFAvzhzurFMwIBcX8u"; }

}