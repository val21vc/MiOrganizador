import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'

import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from '@nativescript/angular'

import { TareasRoutingModule } from './tareas-routing.module'

import { TareasListaComponent } from './tareas-lista/tareas-lista.component'

import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TareasRoutingModule
  ],

  declarations: [
    TareasListaComponent,
    TareaFormularioComponent
  ],

  schemas: [NO_ERRORS_SCHEMA],
})

export class TareasModule {}