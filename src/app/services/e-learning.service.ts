import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ELearningService {
  readonly ROOT_URL: any;
  readonly HERUKO_URL: any;
  public enableLoader:any = false;
  constructor(
    private _http: HttpClient,
  ) { 
    this.ROOT_URL = 'http://localhost:3000/api/learnService/';
    this.HERUKO_URL = 'https://logicrays-task.herokuapp.com/api/learnService';

  }

  getElearningFilter(filterData: any) {
    let getUrl = this.linkGeneration(environment.learningService.getFilterLearning);
    const params: any = {};
    params['queryData'] = filterData;
    return this._http.get(getUrl, { params: params })
    .pipe(map(response => {
      return response;
    }));
  }
  public linkGeneration(param: any) {
    return `${this.ROOT_URL}${param}`;
    // return `${this.HERUKO_URL}${param}`;
  }
}
