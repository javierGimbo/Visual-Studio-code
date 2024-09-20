/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

import java.util.ArrayList;

/**
 *
 * @author ana
 */

public class Modulo {
    public int codigo;
    public String nombre;
    public int duracion;
    public ArrayList<Alumno> listaA;


    public Modulo(int codigo, String nombre, int duracion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.duracion = duracion;
        this.listaA = new ArrayList<>();
    }
    
    

    public Modulo(int codigo) {
        this.codigo = codigo;
        this.listaA = new ArrayList<>();
    }

    public Modulo() {
        this.listaA = new ArrayList<>();
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public ArrayList<Alumno> getListaA() {
        return listaA;
    }

    public void setListaA(ArrayList<Alumno> listaA) {
        this.listaA = listaA;
    }
    
    

    @Override
    public String toString() {
        return "Modulo{" + "codigo=" + codigo + ", nombre=" + nombre + ", duracion=" + duracion + '}';
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 67 * hash + this.codigo;
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
        final Modulo other = (Modulo) obj;
        return this.codigo == other.codigo;
    }
    
    
    
}
