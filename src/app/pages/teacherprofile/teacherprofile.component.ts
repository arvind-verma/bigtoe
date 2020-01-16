import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../animation';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-teacherprofile',
    templateUrl: './teacherprofile.component.html',
    styleUrls: ['./teacherprofile.component.scss'],
    animations: [SlideInOutAnimation],
    providers: [DatePipe]
})
export class TeacherprofileComponent implements OnInit {
    animationState = 'out';
    animationStateCategory = 'out';
    animationStateTitle = 'out';
    myDate: any = new Date();
    CurrentDate: any = new Date();
    teacherData: any = [];
    nextdate: any;
    nextdateFormat: any;
    skill_category: any;
    skill_id: any;
    count = 1;
    selectedItemId: any;

    constructor(
        private authenticationService: AuthenticationService,
        private datePipe: DatePipe,
        private AppService: AppService
    ) {
        this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
        this.nextdate = this.myDate;
        this.CurrentDate = this.datePipe.transform(this.CurrentDate, 'EEE MMM,d');
        this.nextdateFormat = this.CurrentDate;
    }


    ngOnInit() {
        let storageData = JSON.parse(localStorage.getItem('data'));
        var myDate = this.myDate;

        var CurrentDate = this.CurrentDate;
        this.searchByTeacherOnDemand()
    }
    capturenameOnClick;
    toggleShowDiv(divName: string, type, id) {

        this.capturenameOnClick = type;
        if (divName === 'divA') {
            this.animationState = this.animationState === 'out' ? 'in' : 'out';
        } else if (divName === 'divC' + type) {
            this.skill_id = id;
            this.animationStateTitle = this.animationStateTitle === 'out' ? 'in' : 'out';
        }
        else {
            this.skill_category = id;
            this.animationStateCategory = this.animationStateCategory === 'out' ? 'in' : 'out';
            this.animationStateTitle = 'out';
        }
    }

    searchByTeacherOnDemand() {
        let postData = JSON.parse(localStorage.getItem('data'));
        var formDatas = "token=" + postData.Result.token + "&date=" + (this.myDate) + "&student_id=" + postData.Result.student_id + "&teacher_id=4260&address_id=&latitude=&longitude";
        this.authenticationService.searchByTeacherOnDemand(formDatas)
            .subscribe(
                data => {
                    console.log(data)
                    this.teacherData = data['Result'];
                },
                error => {
                    let t = error
                    alert(t['error']['Comments']);
                }
            );
    }


    prevDate() {
        let lastdate = new Date((new Date(this.nextdate)).getTime());
        this.nextdate = lastdate.setDate(lastdate.getDate() - 1);
        var finalDate = this.datePipe.transform(this.nextdate, 'yyyy-MM-dd');
        this.nextdate = finalDate;
        this.nextdateFormat = this.datePipe.transform(finalDate, 'EEE MMM,d');
    }

    nextDate() {
        let lastdate = new Date((new Date(this.nextdate)).getTime());
        this.nextdate = lastdate.setDate(lastdate.getDate() + 1);
        var finalDate = this.datePipe.transform(this.nextdate, 'yyyy-MM-dd');
        this.nextdate = finalDate;
        this.nextdateFormat = this.datePipe.transform(finalDate, 'EEE MMM,d');
    }

    getStudentAddressId() {
        let data = {
            'skill_category_id': this.skill_category,
            'skill_id': this.skill_id,
            'number_of_people': this.count,
            'date': this.nextdateFormat,
            'time_slot': this.selectedItemId
        }
        this.AppService.setData(data);
    }

    selectedItemIds(slotTime) {
        this.selectedItemId = slotTime;
    }

   

}
