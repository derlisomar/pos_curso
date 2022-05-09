<?php

class ControladorProductos{

    // mostrar produtos

    static public function ctrMostrarProductos($item, $valor){

        $tabla  = "productos";

        $respuesta = ModeloProductos::mdlMostrarProductos($tabla, $item, $valor);

        return $respuesta;

    }


}