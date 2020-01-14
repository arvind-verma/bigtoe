import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { ConstantConfigService } from '../services/constant-config.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  _baseURL : string;
	_imageURL : string;
	_accessToken : string;

    constructor(
      private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute
    ) { 
      this._baseURL = ConstantConfigService.baseURL;
      this._imageURL = ConstantConfigService.ImageUrl;
      this._accessToken = ConstantConfigService.accessToken;			
    }
    // Get Role Privilages 
    getRoles(){
      return this.http.get(this._baseURL+"/web-services/getRoles");
    }

    // Post Role Privilages
	  getUserPasswordHashed(roleId,privilegeHeadings,check){
  		return this.http.post(this._baseURL+"/web-services/updateUserPrivilege",{'role':roleId,'privilege':privilegeHeadings,'is_checked':check});
  	}

    openSigningHash(timehash,hashKey){
      return this.http.get(this._baseURL+"/web-services/template/signing/"+timehash+"/"+hashKey);
    }

    // Reject a request
	  rejectRequestWithMessage(hash,reject_message){
  		return this.http.post(this._baseURL+"/sign/reject",{'hash':hash,'reason':reject_message,'ng-7':'true'});
    }
    
    updateStep(postData){
      return this.http.post(this._baseURL+"/web-services/updateSigningStep",postData);
    }

    saveBlockWithoutToken(postData){
      return this.http.post(this._baseURL+"/prepare-template/save_signing_blocks_without_token_queue",postData);
    }

    getProcessRequest(processId){
      return this.http.get(this._baseURL+'/web-services/process_data/'+processId);
    }

    getBillingProductData(billingProductId){
      return this.http.get(this._baseURL+'/web-services/product_info/'+billingProductId);
    }
    
    checkPaymentStatus(processId){
      return this.http.get(this._baseURL+'/web-services/check-payment-status/'+processId+'/1');
    }

    approveRequest(postData){
      return this.http.post(this._baseURL+"/sign/approve",postData);
    }

    updateRequestStatus(postData){
      return this.http.post(this._baseURL+"/web-services/updateRequestStatus",postData);
    }

    decodeHash(postData){
      return this.http.post(this._baseURL+"/web-services/decodeHash",postData);
    }

    updateReverseStep(postData){
      return this.http.post(this._baseURL+"/web-services/updateReverseStep",postData);
    }

    addRejectReason(postData){
      return this.http.post(this._baseURL+"/web-services/reject_doc_upload",postData);
    }

    sendNotificationToCompany(postData){
      return this.http.post(this._baseURL+"/web-services/reject_notification",postData);
    }

    getViewSampleDocument(documentId){
      return this.http.get(this._baseURL+'/web-services/viewDocumentDetail/'+documentId);
    }

    getPreviewDocument(user_doc_id){
      return this.http.get(this._baseURL+'/web-services/viewPreviewDocument/'+user_doc_id);
    }

    openPaymentReverse(postData){
      return this.http.post(this._baseURL+"/web-services/getUpdateDocumentNotes",postData);
    }
    
    registration(first_name, middle_name, last_name,email,password){
      return this.http.post(this._baseURL+"/web-services/register-user",{'full_name':first_name,'first_name' :first_name, 'middle_name' :middle_name, 'last_name' :last_name,'email' :email,'password' :password});
    }

    verifyUser(hash){
      return this.http.post(this._baseURL+"/web-services/verify-user", {'hash' :hash});
    }

    getSecurityByProcess(processId,userId,userEmail){
      return this.http.get(this._baseURL+'/web-services/security-process/'+processId+'/'+userId+'/'+userEmail);
    }

    sendSmsOtpToUser(phone, email, phoneCode,is_signee="0",process_id="",loginrequest='',companyid=''){
      return this.http.post(this._baseURL+"/web-services/sentSmsOtp", {"phone":phone, "email":email, "phoneCode":phoneCode,"is_signee":is_signee,"process_id":process_id,'loginrequest':loginrequest,'companyid':companyid});
    }

    VerifyOtp(data){
      return this.http.post(this._baseURL+"/web-services/security-verify-otp", data);
    }

    contactRequestor(data){
      return this.http.post(this._baseURL+"/web-services/contact_requestor", data);
    }

    getCompanySignee(company_id){
      return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/signee');
    }

    getSampleDocsCompany(company_id){
      return this.http.get(this._baseURL+'/web-services/getSampleDocumentCompany/'+company_id);
    }

    getTeamListingCompany(company_id){
      return this.http.get(this._baseURL+'/web-services/getTeamListing/'+company_id);
    }

    getApprovalUserList(company_id){
      return this.http.get(this._baseURL+'/web-services/getApprovalListing/'+company_id);
    }

    getCompanyUsersByType(company_id){
      return this.http.get(this._baseURL+'/web-services/getCompanyUsersByType/'+company_id);
    }

    uploadsamplepdf(postData,comapny_id){
      return this.http.post(this._baseURL+"/company/web-services/"+comapny_id+"+document/uploadsamplepdf", postData);
    }
	
	verifySecondaryEmail(hash){
      return this.http.post(this._baseURL+"/web-services/verifySecondaryEmail", {"hash":hash});
    }

    getDocumentData(hash){
      return this.http.get(this._baseURL+'/web-services/edit-template-detail/' + hash);
    }

    updateTemplate(postData){
      return this.http.post(this._baseURL+"/web-services/template/updateEdit", postData);
    }

    getSignCompanyInfo(id){
      return this.http.get(this._baseURL+'/web-services/get-company-sess-info/'+id);
    }

    getCompanyHashedUser(hash){
      return this.http.post(this._baseURL+"/web-services/decodeHashRegister", {"hash":hash});
    }

    resendVerificationEmail(email){
      return this.http.post(this._baseURL+"/web-services/register-verification-email-resend", {"email":email});
    }

    completeProcess(data){
      return this.http.post(this._baseURL+"/web-services/complete-process", data);
    }

    paymentViaPayPal(postData){
      return this.http.post(this._baseURL+"/web-services/do-pp-payments", postData);
    }

    getUserCCInfoByCompany(email,companyid){
      return this.http.get(this._baseURL+"/web-services/user-cc-info-by-company/"+email+'/'+companyid);
    }
    
    doStripePayment(postData){
      return this.http.post(this._baseURL+"/web-services/do-payments", postData);
    }
}
