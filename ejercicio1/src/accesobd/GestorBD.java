/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package accesobd;

//import com.mysql.cj.xdevapi.Statement;
import java.util.Scanner;
import java.sql.*;
import java.util.ArrayList;
import modelo.Alumno;
import modelo.Modulo;

/**
 *
 * @author ana
 */
public class GestorBD extends ConexionBD {

    
    private Statement sentencia;
    private PreparedStatement sentenciaP;
    private ResultSet cursor, cursor2;

    public GestorBD(String nombreBD) {
        super( nombreBD);
    }

    public void cerrarConexion() {
        try {
            if (this.sentencia != null) {
                sentencia.close();
            }
            if (this.sentenciaP != null) {
                sentenciaP.close();
            }
        } catch (SQLException ex) {
            System.out.println("Error en el cierre");
        }
    }

    public ArrayList<Alumno> descargarAlumno() {
        ArrayList<Alumno> lista = new ArrayList<>();
        Alumno alum;
        String sql = "Select * from Alumno";

        try {
            this.sentencia = this.conexion.createStatement();
            cursor = this.sentencia.executeQuery(sql);
            while (cursor.next()) {
                alum = new Alumno(cursor.getString("nie"),cursor.getString("nombre"),new Modulo(cursor.getInt("Modulo_idModulo")));
                
                lista.add(alum);
            }
        } catch (SQLException ex) {
            System.out.println("Error al descargar Alumnos");
        }
        return lista;
    }


    public ArrayList<Modulo> descargarModulos() {
        ArrayList<Modulo> lista = new ArrayList<>();
        Modulo mod;
        String sql = "Select * from Modulo";

        try {
            this.sentencia = this.conexion.createStatement();
            cursor = this.sentencia.executeQuery(sql);
            while (cursor.next()) {
                mod = new Modulo(cursor.getInt("idModulo"), cursor.getString("nombre"), cursor.getInt("duracion"));
           
                lista.add(mod);
            }
        } catch (SQLException ex) {
            System.out.println("Error al descargar los Módulos");
        }
        return lista;
    }
    
  public  void insertarAlumno(String nie, String nombre, int Modulo_idModulo){              
        String sql = "Insert into Alumno values(?,?,?)";
        int devuelve = 0;
        try {            
            this.sentenciaP = this.conexion.prepareStatement(sql);
            this.sentenciaP.setString(1, nie);
            this.sentenciaP.setString(2, nombre);
            this.sentenciaP.setInt(3, Modulo_idModulo);
            devuelve = this.sentenciaP.executeUpdate();            
        } catch (SQLException ex) {
            System.out.println(ex);           
        }         
        System.out.println("Se insertaron " + devuelve + " tuplas nuevas");       
    }     
  
    public void modificarAlumno(String nie,String nombre, int Modulo_idModulo){
        String sql = "update Alumno set nie= ? where nie= ?";
        int devuelve = 0;
        try {
            this.sentenciaP = this.conexion.prepareStatement(sql);
            this.sentenciaP.setString(1, nie);
            this.sentenciaP.setString(2, nombre);
            this.sentenciaP.setInt(2, Modulo_idModulo);

            devuelve = this.sentenciaP.executeUpdate();
        } catch (SQLException ex) {
            System.out.println("Error");
        } 
        System.out.println("Se modificó " + devuelve + " tuplas ");
  }
  

}
