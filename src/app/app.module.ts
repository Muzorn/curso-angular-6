import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ListadoComponent } from './listado/listado.component';
import { MisclientesComponent } from './misclientes/misclientes.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import {TodoService} from './todo.service';
import { ResultadosComponent } from './resultados/resultados.component';
import {HttpClientModule} from '@angular/common/http';
import {ResultadosServiceService} from './resultados-service.service';
import { EventillosComponent } from './eventillos/eventillos.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes [
  { path: 'home', component: HomeComponentComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeroesComponent,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent,
    ResultadosComponent,
    EventillosComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [TodoService, ResultadosServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
