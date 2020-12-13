import { Component, OnInit } from '@angular/core';
import { ELearningService } from "../../services/e-learning.service";
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
  providers: [MessageService]
})
export class FilterBoxComponent implements OnInit {
  public filterData = {};
  public language: any;
  public subject: any;
  public class: any;
  public chapter: any;
  public topic: any;
  public learningData: any;
  public languagesArray = ['English', 'Marathi', 'Gujarati', 'Hindi'];
  public subjectArray = ['Maths', 'Science', 'History', 'Computer', 'Physics', 'Chemistry'];
  public classArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public chapterArray = [1, 2, 3, 4, 5, 6, 7, 8];
  public topicArray = ['Story', 'Problem Solving', 'Mathematical'];

  constructor(
    private _learningService: ELearningService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllLerarningData()
  }

  getAllLerarningData() {
    this._learningService.enableLoader = true;
    let filterData: any = {};
    if (this.language)
      filterData['language'] = this.language;
    if (this.subject)
      filterData['subject'] = this.subject;
    if (this.chapter)
      filterData['chapter'] = this.chapter;
    if (this.topic)
      filterData['topic'] = this.topic;
    if (this.class)
      filterData['class'] = this.class;
    this._learningService.getElearningFilter(JSON.stringify(filterData)).subscribe((res: any) => {
      this.learningData = res.data;
      if(res.data?.length === 0) {
        this.showError();
      }
      this._learningService.enableLoader = false;
    }, err => {
      this._learningService.enableLoader = false;
    })
  }

  selectedLanguage(data: any) {
    this.language = data.target.value;
  }

  selectedSubject(data: any) {
    this.subject = data.target.value;
  }

  selectedClass(data: any) {
    this.class = data.target.value;
  }

  selectedChapter(data: any) {
    this.chapter = data.target.value;
  }
  selectedTopic(data: any) {
    this.topic = data.target.value;
  }
  showError() {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: 'No Data Found'});
}

}
