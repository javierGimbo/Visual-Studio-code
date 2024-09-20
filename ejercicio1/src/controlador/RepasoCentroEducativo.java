/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package controlador;

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
    }

}
