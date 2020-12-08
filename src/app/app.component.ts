import { Component } from '@angular/core';
import { EditWorkerComponent } from '../../src/app/ui/edit-worker/edit-worker.component';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }
  // onEditWorker(id: number){
  //   console.log('app edit')
  //   for(var i = 0; i < this.workers.length; i++){
  //     if(this.workers[i].id === id){
  //       console.log('Инфа для edit '+ this.workers[i].id +' '+this.workers[i].name+' '+this.workers[i].surname)
  //     }
  //   }
  // }
  onAddWorker(worker) {
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
  }
}
