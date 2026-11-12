import { Injectable } from '@angular/core'

export interface Tarea {
  nombre: string
  completada: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: Tarea[] = [
    {
      nombre: 'Estudiar programación',
      completada: false
    },
    {
      nombre: 'Realizar actividades',
      completada: false
    },
    {
      nombre: 'Organizar pendientes',
      completada: true
    }
  ]

  obtenerTareas(): Tarea[] {
    return this.tareas
  }

  agregarTarea(nombre: string): void {
    this.tareas.push({
      nombre: nombre,
      completada: false
    })
  }

  cambiarEstado(tarea: Tarea): void {
    tarea.completada = !tarea.completada
  }

  eliminarTarea(tarea: Tarea): void {
    const indice = this.tareas.indexOf(tarea)

    if (indice !== -1) {
      this.tareas.splice(indice, 1)
    }
  }

}