import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import * as $ from '../../../../node_modules/jquery/dist/jquery.min.js';
import { MyWorkerType, MyWorker, MyWorkersDatabase } from 'src/app/shared/worker.model';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  workers: MyWorker[] = MyWorkersDatabase;

  @Input() comeName;
  @Input() comeSurname;
  @Input() comeId;

  name: string;
  surname: string;
  id:number;

  constructor() {
  }

  ngOnInit(): void {}

  onEditWorker() {
    console.log(this.comeId+"  "+this.comeName+" "+this.comeSurname) // значения взятые с род блока 
    this.id = this.comeId;
    this.name = this.comeName
    this.surname = this.comeSurname;
    console.log(this.id + " " + this.name + " " + this.surname);
  }
  saveChanges(){
    for(let i = 0; i < this.workers.length; i++){
      if(this.workers[i].id == this.id){
        this.workers[i].name = this.name;
        this.workers[i].surname = this.surname;
        console.log(this.name);
        break;
      }
    }
  }

}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
