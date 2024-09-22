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
    
    public void insertarAlumno(Alumno alumno) {
    String checkSql = "SELECT * FROM Alumno WHERE nie = ?";
    String insertSql = "INSERT INTO Alumno (nie, nombre, Modulo_idModulo) VALUES (?, ?, ?)";

    try {
        // Verificamos si el alumno ya existe
        this.sentenciaP = this.conexion.prepareStatement(checkSql);
        this.sentenciaP.setString(1, alumno.getNie());
        cursor = this.sentenciaP.executeQuery();

        if (cursor.next()) {
            System.out.println("El alumno con NIE " + alumno.getNie() + " ya existe.");
        } else {
            // Insertamos el nuevo alumno
            this.sentenciaP = this.conexion.prepareStatement(insertSql);
            this.sentenciaP.setString(1, alumno.getNie());
            this.sentenciaP.setString(2, alumno.getNombre());
            this.sentenciaP.setInt(3, alumno.getModulo().getCodigo());
            
            int filasInsertadas = this.sentenciaP.executeUpdate();
            if (filasInsertadas > 0) {
                System.out.println("Alumno insertado correctamente.");
            }
        }
    } catch (SQLException ex) {
        System.out.println("Error al insertar alumno: " + ex.getMessage());
    }
}
    
    public void borrarModulosConDuracionMayorA70() {
    String sql = "DELETE FROM Modulo WHERE duracion > 70";

    try {
        this.sentenciaP = this.conexion.prepareStatement(sql);
        int filasEliminadas = this.sentenciaP.executeUpdate();

        if (filasEliminadas > 0) {
            System.out.println(filasEliminadas + " módulos con duración mayor a 70 horas han sido eliminados.");
        } else {
            System.out.println("No hay módulos con duración mayor a 70 horas.");
        }
    } catch (SQLException ex) {
        System.out.println("Error al eliminar módulos: " + ex.getMessage());
    }
}

    public void actualizarModuloPorNombre(String nombreModulo, int nuevaDuracion) {
    String sql = "UPDATE Modulo SET duracion = ? WHERE nombre = ?";

    try {
        this.sentenciaP = this.conexion.prepareStatement(sql);
        this.sentenciaP.setInt(1, nuevaDuracion);
        this.sentenciaP.setString(2, nombreModulo);
        
        int filasActualizadas = this.sentenciaP.executeUpdate();

        if (filasActualizadas > 0) {
            System.out.println("El módulo " + nombreModulo + " ha sido actualizado.");
        } else {
            System.out.println("No se encontró un módulo con el nombre " + nombreModulo + ".");
        }
    } catch (SQLException ex) {
        System.out.println("Error al actualizar el módulo: " + ex.getMessage());
    }
}



}
