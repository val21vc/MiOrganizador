import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { isAndroid } from '@nativescript/core'
import { TareasService, Tarea } from '../../services/tareas.service'

@Component({
  standalone: false,
  selector: 'ns-tareas-lista',
  templateUrl: './tareas-lista.component.html',
  styleUrls: ['./tareas-lista.component.css'],
})
export class TareasListaComponent {

  tareas: Tarea[] = []

  mensajeAndroid = ''

  constructor(
    private tareasService: TareasService,
    private router: Router
  ) {

    this.tareas = this.tareasService.obtenerTareas()

    if (isAndroid) {
      this.mensajeAndroid = '¡Bienvenido a MiOrganizador en Android!'
    }

  }

  abrirFormulario(): void {
    this.router.navigate(['/tareas/agregar'])
  }

  cambiarEstado(tarea: Tarea): void {
    this.tareasService.cambiarEstado(tarea)
  }

  eliminarTarea(tarea: Tarea): void {
    this.tareasService.eliminarTarea(tarea)
  }

}