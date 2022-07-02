import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { LoginResponse } from "../model/fake/fakeDataModel";

export class Abstract {

    static Logged_User = 'RecLoggedUser';
    static MataData = "MataData";
    static Resumeparsedata = 'Resumeparsedata';
    static ResumeparseFiledata = 'ResumeparseFiledata';
    static Candidatedtl = 'Candidatedtl';
    static compdashsearch = 'compdashsearch';
    
    constructor() {
    }
    static IP_Contry = 'IPContry';
    static isValidateEmail(email: any): boolean {
        const ext = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'is');
        const match = ext.exec(email);
        return (match == null) ? false : true;
    }

    static CountryCode = '+91';
    static countryISO = 'IN';

    public static URLstart=100000;


    static getHttpOptions(userToken?: string, hasToken: boolean = true, contentType: ContentType = ContentType.ApplicationJSON) {
        let httpOptions = {};
        console.log("environment.environmentheader =>", environment.production)
        // 'Content-Type': contentType,
        if (hasToken) {
            httpOptions = {
                headers: new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Credentials": "true",
                    //'Origin':'http://localhost:4200/',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'DeviceType': 'WEB',
                    'Env': environment.environmentheader,
                    'Authorization': 'Bearer ' + userToken
                })
            };
        } else {
            httpOptions = {
                headers: new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Credentials": "true",
                    //'Origin':'http://localhost:4200/',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'DeviceType': 'WEB',
                    'Env': environment.environmentheader,
                    'Authorization': 'Bearer '

                })
            };
        }

        return httpOptions;
    }

    static containsLower(value: any): boolean {
        let arr = value.match(/([*.a-z])/gi, '');
        let valid = false;

        if (arr === null) {
            return valid;
        } else {
            for (let i = 0; i < arr.length; i++) {

                if ('abcdefghijklmnopqrstuvwxyz'.includes(arr[i])) {
                    valid = true;
                    break;
                }
            }

            return valid;
        }
    }

    static containsUpper(value: any): boolean {

        let arr = value.match(/([*.A-Z])/gi, '');
        let valid = false;

        if (arr === null) {
            return valid;
        } else {
            for (let i = 0; i < arr.length; i++) {

                if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(arr[i])) {
                    valid = true;
                    break;
                }
            }

            return valid;
        }
    }

    static containsNumber(value: any): boolean {
        // let val = Object.assign({}, value);
        let ext = value.replaceAll(/([.*0-9])/gi, '');

        if (ext === null) {
            return false;
        } else {
            return ext.length < value.length;
        }
    }

    static containsSpecial(value: any): boolean {
        // let val = Object.assign({}, value);
        let ext = value.replaceAll(/([.*`~!@#$%^*()_\-+=?//.,'";:|{}\[\]\\])/gi, '');

        if (ext === null) {
            return false;
        } else {
            return ext.length < value.length;
        }
    }

    static getLoggedInUser(): LoginResponse {
        return (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User) || '{}'));
    }
    static setLoggedInUser(_loginResponse: LoginResponse) {
        localStorage.setItem(Abstract.Logged_User, JSON.stringify(_loginResponse, function replacer(key, value) { return value }));
    }

    static getHttpOptionsGoogle() {
        let httpOptions = {};
        httpOptions = {
            headers: new HttpHeaders({
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };


        return httpOptions;
    }
    static getIpContry(): string {
        return (<string>JSON.parse(localStorage.getItem(Abstract.IP_Contry) || '{}'));
    }

    static handelnullundefind(value: any, type = 'array') {
        if (type == 'string') {
            if (value == null || value == undefined) {
                value = "";
            }
        }
        if (type == 'number') {
            if (value == null || value == undefined) {
                value = 0;
            }
        }
        if (type == 'array') {
            if (value == null || value == undefined) {
                value = [];
            }
        }
        if (type == 'onlyarray') {
            if (value == null || value == undefined) {
                value = [];
            }
            else if (!Array.isArray(value)) {
                value = [];
            }
        }
        if (type == 'boolean') {
            if (value == null || value == undefined) {
                value = false;
            }
        }


        return value
    }

    static isValidateMobile(mobile: string): boolean {
        const match = /^^(\+\d{1,3}[- ]?)?\d{10}$/i.exec(mobile);
        return (match == null) ? false : true;
    }
    static isNumericOnly(value: string): boolean {
        const ext = /^[0-9]+$/i.exec(value);
        return (ext == null) ? false : true;
    }

    static GetCurrentDate() {

        let dt = new Date();
        let year = dt.getFullYear();
        let month = (dt.getMonth() + 1).toString().padStart(2, "0");
        let day = dt.getDate().toString().padStart(2, "0");

        return (year + "-" + month + "-" + day);

        // return this.datePipe.transform(dt, Constants.DateFormate);
    }
    static GetCurrentDateTime() {
        let dt = new Date();
        let year = dt.getFullYear();
        let month = dt.getMonth().toString().padStart(2, "0");
        let day = dt.getDay().toString().padStart(2, "0");
        let CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        return (year + "-" + month + "-" + day + " " + CurrentTime);
    }

    static returnDateRangefromDuration(value: string) {
        let StartDate: any;
        let EndDate: any;
        let CurrentDate = new Date();
        if (value == "Show me All") {
            StartDate = new Date('1900-01-01');
            EndDate = CurrentDate;
        }
        else if (value == "Last 1 Year") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 359));
            EndDate = CurrentDate;
        }
        else if (value == "Last 6 Months") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 179));
            EndDate = CurrentDate;
        }
        else if (value == "Last 3 Months") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 89));
            EndDate = CurrentDate;
        }
        else if (value == "Last 60 Days") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 59));
            EndDate = CurrentDate;
        }
        else if (value == "Last 30 Days") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 29));
            EndDate = CurrentDate;
        }
        else if (value == "Last 15 Days") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 14));
            EndDate = CurrentDate;
        }
        else if (value == "Last 7 Days") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 6));
            EndDate = CurrentDate;
        }
        else if (value == "Yesterday") {
            StartDate = new Date(new Date().setDate(new Date().getDate() - 1));
            EndDate = new Date(new Date().setDate(new Date().getDate() - 1));
        }
        else if (value == "Today") {
            StartDate = CurrentDate;
            EndDate = CurrentDate;
        }
        return {
            "StartDate": StartDate,
            "EndDate": EndDate
        }

    }


    static GetConfigurationMetaData(): any {
        return (<any>JSON.parse(localStorage.getItem(Abstract.MataData) || '{}'));
    }
    static SetConfigurationMetaData(_MataData: any) {
        localStorage.setItem(Abstract.MataData, JSON.stringify(_MataData, function replacer(key, value) { return value }));
    }

    static GetResumeparsedata(): any {
        return (<any>JSON.parse(localStorage.getItem(Abstract.Resumeparsedata) || '{}'));
    }
    static SetResumeparsedata(_Resumeparsedata: any) {
        localStorage.setItem(Abstract.Resumeparsedata, JSON.stringify(_Resumeparsedata, function replacer(key, value) { return value }));
    }

    static GetResumeparseFiledata(): any {
        return (<any>JSON.parse(localStorage.getItem(Abstract.ResumeparseFiledata) || '{}'));
    }
    static SetResumeparseFiledata(_ResumeparseFiledata: any) {
        localStorage.setItem(Abstract.ResumeparseFiledata, JSON.stringify(_ResumeparseFiledata, function replacer(key, value) { return value }));
    }

    static GetCandidatedtl(): any {
        return (<any>JSON.parse(localStorage.getItem(Abstract.Candidatedtl) || '{}'));
    }
    static setCandidatedtl(_Candidatedtl: any) {
        localStorage.setItem(Abstract.Candidatedtl, JSON.stringify(_Candidatedtl, function replacer(key, value) { return value }));
    }

    static Getcompdashsearch(): any {
        return (<any>JSON.parse(localStorage.getItem(Abstract.compdashsearch) || '{}'));
    }
    static Setcompdashsearch(_compdashsearch: any) {
        localStorage.setItem(Abstract.compdashsearch, JSON.stringify(_compdashsearch, function replacer(key, value) { return value }));
    }
    

}

export enum ContentType {
    ApplicationJSON = 'ApplicationJSON',
    ApplicationUrlEncoded = 'application/x-www-form-urlencoded',
    EncryptType = 'EncryptType'
}
export enum AutoCompleteType {
    school = "school",
    university = "university",
    business = "establishment"

}
export enum Severity {
    SUCCESS = 'success',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error'
}

export enum Title {
    SUCCESS = 'Success',
    INFO = 'Info',
    WARN = 'Warning',
    ERROR = 'Error'
}

export enum UserType {
    JobSeeker = 10,
    Employer = 11,
}

export enum UserMessages {
    Login_InvalidUserNameOrPassword = "You have entered invalid username or password!",
    Login_InvalidEmailId = "Please enter valid email address!",
    Login_InvalidOTP = "Invalid OTP",
    Login_PasswordResetSuccessfully = "Password Reset Successfull",
    Login_YouHaveNotAccount = "We counldn't find an account. Please singup!",
    Login_NewPasswordMustBeDifferent = "Your new password must be different from previously used passwords.",
    Login_EmailIdFormateNotCorrect = "The email Id you've entered is not recognised.\n Please enter a valid email address.",

    Signup_Alredy_Account = "Email already exists! Please login or user another email.",
    ResumeUploaddialog_Multiplefilenotallowed = "Multiple file upload is not allowed!",
    ResumeUploaddialog_FileExtension = "Only .doc,.docx and .pdf file allowed!",
    ResumeUploaddialog_FileMaxLength = "File size should be less then 6 MB",

    CandidateDasboard_Duplicateskillsname = "Skill already listed!",
    CandidateDasboard_NotAddandyskill = "Please add skills first!",
    CandidateDasboard_SkillsAddedSuccessfully = "Skills added successfully",
    CandidateDasboard_UserPreferenceAddedsuccessfully = "User Preference added successfully",
    CandidateDasboard_UserPreferenceUpdateSuccessfully = "User Preference updated successfully",
    CandidateDasboard_WorkExperienceAddedSuccessfully = "Work Experience added successfully",
    CandidateDasboard_WorkExperienceUpdatedSuccessfully = "Work Experience updated successfully",
    CandidateDasboard_WorkExperienceDeletedsuccessfully = "Work Experience deleted successfully",
    CandidateDasboard_EducationDetailsAddedSuccessfully = "Education Details added successfully",
    CandidateDasboard_EducationDetailsupdatedSuccessfully = "Education Details updated successfully",
    CandidateDasboard_EducationDetailsDeletedSuccessfully = "Education Details deleted successfully",

    CandidateDasboard_DuplicatesAwardTitle = "Award already listed!",

    CandidateDasboard_NotAddandyAward = "Please add an award/achivement!",
    CandidateDasboard_AwardsAddedSuccessfully = "Award/Achivement added successfully",
    ResumeUploaddialog_PleasesSelectFile = "Please Select or Drag and Drop your file",
    CandidateDasboard_TitleUpdateSuccessfully="Job title and tag line update Successfully"
    // Login_InvalidUserNameOrPassword = "You have entered an invalid username or password!",
    // Login_InvalidEmailId = "Please enter valid email address!",
    // Login_InvalidOTP = "Invalid OTP",
    // Login_PasswordResetSuccessfully = "Password Reset Successfully",
    // Login_YouHaveNotAccount = "You have not account. Please singup",
    // Login_NewPasswordMustBeDifferent = "Your new password must be different from previously used passwords.",
    // Login_EmailIdFormateNotCorrect = "The email Id you've entered is not recognised.\n Please enter a valid email address.",

    // Signup_Alredy_Account = "Alredy account please login",
    // ResumeUploaddialog_Multiplefilenotallowed = "Multiple file not allowed to upload!",
    // ResumeUploaddialog_FileExtension = "Only .doc,.docx and .pdf file allowed!",
    // ResumeUploaddialog_FileMaxLength = "File upload not allowed more then 6 MB",

    // CandidateDasboard_Duplicateskillsname = "Duplicate skills name not allowed.",
    // CandidateDasboard_NotAddandyskill = "Please Add skills first!",
    // CandidateDasboard_SkillsAddedSuccessfully = "Skills Added successfully",
    // CandidateDasboard_UserPreferenceAddedsuccessfully = "User Preference added successfully",
    // CandidateDasboard_UserPreferenceUpdateSuccessfully = "User Preference update successfully",
    // CandidateDasboard_WorkExperienceAddedSuccessfully = "Work Experience added successfully",
    // CandidateDasboard_WorkExperienceUpdatedSuccessfully = "Work Experience Updated successfully",
    // CandidateDasboard_WorkExperienceDeletedsuccessfully = "Work Experience Deleted successfully",
    // CandidateDasboard_EducationDetailsAddedSuccessfully = "Education Details Added successfully",
    // CandidateDasboard_EducationDetailsupdatedSuccessfully = "Education Details updated successfully",
    // CandidateDasboard_EducationDetailsDeletedSuccessfully = "Education Details deleted successfully",

    // CandidateDasboard_DuplicatesAwardTitle = "Duplicate Award not allowed.",

    // CandidateDasboard_NotAddandyAward = "Please Add Award name First!",
    // CandidateDasboard_AwardsAddedSuccessfully = "Award Added successfully",
    // ResumeUploaddialog_PleasesSelectFile = "Please Select or Drag and Drop your file",
    // CandidateDasboard_TitleUpdateSuccessfully="Job title and tag line update Successfully"
}


