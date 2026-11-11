import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { TareasListaComponent } from './tareas-lista/tareas-lista.component'
import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component'

const routes: Routes = [
  { path: '', component: TareasListaComponent },
  { path: 'agregar', component: TareaFormularioComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TareasRoutingModule {}