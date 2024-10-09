import {Profesor} from './profesor.js'; 

export class Asignatura {

     profesor1 = new Profesor("Jhon Carlos Arrieta Arrieta", "Ingeniería de Sistemas", "jarrieta2@unicartagena.edu.co", "3017344693");
    // Constructor por defecto
    constructor(nombreAsignatura = "Nombre de asignatura no disponible", descripcion = "Descripción no disponible", creditos = 0, profesorResponsable = this.profesor1) {
        this.nombreAsignatura = nombreAsignatura;
        this.descripcion = descripcion;
        this.creditos = creditos;
        this.profesorResponsable = profesorResponsable;
    }

    // Getters
    getNombreAsignatura() {
        return this.nombreAsignatura;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getCreditos() {
        return this.creditos;
    }

    getProfesorResponsable() {
        return this.profesorResponsable;
    }

    // Setters
    setNombreAsignatura(nombreAsignatura) {
        this.nombreAsignatura = nombreAsignatura;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    setCreditos(creditos) {
        this.creditos = creditos;
    }

    setProfesorResponsable(profesorResponsable) {
        this.profesorResponsable = profesorResponsable;
    }

    // Método para mostrar datos
    mostrarDatos() {
        console.log('El nombre de la asignatura es: ' + this.nombreAsignatura);
        console.log('Descripción de la asignatura: ' + this.descripcion);
        console.log('Créditos de la asignatura: ' + this.creditos);
        console.log('El profesor responsable de esta asignatura es: ' + this.profesorResponsable.nombreProfesor);
    }
}