/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controlador;

import accesobd.GestorBD;
import java.util.ArrayList;
import java.util.Iterator;
import modelo.Alumno;
import modelo.Modulo;

/**
 *
 * @author ana
 */
public class GestionCentroEducativo {
    
    private GestorBD gb;
    private ArrayList<Alumno> listaA;
    private ArrayList<Modulo> listaM;


    public GestionCentroEducativo() {
        this.gb = new GestorBD("CentroEducativo");
        this.listaA = this.gb.descargarAlumno();
        this.listaM = this.gb.descargarModulos();
    }

    public void listadoAlumnos() {
        for (Alumno a:listaA) {
            System.out.println(a);
        }
    }
    
    
    public void listadoModulos() {
        Iterator it= this.listaM.iterator();
        while(it.hasNext())
            System.out.println(it.next());
    }
    
     public void insertarNuevoAlumno(Alumno nuevoAlumno) {
        // Insertar el alumno en la base de datos
        gb.insertarAlumno(nuevoAlumno);
        // Volver a cargar la lista de alumnos desde la base de datos para reflejar los cambios
        this.listaA = gb.descargarAlumno();
    }
     
     public void borrarModulosConDuracionMayorA70() {
        // Borrar los módulos en la base de datos
        gb.borrarModulosConDuracionMayorA70();
        // Volver a cargar la lista de módulos desde la base de datos para reflejar los cambios
        this.listaM = gb.descargarModulos();
    }

    // Método para actualizar un módulo dado el nombre
    public void actualizarModuloPorNombre(String nombreModulo, int nuevaDuracion) {
        // Actualizar el módulo en la base de datos
        gb.actualizarModuloPorNombre(nombreModulo, nuevaDuracion);
        // Volver a cargar la lista de módulos desde la base de datos para reflejar los cambios
        this.listaM = gb.descargarModulos();
    }

}
