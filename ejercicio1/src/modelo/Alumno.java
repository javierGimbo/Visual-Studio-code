/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

/**
 *
 * @author ana
 */

public class Alumno {
    private String nie;
    private String nombre;
    private Modulo modulo;

    public Alumno(String nie, String nombre, Modulo modulo) {
        this.nie = nie;
        this.nombre = nombre;
        this.modulo = modulo;
    }
    

    public Alumno(String nie) {
        this.nie = nie;
    }

    public Alumno() {
    }
    

    public String getNie() {
        return nie;
    }

    public void setNie(String nie) {
        this.nie = nie;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }
    

    @Override
    public String toString() {
        return "Alumno{" + "nie=" + nie + ", nombre=" + nombre + ", modulo=" + modulo.getCodigo()+ '}';
    }

    


    @Override
    public int hashCode() {
        int hash = 5;
        hash = 37 * hash + this.nie.hashCode();
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Alumno other = (Alumno) obj;
        return this.nie == other.nie;
    }
    
    
    
    
}
