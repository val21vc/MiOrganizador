import { Component } from '@angular/core'
import { TareasService } from '../../services/tareas.service'

@Component({
  standalone: false,
  selector: 'ns-tareas-lista',
  templateUrl: './tareas-lista.component.html',
})
export class TareasListaComponent {

  tareas: { nombre: string; completada: boolean }[] = []

  constructor(private tareasService: TareasService) {
    this.tareas = this.tareasService.obtenerTareas()
  }

}