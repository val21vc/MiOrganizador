import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas = [
    { nombre: 'Estudiar programación', completada: false },
    { nombre: 'Realizar actividades', completada: false },
    { nombre: 'Organizar pendientes', completada: true }
  ]

  obtenerTareas() {
    return this.tareas
  }

  agregarTarea(nombre: string) {
    this.tareas.push({
      nombre: nombre,
      completada: false
    })
  }

}