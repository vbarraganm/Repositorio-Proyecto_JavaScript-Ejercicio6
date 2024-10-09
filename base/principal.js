import  { Universidad }  from '../model/universidad.js';
import {Profesor}  from '../model/profesor.js';
import {Asignatura}  from '../model/asignatura.js';


class Principal {
    static main() {
        const universidad1 = new Universidad();
        const profesor1 = new Profesor();
        const asignatura1 = new Asignatura();
        
        const universidad2 = new Universidad("Universidad de Cartagena", "Cartagena, Bolívar", 9, 33500);
        const profesor2 = new Profesor("Jhon Carlos Arrieta Arrieta", "Ingeniería de Sistemas", 8, "jarrieta2@unicartagena.edu.co");
        const asignatura2 = new Asignatura("Programación Orientada a Objetos", "Curso orientado a la creación de aplicaciones robustas y escalables a partir de conceptos de POO", 3, profesor2);
    
        console.log('     Código: 7502410031');
        console.log(' Valentina Barragán Martínez');
        console.log('*****************************');
        
        console.log('');
        
        universidad1.mostrarDatos();
        console.log('');
        profesor1.mostrarDatos();
        console.log('');
        asignatura1.mostrarDatos();
        console.log('');
        
        console.log('*****************************');
        console.log('');
        
        universidad2.mostrarDatos();
        console.log('');
        profesor2.mostrarDatos();
        console.log('');
        asignatura2.mostrarDatos();
        console.log('');
    }
}

Principal.main()
