import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { TareasService } from '../../services/tareas.service'

@Component({
  standalone: false,
  selector: 'ns-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
})
export class TareaFormularioComponent {

  nombre = ''

  constructor(
    private tareasService: TareasService,
    private router: Router
  ) {}

  guardarTarea() {

    if (this.nombre.trim() === '') {
      return
    }

    this.tareasService.agregarTarea(this.nombre)

    this.nombre = ''

    this.router.navigate(['/tareas'])
  }

}