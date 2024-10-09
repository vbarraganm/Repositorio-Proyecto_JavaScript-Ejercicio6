export class Profesor {
    // Constructor por defecto
    constructor(nombreProfesor = "Profesor/a desconocido", especialidad = "Especialidad no encontrada", tiempoExperiencia = 0, email = "Email desconocido") {
        this.nombreProfesor = nombreProfesor;
        this.especialidad = especialidad;
        this.tiempoExperiencia = tiempoExperiencia;
        this.email = email;
    }

    // Getters
    getNombreProfesor() {
        return this.nombreProfesor;
    }

    getEspecialidad() {
        return this.especialidad;
    }

    getTiempoExperiencia() {
        return this.tiempoExperiencia;
    }

    getEmail() {
        return this.email;
    }

    // Setters
    setNombreProfesor(nombreProfesor) {
        this.nombreProfesor = nombreProfesor;
    }

    setEspecialidad(especialidad) {
        this.especialidad = especialidad;
    }

    setTiempoExperiencia(tiempoExperiencia) {
        this.tiempoExperiencia = tiempoExperiencia;
    }

    setEmail(email) {
        this.email = email;
    }

    // Método para mostrar datos
    mostrarDatos() {
        console.log('El nombre del profesor/a es: ' + this.nombreProfesor);
        console.log('La especialidad del profesor/a es: ' + this.especialidad);
        console.log('El tiempo de experiencia en años del profesor/a es: ' + this.tiempoExperiencia);
        console.log('El email del profesor/a es: ' + this.email);
    }
}