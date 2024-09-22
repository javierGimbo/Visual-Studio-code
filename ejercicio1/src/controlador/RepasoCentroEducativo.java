/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package controlador;

import modelo.Alumno;
import modelo.Modulo;

/**
 *
 * @author ana
 */
public class RepasoCentroEducativo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        GestionCentroEducativo miCentro = new GestionCentroEducativo();
        miCentro.listadoAlumnos();
        System.out.println("____________________");
        miCentro.listadoModulos();
        
         Alumno nuevoAlumno = new Alumno("A222", "JAvier", new Modulo(1));
        miCentro.insertarNuevoAlumno(nuevoAlumno);

        // Borrar módulos con duración mayor a 70 horas
        miCentro.borrarModulosConDuracionMayorA70();

        // Actualizar un módulo por nombre
        miCentro.actualizarModuloPorNombre("MATES", 50);
    }

}
