import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../animation';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';


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
    myDate: any = new Date();
    //teacherData:any[]=[];
    teacherData: any = {
        "avg_rating": "5.00",
        "number_of_ratings": "2",
        "teacher_id": "135",
        "firstname": "Beth",
        "lastname": "H",
        "distance": "0.7743454756176119",
        "is_favorite": 0,
        "summary": "I mostly teach a powerful vinyasa flow style class. My sequencing has a strong focus on alignment sometimes with creative uses of dance, pilates and bar style moves.",
        "about": "Training/education: Yoga to the People (200hrs), and the Laughing Lotus School of Yoga (100hrs).",
        "adjective1": "Alignment",
        "adjective2": "Therapy",
        "profile_picture": "http://18.215.216.157/uploads/user/teacher/f8890e87e0326fd73f69e47794cf3e9d.jpg",
        "additional_photo": [
            {
                "id": "28",
                "image_url": "https://www.bigtoeyogaapp.com/uploads/user/teacher/1571616261.png"
            },
            {
                "id": "29",
                "image_url": "https://www.bigtoeyogaapp.com/uploads/user/teacher/1571616376.png"
            }
        ],
        "teacher_educations": [
            {
                "id": "40",
                "degree_name": "200 hr RYT",
                "degree_year": "2010",
                "school_name": "Yoga To The People"
            },
            {
                "id": "41",
                "degree_name": "50 hr Super Sequencing",
                "degree_year": "2015",
                "school_name": "Laughing Lotus"
            },
            {
                "id": "42",
                "degree_name": "25 hr Ayurvedic Training",
                "degree_year": "2016",
                "school_name": "Yoga Vida"
            },
            {
                "id": "43",
                "degree_name": "50 hr Inversion Training",
                "degree_year": "2017",
                "school_name": "Laughing Lotus"
            },
            {
                "id": "44",
                "degree_name": "100 hr Yoga Therapy Training",
                "degree_year": "2018",
                "school_name": "Integral Yoga Institute"
            }
        ],
        "skill_category": [
            {
                "service_category_id": "1",
                "service_category": "Yoga",
                "text_color": "FFB056",
                "backgrond_color": "FFF7EE",
                "skill": [
                    {
                        "skill_id": "8",
                        "name": "Flow",
                        "capacity": "15",
                        "tax": "",
                        "tip": "",
                        "price1": "75",
                        "price2": "20",
                        "description": "Alignment based flow catered to students needs, focus on strength, pain relief, and building knowledge of the poses"
                    }
                ]
            },
            {
                "service_category_id": "8",
                "service_category": "Therapy",
                "text_color": "841AB6",
                "backgrond_color": "EAD8F3",
                "skill": [
                    {
                        "skill_id": "19",
                        "name": "Yoga Therapy",
                        "capacity": "1",
                        "tax": ".045",
                        "tip": "",
                        "price1": "75",
                        "price2": "20",
                        "description": "A session focused on assessment, restorative, meditation and energy healing based on the student's needs."
                    }
                ]
            }
        ],
        "slots": [
            "05:30",
            "05:45",
            "06:00",
            "06:15",
            "06:30",
            "06:45",
            "07:00",
            "07:15",
            "07:30"
        ],
        "from_time": "05:30:00",
        "to_time": "08:30:00"
    }

    constructor(
        private authenticationService: AuthenticationService,
        private datePipe: DatePipe) {
        this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }

    count = 1;
    ngOnInit() {
        // this.searchByTeacherOnDemand()
    }

    toggleShowDiv(divName: string) {
        if (divName === 'divA') {
            console.log(this.animationState);
            this.animationState = this.animationState === 'out' ? 'in' : 'out';
            console.log(this.animationState);
        }
        else {
            this.animationStateCategory = this.animationStateCategory === 'out' ? 'in' : 'out';
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

}
