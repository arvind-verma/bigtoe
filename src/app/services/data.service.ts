import { Injectable } from '@angular/core';
import { ConstantConfigService } from '../services/constant-config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _baseURL : string;
  _imageURL : string;
  messageObj : any = {};
  is_error : boolean = false;
  error_message : string = ""
  is_error_modal : boolean = false;
  error_message_modal : string = "";
  is_success : boolean = false;
  success_message : string = "";
  is_success_modal : boolean = false;
  success_message_modal : string = "";
  constructor(private http: HttpClient) {

    this._baseURL = ConstantConfigService.baseURL;
    this._imageURL = ConstantConfigService.ImageUrl;
   }


  registerUser(data){
    return this.http.post(this._baseURL+"/web-services/register-user",{"full_name":data.first_name+' '+data.last_name,"first_name":data.first_name,'middle_name' :'','last_name' :data.last_name,"email":data.email,'password' :'freeflow'});
  }

  getFreeFlowLimit(){
    return this.http.get(this._baseURL+"/web-services/getFreeFlowLimit");
  }

  getDocsUploaded(userId,time_period){
    return this.http.get(this._baseURL+'/web-services/getDocsUploaded/'+userId+'/'+time_period);
  }

  templateFreeFlow(company_id,data){
    return this.http.post(this._baseURL+'/web-services/company/'+company_id+'/template/free-flow',data);
  }

  getPdfpageWise(company_id,document_id,document_file,i){
    return this.http.post(this._baseURL+'/web-services/company/'+company_id+'/template/getPdfpageWise',{"document_id":document_id,"document_file":document_file,"page_number":(i)});
  }

  uploadDocument(company_id,data){
    return this.http.post(this._baseURL+'/web-services/company/'+company_id+'/document/upload',data);
  }

  uploadSamplePdf(company_id,data){
    return this.http.post(this._baseURL+'/web-services/company/'+company_id+'/document/uploadsamplepdf',data);
  }

  uploadCut(company_id,doc_file,sample_name,request_type){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/template/uploadCutimageBackground",{"document_file":doc_file,"doc_title":sample_name,"document_status":request_type});
  }

  getPdfNoOfpages(company_id,doc_file,doc_id){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/template/getPdfNoOfpages",{"document_file":doc_file,"document_id":doc_id});
  }

  checkFileFormat(data): Observable<any[]>{
    if(data.target.files[0].size>2097152){
      this.messageObj = {
        'message' : "Max File Size should be 2MB",
        "success" : false
      }
      return Observable.of(this.messageObj);
    }
    else if(data.target.files[0].type=='application/pdf' || data.target.files[0].type=='image/png' || data.target.files[0].type=='image/jpg' || data.target.files[0].type=='image/jpeg'){
      this.messageObj = {
          'message' : "valid",
          "success" : true
      }
    
      return Observable.of(this.messageObj);
    }
    else{
      this.messageObj = {
        'message' : "Please upload pdf,jpg,jpeg,png only",
        "success" : false
      }
      return Observable.of(this.messageObj);
    }
  }

  checkExcelFileFormat(data): Observable<any[]>{
    if(data.target.files[0].size>2097152){
      this.messageObj = {
        'message' : "Max File Size should be 2MB",
        "success" : false
      }
      return Observable.of(this.messageObj);
    }
    else if(data.target.files[0].type=='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
      this.messageObj = {
          'message' : "valid",
          "success" : true
      }
    
      return Observable.of(this.messageObj);
    }
    else{
      this.messageObj = {
        'message' : "Please upload .xlsx only",
        "success" : false
      }
      return Observable.of(this.messageObj);
    }
  }

  documentList(company_id,type){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/document/listing",{"listing_type":type});
  }

  store(company_id,postData){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/template/store",postData);
  }

  saveTemplate(company_id,postData){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/template/save",postData);
  }

  saveTemplateCustomFields(company_id,customFDFFields,matrixposVar,matrixpos4Var,document_id){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/template/saveTemplateCustomFields",{"pageobj":customFDFFields,"matrixpos":matrixposVar,"matrixpos4":matrixpos4Var,"document_id":document_id});
  }

  sendRequest(company_id,postData){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/sendRequest",postData);
  }

  applyCredits(postData){
    return this.http.post(this._baseURL+"/web-services/apply-credit-to-user",postData);
  }

  groupList(){
    return this.http.get(this._baseURL+'/web-services/groupListing');
  }

  getCountryPhoneCode(){
    return this.http.get(this._baseURL+'/web-services/get-country-phone-code');
  }

  getApprovalUserList(){
    return this.http.get(this._baseURL+'/web-services/getApprovalListing');
  }

  getTeamListing(){
    return this.http.get(this._baseURL+'/web-services/getTeamListing');
  }

  getKitList(company_id){
    return this.http.get(this._baseURL+'/web-services/company/' + company_id + '/kit-listing');
  }

  getGroupCustomFields(company_id,groupId){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/group/'+groupId+'/customFields');
  }

  groupStat(company_id,groupId){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/group/'+groupId);
  }

  getAllCustomField(){
    return this.http.get(this._baseURL+'/web-services/custom-field-type-all');
  }

  getTFASettings(){
    return this.http.get(this._baseURL+'/web-services/getDefaultTwoFactorAuthOptions');
  }
  
  enableTwoFactor(userid,companyid,status){
    return this.http.post(this._baseURL+"/web-services/switchMyself",{"user_id":userid,"companyid":companyid,"status":status});
  }

  verifyOtpGoogle(google_otp,google_secret,email,company_id){
    return this.http.post(this._baseURL+"/web-services/verifyOtp",{'google_opt' :google_otp.replace(/ /g, ''),'google_secret':google_secret,'email':email,'company_id':company_id});
  }

  checkUserPhoneExist(){
    return this.http.get(this._baseURL+'/web-services/checkUserPhoneExist');
  }

  sendSmsOtpToUser(phone, email, phoneCode,is_signee="0",process_id="",loginrequest='',companyid=''){
    return this.http.post(this._baseURL+"/web-services/sentSmsOtp",{"phone":phone, "email":email, "phoneCode":phoneCode,"is_signee":is_signee,"process_id":process_id,'loginrequest':loginrequest,'companyid':companyid});
  }

  resendEmailToUser(){
    return this.http.post(this._baseURL+"/web-services/resendEmailOtp",{"action":"resend"});
  }

  verifyOtpSms(tempstorenumber,sms_opt){
    return this.http.post(this._baseURL+"/web-services/smsOtpVerify",{'phone' :tempstorenumber,'sms_opt' :sms_opt.replace(/ /g, '')});
  }

  updateSecurityPreference(securityoption){
    return this.http.post(this._baseURL+"/web-services/updateSecurityPreference",{'securityoption':securityoption});
  }

  makeOtpSmsDisabled(Option){
    return this.http.post(this._baseURL+"/web-services/smsOtpDisabled",{'option' :Option});
  }

  getRequests(selectedCompany, type,payment_mode,updateTimestamp){
    return this.http.post(this._baseURL+"/web-services/requestListing",{"company_id":selectedCompany, "activeTab":type,"payment_mode":payment_mode,"updateTimestamp":updateTimestamp});
  }

  getRequestsWatermark(request_id,user_document_id,value){
    return this.http.post(this._baseURL+"/web-services/sendSigneePdf",{"request_id":request_id,"user_document_id":user_document_id,"watermark_status":value});
  }

  getCompanyNeedApprovalDocuments(company_id,val){
    return this.http.get(this._baseURL+'/web-services/need-Approval-Listing/'+company_id+'/'+val);
  }

  getDocumentDetail(user_document_id,document_id,status_code){
    return this.http.get(this._baseURL+'/web-services/viewDocumentDetail/'+user_document_id+'/'+document_id+'/'+status_code);
  }

  rejectDocument(userDocumentId,documentId,reasonforrejection){
    return this.http.post(this._baseURL+"/web-services/reject_doc",{"user_document_id":userDocumentId,"document_id":documentId,"reject_note":reasonforrejection});
  }

  sendBackDocument(userDocumentId,documentId,reasonforrejection){
    return this.http.post(this._baseURL+"/web-services/sendback_doc",{"user_document_id":userDocumentId,"document_id":documentId,"reject_note":reasonforrejection});
  }

  approveDocument(user_document_id,document_id){
    return this.http.get(this._baseURL+'/web-services/approve_doc/'+user_document_id+'/'+document_id);
  }

  saveExpiryDate(document_id,expiry_date){
    return this.http.post(this._baseURL+"/web-services/change-expire-date",{"user_document_id":document_id,"expire_date":expiry_date});
  }

  getUserUpladDocumentRequest(){
    return this.http.get(this._baseURL+'/web-services/user-upload-requests');
  }

  getExpiredRequests(company_id){
    return this.http.get(this._baseURL+'/web-services/expired-request-listing/'+company_id);
  }

  updateRequest(request_id,date){
    return this.http.post(this._baseURL+"/web-services/update_request",{"request_id":request_id,"date":date});
  }

  getCompanySessionSetting(){
    return this.http.get(this._baseURL+'/web-services/company-session-setting');
  }

  checkPlanLimit(planLimit, currentCount, type, column_name, extraParam,present_req){
    if(currentCount == 'NA' && extraParam['plan_status'] == 1){
      return this.http.get(this._baseURL+'/web-services/check-plan-limit/'+type+'/'+column_name);
    }
    else{
      var response = '';
				if((planLimit > currentCount && extraParam['plan_status'] == 1 )|| extraParam['plan_status'] == 2){
					response = 'true';
					return Observable.of(response);
				}
				else{
					console.log('herer');
					response = 'false';
					return Observable.of(response);
				}
    }
    
  }

  addTeam(postData){
    return this.http.post(this._baseURL+"/web-services/saveTeam",postData);
  }

  getTeamListingArr(){
    return this.http.get(this._baseURL+'/web-services/getTeamListingArr');
  }

  getTemplateList(company_id){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/company-template-listing-counter');
  }

  getSampleDocs(){
    return this.http.get(this._baseURL+'/web-services/getSampleDocument');
  }

  submitSampleRequest(data){
    return this.http.post(this._baseURL+'/web-services/submitSampleRequest',data);
  }

  getSMSSecuritySetting(){
    return this.http.get(this._baseURL+'/web-services/get-sms-setting');
  }

  getCompanyInfo(company_id){
    return this.http.get(this._baseURL+'/web-services/getCompanyInfo/'+company_id);
  }

  saveSecurityAlerts(security_alert){
    return this.http.post(this._baseURL+'/web-services/save-sms-setting',{"security_alert":security_alert});
  }

  updateCompanyInfo(name,email,address,phone,company_name,website_url,ip_address,id,userid,state,city,zip){
    return this.http.post(this._baseURL+'/web-services/updateCompany/'+id, {"name":name,"email":email,"address":address,"phone":phone,"company_name":company_name,"website_url":website_url,"ip_address":ip_address,"user_id":userid,"state":state,"city":city,"zip":zip});
  }

  companySessionInfo(company_id){
    return this.http.get(this._baseURL+'/web-services/edit-com-session-setting/'+company_id);
  }

  saveSessionSetting(postData){
    return this.http.post(this._baseURL+'/web-services/save-session-setting', postData);
  }

  userRole(){
    return this.http.get(this._baseURL+'/web-services/getUserRoles');
  }

  getPhoneCodeByIP(){
    return this.http.get(this._baseURL+'/web-services/get-dial-code-ip');
  }

  saveUser(name,email,address,phone,role,company_id,city,state,zip){
    return this.http.post(this._baseURL+'/web-services/saveuser', {"name":name,"email":email,"address":address,"phone":phone,"role":role,"company_id":company_id,"city":city,"state":state,"zip":zip});
  }
  
  checkemailexists(email,id=''){
    return this.http.post(this._baseURL+'/web-services/checkemailexists', {"email":email,"userid":id});
  }

  getUserInfo(userid){
    return this.http.get(this._baseURL+'/web-services/getUserInfo/'+userid);
  }

  updateUser(name,email,address,phone,role,company_id,id, city, state, zip){
    return this.http.patch(this._baseURL+'/web-services/updateUser/'+id, {"name":name,"email":email,"address":address,"phone":phone,"role":role,"company_id":company_id, "city": city, "state": state, "zip": zip});
  }

  getAllUsers(company_id){
    return this.http.get(this._baseURL+'/web-services/getAllUsers/'+company_id);
  }
  getCompleteUserData(company_id){
    return this.http.get(this._baseURL+'/web-services/getAllUsers/'+company_id+'/all');
  }

  updateUserStatus(id,status){
    return this.http.post(this._baseURL+'/web-services/changeUserStatus', {"user_id":id,"status":status});
  }

  deleteUser(userid){
    return this.http.get(this._baseURL+'/web-services/remove-user/'+userid);
  }

  updateUserApproverStatus(id,status){
    return this.http.post(this._baseURL+'/web-services/changeApproverStatus', {"user_id":id,"apstatus":status});
  }

  resendInvite(userId, c_id){
    return this.http.post(this._baseURL+'/web-services/resend-user-invite', {"user_id":userId, 'c_id': c_id});
  }

  getCompnies(){
    return this.http.get(this._baseURL+'/web-services/company');
  }

  updateBulkUserStatus(ids,status){
    return this.http.post(this._baseURL+'/web-services/changesBulkStatus', {"user_ids":ids,"status":status});
  }

  deactivateHubspot(){
    var postData = "";
    return this.http.post(this._baseURL+'/web-services/deactivate-hubspot',postData);
  }

  getDealvalue(){
    return this.http.get(this._baseURL+'/web-services/get-deal-value');
  }

  checkHubSpot(){
    var postData;
    return this.http.post(this._baseURL+'/web-services/check-hupspot-token',postData);
  }

  deleteCrmExt(hapi_keys){
    var postData = {
      hapi_key: hapi_keys,
    };
    return this.http.post(this._baseURL+'/web-services/delete-crm-ext',postData);
  }
  saveDiscountOption(postData){
    return this.http.post(this._baseURL+'/web-services/save-discount-option',postData);
  }

  createHubSpot(postData){
    return this.http.post(this._baseURL+'/web-services/create-crm',postData);
  }

  checkHupspot(postData){
    return this.http.post(this._baseURL+'/web-services/check-hupspot',postData);
  }

  createToken(postData){
    return this.http.post(this._baseURL+'/web-services/create-token',postData);
  }

  getManageKeysList(postData){
    return this.http.post(this._baseURL+'/web-services/manage-keys',postData);
  }
  
  saveNewKey(postData){
    return this.http.post(this._baseURL+'/web-services/add-key',postData);
  }

  setExpireKey(postData){
    return this.http.post(this._baseURL+'/web-services/set-expire',postData);
  }

  deleteAppKey(postData){
    return this.http.post(this._baseURL+'/web-services/delete-key',postData);
  }

  refreshAppKey(postData){
    return this.http.post(this._baseURL+'/web-services/refresh-key',postData);
  }

  editAppKey(postData){
    return this.http.post(this._baseURL+'/web-services/edit-key',postData);
  }

  templateVersion(company_id,template_id){
    return this.http.post(this._baseURL+'/web-services/company/'+company_id+'/template/version',{'document_id':template_id});
  }

  editTemplate(company_id,doc_id){
    return this.http.get(this._baseURL+'/web-services/template/'+company_id+'/edit/'+doc_id);
  }

  updateTemplate(postData){
    return this.http.post(this._baseURL+"/web-services/template/update",postData);
  }

  getAdminUserEmails(){
    return this.http.get(this._baseURL+"/web-services/addSecondaryEmail");
  }

  addSecondaryEmail(email){
    return this.http.post(this._baseURL+"/web-services/addSecondaryEmail",{"email":email});
  }

  deleteUserSecondaryEmail(email){
    return this.http.post(this._baseURL+"/web-services/deleteSecondaryEmail",{"email":email});
  }

  sendReminderEmail(email){
    return this.http.post(this._baseURL+"/web-services/SendRemiderEmail",{"email":email});
  }

  setPrimaryEmail(email){
    return this.http.post(this._baseURL+"/web-services/SetPrimaryEmail",{"email":email});
  }

  updateFreeFlowLimit(peremaillimit, selected_time_period){
    return this.http.post(this._baseURL+"/web-services/updateFreeFlowLimit",{"peremaillimit":peremaillimit, 'time_period':selected_time_period});
  }

  getUserLimit(roleId){
    return this.http.get(this._baseURL+"/web-services/getUserLimitByRole/"+roleId);
  }

  updateRoleLimit(role,user_limit){
    return this.http.post(this._baseURL+'/web-services/updateRoleLimit', {"role":role,"user_limit":user_limit});
  }

  getApiLimitSettings(){
    return this.http.get(this._baseURL+"/web-services/getApiLimitSettings");
  }

  saveApiLimitSettings(private_api_limit,public_api_limit){
    return this.http.post(this._baseURL+'/web-services/saveApiLimitSettings', {"private_api_limit":private_api_limit,"public_api_limit":public_api_limit});
  }

  getCreditvstasksSettings(){
    return this.http.get(this._baseURL+"/web-services/creditvstasks-setting");
  }

  saveCreditvsTask(postData){
    return this.http.post(this._baseURL+"/web-services/creditvstasks-setting",postData);
  }

  getPasswordSettings(){
    return this.http.get(this._baseURL+"/web-services/password-policy-settings");
  }

  updatePasswordSetting(postData){
    return this.http.post(this._baseURL+"/web-services/password-policy-settings",postData);
  }

  sendTemplateToCompanies(company,templateId){
    return this.http.post(this._baseURL+"/web-services/assign-doc-to-company", {"company_ids":company,"document_id":templateId});
  }

  emailTemplatelist(){
    return this.http.get(this._baseURL+"/web-services/email-template");
  }

  updateEmailTemplate(id, name, subject, message){
    return this.http.post(this._baseURL+"/web-services/save-email-template", {"edit_template_id":id, "email_name":name, "email_subject":subject, "message": message,"action":"savetemplate"});
  }

  saveEmailTemplate(name, subject, message){
    return this.http.post(this._baseURL+"/web-services/save-email-template", {"email_name":name, "email_subject":subject, "message": message,"action":"savetemplate"});
  }

  savekitsetting(company_id,postData){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/savekitsetting/1",postData);
  }
  
  stateList(){
    return this.http.get(this._baseURL+'/web-services/states');
  }

  companyNameAlreadyExist(name){
    return this.http.post(this._baseURL+"/web-services/companyNameExists", {"name":name});
  }

  saveCompanyDetails(name,email,address, state, city, zip,phone,company_name,ip_address,website_url){
    return this.http.post(this._baseURL+'/web-services/postCompanyRegister', {"name":name,"email":email,"requestor_address":address, "city":city, "state":state, "zip":zip,"phone":phone,"company_name":company_name,"ip":ip_address,"url":website_url});
  }

  getAllCompaniesDetails(offset,limit){
    return this.http.get(this._baseURL+'/web-services/compnayListing/'+offset+'/'+limit);
  }

  updateCompanyStatus(id,status){
    return this.http.post(this._baseURL+"/web-services/change-company-status", {"company_ids":id,"status":status});
  }

  deleteCompany(companyid){
    return this.http.delete(this._baseURL+"/web-services/companies/"+ companyid)
  }

  updateBulkCompanyStatus(ids,status){
    return this.http.post(this._baseURL+"/web-services/changes-company-bulk-status", {"company_ids":ids,"status":status});
  }

  getKitListing(company_id){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/kit');
  }

  getKitDocsList(company_id){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/documents');
  }

  saveKitData(company_id, name, listings){
    return this.http.post(this._baseURL+'/web-services/company/'+company_id+'/kit',{"listing":listings, "name":name});
  }
  
   groupListing(company_id){
    return this.http.get(this._baseURL+"/web-services/company/"+company_id+"/group");
  }
  
  getUserCompanies(){
    return this.http.get(this._baseURL+"/web-services/getUserRoles");
  }

  saveGroup(company_id,groupName){
    return this.http.post(this._baseURL+"/web-services/company/"+company_id+"/group", {"name":groupName});
  }

  saveGroupSignee(companyId,groupId,signeesAssigned){
    return this.http.post(this._baseURL+"/web-services/company/" + companyId + "/group/" + groupId + "/signees", {"signeesAssigned":signeesAssigned});
  }

  deleteGroup(companyId, groupId){
    return this.http.get(this._baseURL+'/web-services/company/' + companyId + '/delete/group/' + groupId);
  }

  updateGroupName(companyId, groupId, groupName){
    return this.http.patch(this._baseURL+'/web-services/company/' + companyId + '/group/' + groupId, {"name":groupName});
  }

  getAllCompaniesData(){
    return this.http.get(this._baseURL+'/web-services/compnayListing/all');
  }

  updateKitTilte(postdata,company_id){
    return this.http.post(this._baseURL+'/web-services/company/' + company_id + '/editkittitle',postdata);
  }

  companiesPlan(offset,limit){
    return this.http.get(this._baseURL+'/web-services/planbuyers/0/'+offset+'/'+limit);
  }

  getUserInfoFromUserid(userid){
    return this.http.get(this._baseURL+'/web-services/get-user-info-id/'+userid);
  }

  saveChangePassword(user_id,data){
    return this.http.post(this._baseURL+'/web-services/user_id/'+user_id+'/change-password',data);
  }

  getCompaniesAccessInfo(){
    return this.http.get(this._baseURL+'/web-services/api-call-limit');
  }

  getAllCompaniesAccessInfo(){
    return this.http.get(this._baseURL+'/web-services/api-call-limit/all');
  }

  addAccessLimit(totalApprove,compEmail, compID, id){
    return this.http.post(this._baseURL+'/web-services/add-access-limit', {"totalApprove":totalApprove,"compEmail":compEmail, "compID":compID, "id":id});
  }

  updateAccessLimit(totalApprove,compEmail){
    return this.http.post(this._baseURL+'/web-services/add-access-limit', {"totalApprove":totalApprove,"compEmail":compEmail});
  }

  getCompanyCallLog(email){
    return this.http.post(this._baseURL+'/web-services/api-call-log', {"compantEmail":email});
  }

  getAllCompaniesCallLog(email){
    return this.http.post(this._baseURL+'/web-services/api-call-log/all', {"compantEmail":email});
  }

  updateAccessStatus(ipAddr,is_block,id){
    return this.http.post(this._baseURL+'/web-services/api-ip-block', {"ipAddr":ipAddr,"is_block":is_block, "id":id});
  }

  getGroupTableData(companyId, groupId){
    return this.http.get(this._baseURL+'/web-services/company/' + companyId + '/group/' + groupId+'/gcf-stat');
  }

  updateCustomField(postData){
    return this.http.post(this._baseURL+'/web-services/update-custom-field-group-multiple',postData);
  }
  
  updateCustomFieldCompany(postData){
    return this.http.post(this._baseURL+'/web-services/update-custom-field-company',postData);
  }

  deleteCustomField(company_id,groupId,group_custom_id){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/group/'+groupId+'/customField/'+group_custom_id);
  }

  addCustomField(postData,company_id,groupId){
    return this.http.post(this._baseURL+'/web-services/company/'+company_id+'/group/'+groupId+'/add-custom-field',postData);
  }

  updateCustomFieldValue(postData){
    return this.http.post(this._baseURL+'/web-services/update-custom-field-value',postData);
  }

  uploadExcel(postData){
    return this.http.post(this._baseURL+'/web-services/importExcel',postData);
  }

  uploadExcelwithColumns(first_name,last_name,email,phone,path){
    return this.http.post(this._baseURL+'/web-services/importExceldb',{"first_name":first_name,"last_name":last_name,"email":email,"phone":phone,"path":path});
  }

  finalUploadExcelGroups(groupid,companyid,selected_array_temp,path_temp){
    return this.http.post(this._baseURL+'/web-services/finalimportExcel',{"group_id":groupid,"company_id":companyid,"path_temp":path_temp,"selected_array_temp":selected_array_temp});
  }

  inviteCompany(email){
    return this.http.post(this._baseURL+'/web-services/inviteCompany',{"email":email});
  }

  getQueueList(){
    return this.http.get(this._baseURL+'/web-services/get-queue-monitoring-list');
  }

  getAllQueueList(){
    return this.http.get(this._baseURL+'/web-services/get-queue-monitoring-list/all');
  }

  getDefaultGateway(){
    return this.http.get(this._baseURL+'/web-services/default-gateway');
  }

  updateDefaultGateway(mode){
    return this.http.post(this._baseURL+'/web-services/update-default-gateway',{"mode":mode});
  }

  updatePlanSetting(postData){
    return this.http.post(this._baseURL+'/web-services/planbuyers/modify',postData);
  }

  addcredittouser(postData){
    return this.http.post(this._baseURL+'/web-services/planbuyers/addcredittouser',postData);
  }

  getStorageComponent(company_id){
    return this.http.get(this._baseURL+'/web-services/getSecurityComponent/'+company_id);
  }

  saveAmazonCloud(company_id,postData){
    return this.http.post(this._baseURL+'/web-services/save-login-aws/'+company_id,postData);
  }

  saveBBCloud(company_id,postData){
    return this.http.post(this._baseURL+'/web-services/change-b2/'+company_id,postData);
  }

  saveDropBoxCloud(company_id,postData){
    return this.http.post(this._baseURL+'/web-services/change-drop-box/'+company_id,postData);
  }

  activityLoginLogs(offset,sort){
    return this.http.get(this._baseURL+'/web-services/activity-login-log/'+offset+'/'+sort);
  }

  storageLogs(offset,sort){
    return this.http.get(this._baseURL+'/web-services/storage-process-log/'+offset+'/'+sort);
  }

  viewDocumentLogs(docid){
    return this.http.get(this._baseURL+'/web-services/storage-doc-log/'+docid);
  }

  searchLoginActivityLog(request_from,request_to,email,offset,sort,log_type){
    return this.http.post(this._baseURL+'/web-services/search-activity-login',{"start_date":request_from,"end_date":request_to,'filteremail':email,'offset':offset,'sort':sort,'log_type':log_type});
  }

  searchStorageLog(request_from,request_to,request_status,request_name,offset,sort,log_type){
    return this.http.post(this._baseURL+'/web-services/search-storage-log',{"start_date":request_from,"end_date":request_to,'request_status':request_status,'request_name':request_name,'offset':offset,'sort':sort,'log_type':log_type});
  }
  
  requestLogs(offset,sort){
    return this.http.get(this._baseURL+'/web-services/doc-request-log/'+offset+'/'+sort);
  }

  searchRequestLog(request_from,request_to,request_status,request_name,offset,sort,log_type){
    return this.http.post(this._baseURL+'/web-services/search-request-log',{"start_date":request_from,"end_date":request_to,'request_status':request_status,'request_name':request_name,'offset':offset,'sort':sort,'log_type':log_type});
  }

  viewRequestLogs(requestid){
    return this.http.get(this._baseURL+'/web-services/request-process-log/'+requestid);
  }

  getSigneeRecord(company_id){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/signeeAll')
  }

  updateSignee(first_name,last_name,email,id,is_user,phone){
    return this.http.post(this._baseURL+'/web-services/update-signee', {"first_name":first_name,"email":email,"last_name":last_name,"id":id,"is_user":is_user,"phone":phone})
  }

  getGoogleData(company_id){
    return this.http.get(this._baseURL+'/web-services/getGoogleData/'+company_id);
  }
  
  getAllSignee(company_id){
    return this.http.get(this._baseURL+'/web-services/company/'+company_id+'/signeeAll/all');
  }

}