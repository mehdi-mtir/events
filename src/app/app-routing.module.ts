import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ListEventsComponent } from './list-events/list-events.component';

const routes: Routes = [
  {path : "events", component : ListEventsComponent},
  {path : "events/add", component : AddEventComponent},
  {path : "events/edit/:indice", component : EditEventComponent},
  {path : "", redirectTo : "events", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
