export class Universidad {
    // Constructor por defecto
    constructor(nombreUni = "Universidad desconocida", ubicacionUni = "Ubicación no asignada", numFacultades = 0, numEstudiantes = 0) {
        this.nombreUni = nombreUni;
        this.ubicacionUni = ubicacionUni;
        this.numFacultades = numFacultades;
        this.numEstudiantes = numEstudiantes;
    }

    // Getters
    getNombreUni() {
        return this.nombreUni;
    }

    getUbicacionUni() {
        return this.ubicacionUni;
    }

    getNumFacultades() {
        return this.numFacultades;
    }

    getNumEstudiantes() {
        return this.numEstudiantes;
    }

    // Setters
    setNombreUni(nombreUni) {
        this.nombreUni = nombreUni;
    }

    setUbicacionUni(ubicacionUni) {
        this.ubicacionUni = ubicacionUni;
    }

    setNumFacultades(numFacultades) {
        this.numFacultades = numFacultades;
    }

    setNumEstudiantes(numEstudiantes) {
        this.numEstudiantes = numEstudiantes;
    }

    // Método para mostrar datos
    mostrarDatos() {
        console.log('El nombre de la universidad es: ' + this.nombreUni);
        console.log('La universidad está ubicada en: ' + this.ubicacionUni);
        console.log('Número de facultades de la universidad:' + this.numFacultades);
        console.log('Número de estudiantes de la universidad: ' +this.numEstudiantes);
    }
}
