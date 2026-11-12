import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { TareasService } from '../../services/tareas.service'

@Component({
  standalone: false,
  selector: 'ns-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css'],
})
export class TareaFormularioComponent {

  nombre = ''

  mensajeError = ''

  constructor(
    private tareasService: TareasService,
    private router: Router
  ) {}

  guardarTarea(): void {

    const nombreLimpio = this.nombre.trim()

    if (nombreLimpio === '') {
      this.mensajeError = 'Escribe el nombre de la tarea.'
      return
    }

    this.tareasService.agregarTarea(nombreLimpio)

    this.nombre = ''
    this.mensajeError = ''

    this.router.navigate(['/tareas'])

  }

  cancelar(): void {
    this.router.navigate(['/tareas'])
  }

}