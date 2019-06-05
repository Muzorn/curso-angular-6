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

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeroesComponent,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
