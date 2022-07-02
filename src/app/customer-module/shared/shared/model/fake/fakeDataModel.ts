//import { SrvRecord } from "dns";

//import { dateSelectionJoinTransformer } from "@fullcalendar/core";
import { NumericLiteral } from "typescript";

export class LoginResponse {

        UserID?: number;
        Email?: string;
        CountryCode?: string;
        ISOCode?: string;
        PhoneNumber?: string;
        FullName?: string;
        Gender?: string;
        Address?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        RoleID?: number;
        RoleDescription?: string;
        Title?: string;
        ImageID?: string;
        PublicID?: string = "";
        ImageURL?: string;
        Organization?: Organization;
        Token?: string;
        UserCountry?: string;
        Configuration?: Configuration;
        Subscription?: UsrSubscription;
        UserTypeID?: number;
        ActiveInd?: boolean;
        Designation?: string = "";
        JobTitle?: string = "";
        TagLine?: string = "";
        profileunderreview?: boolean = false;
        CompanyID?: number;
}
export class UserTypes {
        UserTypeID?: number;
        UserTypeDesc?: string;
}
export class Organization {
        OrganizationID?: number;
        OrganizationName?: string;
        Website?: string;
        CountryCode?: string;
        PhoneNumber?: string;
        Address?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Country?: string;
        ImageID?: string;
        PublicID?: string;
        ImageURL?: string;
}

export class companyinfo {
        FullName?: string = "";
        CountryCode?: string = "";
        PhoneNumber?: string = "";
        PrefIndustry?: string = "";
        Email?: string = "";
        Password?: string = "";
        TOCAccepted?: boolean = false;
        DeviceID?: string = "";
        MacAddress?: string = "";
        ExternalAccountDesc?: string = "";
        ExternalAccountID?: string = "";
        ISOCode?: string = "";
        UserTypeID?: number = 0;
        OrgName?: string = "";
        OrgWebsite?: string = "";
        OrgEmail?: string = "";
        OrgPhoneNumber?: string = "";
        OrgAddress?: string = "";
        OrgCity?: string = "";
        OrgState?: string = "";
        OrgZipCode?: string = "";
        OrgCountry?: string = "";
}
export class Configuration {
        UserID?: number = 0;
        DefaultLanguage?: number = 0;
        FaceIDEnabled?: boolean = false;
        NotificationEnabled?: boolean = false;
}

export class UsrSubscription {
        SubscriptionID?: number = 0;
        SubscriptionTypeDesc?: string;
        SubscriptionStartDt?: Date;
        SubscriptionEndDt?: Date;
        SubscriptionAmount?: number
}

export class profile {
        UserID?: number;
        PhoneNumber?: string;
        CountryCode?: string;
        FullName?: string;
        Email?: string;
        Gender?: string;
        Address?: string = "";
        City?: string;
        State?: string;
        ZipCode?: string;
        ImageID?: string;
        ImageURL?: string;
        AadharNumber?: string = "";
        PublicID?: string = "";
        UserTypeID?: number;
        Designation?: string = "";
        UserDocuments?: string = "";
        JobTitle?: string = "";
        TagLine?: string = "";
}

export class Subscription {
        SubscriptionID: number = 0;
        Title: string = "";
        Currency: string = "";
        Amount: number = 0;
        Description: string = "";
        IsDefault: boolean = false;
        MaxUsers: number = 0
}

export class Roles {
        RoleID: number = 0;
        RoleDescription: string = ""
}

export class Register {
        FullName: string = "";
        OrganizationName: string = "";
        CountryCode: string = "";
        PhoneNumber: string = "";
        Email: string = "";
        Password: string = "";
        RoleID: number = 0;
        TOCAccepted: boolean = true;
        DeviceID: number = 0;
        MacAddress: string = "";
        ExternalAccountDesc: string = "";
        ExternalAccountID: string = "";
        DeviceType: string = "";
}


export class HouseSurveyDetails {
        AddressID?: number;
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        LandMark?: string;
        City?: string;
        State?: string;
        PinCode?: string;
        PropertyTypeID?: number;
        PropertyDesc?: string;
        PropertySubTypeID?: number;
        PropertySubTypeDesc?: string;
        Lat?: number;
        Lng?: number;
        LastVisitDate?: Date;
        LastVisitComments?: string;
        FamilyMembers?: Contacts[];
        MemberName?: string = "";
        ContactNumber?: string = "";
        status?: string = "";
        iconPath?: string = "";
}
export class Contacts {
        FamilyID?: number = 0;
        FamilyMemberID?: number = 0;
        MemberName?: string = "";
        IsHeadOfFamily?: boolean = false;
        DateOfBirth?: string;
        AadharNumber?: string = "";
        ContactNumber?: string = "";
        Gender?: string = "";
}

export class PropertyType {
        PropertyID?: number;
        PropertyName?: string;
        PropertyDesc?: string;
}
export class commSurveyDetails {
        AddressID?: number;
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        LandMark?: string;
        City?: string;
        State?: string;
        PinCode?: string;
        PropertyTypeID?: number;
        PropertyDesc?: string;
        PropertySubTypeID?: number;
        PropertySubTypeDesc?: string;
        Lat?: number;
        Lng?: number;
        LastVisitDate?: Date;
        LastVisitComments?: string;
        Contacts?: propContacts[];
        CompanyName?: string;
        WorkPhone?: string;
}
export class propContacts {
        AddressID?: number;
        ContactID?: number;
        ContactName?: string;
        Email?: string;
        HomePhone?: string;
        IsPrimary?: boolean;
        MobileNum?: string;
        OrganizationID?: number;
        WorkPhone?: string;
}

export class Dashboardcount {
        TotalHouses: number = 0;//House Survey
        TotalCommercialProperty: number = 0;//Commercial Property
        TotalSlideCollected: number = 0;//Slide Collected
        TotalActivePositive: number = 0;//Active Positive
        PassiveCollection: number = 0;//passive Collection
        PassivePositive: number = 0;//passive Positive
        TotalActiveWorkers: number = 0;//Active Workers
        TotalActiveCollection: number = 0;//Active Collection
        TotalVisits: number = 0; //pending
        TotalMaleriaPatients: number = 0;//pending
        TotalRDT: number = 0;//pending
        //Positive
}


export class surveydetails {
        Title?: string = "";
        Category?: string = "";
        questions?: surveyquestion[];
}

export class surveyquestion {
        Question?: string = "";
        QuestionType: string = "";
        QuestionId: string = "";
        subquestions?: surveysubquestion[];
        Instructions?: string = "";
        ValidationMsg?: string = "";
        DateInfo?: boolean = false;
        TimeInfo?: boolean = false;
        Dateformate?: string = "";
        LeftSide?: number = 0;
        Center?: number = 0;
        RightSide?: number = 0;
        Scale?: number = 0;
        simaly: string = "";
        color?: string = "";
        isOther?: boolean = false;
        isNoneofabove?: boolean = false;



}

export class surveysubquestion {
        subquestion?: string = "";
        selected?: boolean = false;
}

export class housesurveyhistory {
        VisitID?: number;
        SurveyID?: number;
        VisitDate?: Date;
        SurveyName?: string
        SurveyStatus?: string
        TotalChecked?: number;
        TotalPositive?: number;


}
export class housesurveyclosed {
        VisitDate?: Date;
        SurveyName?: string;
        IsHouseClosed?: boolean;
        ImageList?: closeserveyImage[];
        //status?: string;
}

export class closeserveyImage {
        ImageURL?: string;
        PublicID?: string;
}

export class mappointhist {
        "lat": number;
        "lng": number;
        "time": Date;
}

export class orguser {

        UserID?: number;
        FullName?: string;
        Gender?: string
        Email?: string;
        PhoneNumber?: string;
        ManagerID?: number;
        ManagerName?: string;
        RoleDescription?: string;
        ImageURL?: string;
}

export class ServeyHistoryDetails {
        VisitID?: number;
        SurveyID?: number;
        SurveyName?: string;
        VisitNotes?: string;
        VisitDate?: Date;
        ContainerNum?: string;
        TotalCount?: number;
        SurveyImages?: SurveyImages[];
        IsHouseClosed?: boolean;
        Questions?: Questions[];
}

export class SurveyImages {
        ImageID?: number;
        ImageURL?: string;
        ImageName?: string;
        ImageBlobName?: string;
        ImageThumbnailName?: string;
        ImageThumbnail?: string;
}
export class Questions {
        QuestionID?: number;
        QuestionDesc?: string;
        QuestionTypeID?: number;
        QuestionTypeDesc?: string;
        QueDisplayOrder?: number;
        Answers?: Answers[];
}
export class Answers {
        AnswerID?: number;
        AnswerDesc?: string;
        RequireDetails?: boolean;
        AnswerDetails?: string;
        AnsDisplayOrder?: number;
}

export class Manager {
        UserID?: number;
        FullName?: string;
        Email?: string;
        PhoneNumber?: string;
        ImageURL?: string;
        RoleID?: number;
        RoleDescription?: string;
}

export class orgServey {
        SurveyID?: number;
        SurveyName?: string;
}

export class patientsurvey {
        PatientID?: number;
        LastVisitDate?: Date;
        MemberName?: string;
        Age?: number;
        Gender?: string;
}

export class patientsurveyHistory {
        VisitID?: number;
        VisitDate?: string;
        Age?: number
        MedCourseComplete?: boolean = false;
        ReferToUHC?: boolean = false;
        BSDetails?: RDTDetails[];
        RDTDetails?: RDTDetails[];
        name?: string;
        Gender?: string;
        comment?: string;
        Nextfollowdate?: string;
}

export class RDTDetails {
        LabName?: string;
        ReferenceNum?: string;
        Result?: string;
        MedicationInfo?: MedicationInfo[]
}

export class MedicationInfo {
        Quantity?: number;
        MedicationID?: number;
        MedicationName?: string;
}
export class RDTModel {
        ReferenceNum?: string;
        ResultPV?: boolean;
        ResultPF?: boolean;
        ResultNegative?: boolean;
        ResultInvalid?: boolean;
        MedicationInfo?: MedicationInfo[]
}
export class Prescription {
        Name?: string;
        Value?: string;
}
export class Activeworker {
        name?: string;
        lastlocation?: string;
        contactno?: string;
}
///--------------------------------------------------------
export class candidate {
        Personaldetails?: Personaldetails;
        JobPreferences?: JobPreferences;
        WorkExperience?: WorkExperience[];

}
export class Personaldetails {
        // totalexpiriance?: string = "";
        // designation?: string = "";
        JobTitle?: string = "";
        TagLine?: string = "";
}
export class JobPreferences {

        // Preferredshift: string = "";
        // JobType: string = "";
        // ExpectedSalary: string = "";

        PreferenceID: number = 0;//ok
        UserID: number = 0;//ok
        PrefIndustry: string = "";//ok
        PrefRole: string = "";//ok
        EmploymentType: string = "";//ok

        PrefSalaryType: string = "";
        PrefSalaryCurrency: string = "";
        PrefSalaryAmt?: number;

        StartDate: string = "";//null
        SearchRadius?: number;
        ZipCode: string = "";
        Lat?: number;
        Lon?: number;

        CreateDate: string = "";//ok
        Action: string = "";//ok
        VisaStatus: string = "";

}

export class WorkExperience {
        ExperienceID: number = 0;
        OrganizationMediaURL?: string = "";
        Designation: string = "";
        OrganizationName: string = "";
        CurrentInd: boolean = false;
        StartDate?: string;
        EndDate?: string;
        JobDescription: string = "";
        UserID: number = 0;
        JobLocation: string = "";
        CreateDate: string = "";
        isexpanclose?: boolean = false
}
export class EducationDetails {
        EducationID: number = 0;
        Degree: string = "";
        Specialization: string = "";
        SchoolName: string = "";
        CurrentInd: boolean = false;
        startDate?: string;
        endDate?: string;
        cityname?: string;
        YearOfGraduation?: number;
        UserID?: number = 0;
        Grade?: string = "";
        CreateDate?: string = "";
        isexpanclose?: boolean = false
}
export class Skill {
        SkillID: number = 0;
        SkillName: string = "";
}

export class Achivement {
        AchivementID: number = 0;
        UserID?: number = 0;
        Title: string = "";
        YearOfAward?: number
}
export class UserDocuments {
        DocumentID: string = "";
        DocumentTitle: string = "";
        DocumentType: string = "";
        DocumentURL: string = "";
        IsPublic: boolean = false;
}

export interface IKeyValue {
        id: number;
        name: string;
}

export class KeyValue {
        id: number;
        name: string;
        code?: string = "";
        constructor(id: number, name: string) {
                this.id = id;
                this.name = name;
        }
}

export class Industry {
        ID?: number;
        IndustryDesc?: string;
        ImageURL?: string = "";
}


export class JobTitle {
        JobPostTitleID?: number;
        JobPostTitleDesc?: string
}



export class Experience {
        JobPostExperienceID?: number;
        JobPostExperienceDesc?: string
}

export class EmploymentType {
        ID?: number;
        EmploymentTypeDesc?: string
}

export class jobPost {
        JobID?: number;
        JobPostDate?: Date;
        JobStatus?: string;
        Industry?: string;
        Experience?: string;
        JobTitle?: string;
        JobType?: string;
        OfferedSalary?: number;
        Radius?: number;
        ZipCode?: string;
        Lat?: number;
        Lon?: number;
        UserID?: number;
        CompanyID?: number;
}


export class UserProfile {
        UserID?: number;
        WorkEmail?: string;
        WorkPhone?: any;
        ImageURL?: any;
        Designation?: any;
        FullName?: string;

}

export class Employeelist {
        TotalEmployees?: number;
        UserProfiles?: UserProfile[];
}
export class EmployeeDetails {
        UserID?: number = 0;//get login response
        CompanyID?: number = 0;//get login response
        FullName?: string = "";//Entry field for fullname
        Email?: string = "";//Entry field for email
        CountryCode?: string = "+91";//Entry field for country code
        ISOCode?: string = "";//depending on country code
        PhoneNumber?: string = "";//Entry field for Phone nunmer
        Roles: any;//add multiple roles
        DisplayName?: string = "";//Entry field for Display Name
        Gender?: string = "";//Entry field for Gender
        DateOfBirth?: string;//Entry field for Date of Birthday
        BloodGroup?: string = "";//Entry field
        MaritalStatus?: string = "";//Entry field
        PersonalEmail?: string = "";
        Address?: string = "";
        City?: string = "";
        State?: string = "";
        Country?: string = "";
        PinCode?: string = "";
        PublicID?: string = "";
        ImageURL?: string = "";
        ImageName?: string = "";
        EmployeeID?: string = "";
        EmployementStatus?: string = "";
        DateOfJoining?: string;
        EmployeeTypeID?: number = 0;
        DepartmentID?: number = 0;
        Designation?: string = "";
        BusinessUnit?: string = "";
        LocationID?: number = 0;
        SubDepartmentID?: number = 0;
        PrimaryTeam?: string = "";
        AdditionalTeam?: string = "";
        CostCenter?: string = "";
        WorkShift?: string = "";
        IDCardNumber?: string = "";
        ProbationStartDate?: string;
        ProbationEndDate?: string;
        WorkPhone?: string = "";
        ManagerID?: number = 0;
        NoticePeriod?: number = 0;
        NoticeStartDate?: string;
        NoticeEndDate?: string;
        TerminationDate?: string;
        TerminationReason?: string;
        TerminationReasonDesc?: string;
        Languages?: string = "";//entry field multiple
        SocialProfile?: string = "";
        AdditionalManagers?: string = "";
        ModifyBy?: number = 0;
        ModifyTime?: string;
}


export class Vendormodel {
        VendorName?: string = "";
        IndustryID?: number = 0;
        VendorEmail?: string = "";
        PrefPaymentMethod?: string = "";
        KRAPinURL?: string = "";
        COIURL?: string = "";
        DirectorPinURL?: string = "";
        TOCAcceptInd?: boolean = false;
        FullName?: string = "";
        PhoneNumber?: string = "";
        UserName?: string = "";
        Password?: string = "";
        ImageURL?: string = "";
        DeviceType?: string = "";
}

export class vendorlogin {
        UserName?: string = ""
        Password?: string = ""
        DeviceType?: string = ""

}
export class walletModel 
{
        Selected:boolean=false;
        Date?:Date;
        desc:string="";
        Account:string="";
        Amount:number=0;
        Deposits:number=0;
        Withdrawals:number=0;
        Balance:number=0;
}

export class IpayModel 
{
        live:number=0;
        mpesa:number=1;
        bonga:number=0;
        airtel:number=1;
        equity:number=1;
        mobilebanking:number=0;
        creditcard:number=1;
        mkoporahisi:number=0;
        saida:number=0;
        elipa:number=1;
        unionpay:number=1;
        mvisa:number=1;
        vooma:number=0;
        pesalink:number=0;
        autopay:number=0;
        oid:string='000001';
        inv:string='000001';
        ttl:number=1234.00;
        tel:string="+919427245368";
        eml:string="mukesh.siyana1@gmail.com";
        vid:string="1111";//pending
        curr:string="KES";
        cst:number=1;
        crl:number=2;
        hsh:string="11111";//pending


}

