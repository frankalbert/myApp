<template>
  <section class="contenedor__facturacion">
    <div class="contenedor__elemento__facturacion editor--facturacion">
      <div class="contenedor__titulo__factura">
        <h2>Datos de la Factura</h2>
      </div>
      <div class="elemento__facturacion">
        <label class="label__facturacion">Nombre de la Empresa:</label>
        <input type="text" name="NOMBRE_EMPRESA" id="nombreEmpresa" v-model="nombreEmpresa">
      </div>
      <div class="elemento__facturacion">
        <label class="label__facturacion">Fecha de la Factura:</label>
        <input type="date" name="FECHA_FACTURA" id="fechaFactura" v-model="fechaFactura">
      </div>
      <div class="elemento__facturacion">
        <label class="label__facturacion">Servicio:</label>
        <textarea name="SERVICIO_FACTURA" id="servicioFactura" v-model="servicioFactura">
        </textarea>
      </div>
      <div class="elemento__facturacion">
        <label class="label__facturacion">Importe:</label>
        <input type="number" name="IMPORTE_FACTURA" id="importeFactura" v-model="importeFactura">
      </div>
    </div>
    <div class="contenedor__elemento__facturacion datos--facturacion">
      <div class="contenedor__titulo__factura">
        <h2>Detalles de la Factura</h2>
      </div>
      <div class="resultado__factura">
          <h3>Empresa:</h3>
          <h4>{{ nombreEmpresa }}</h4>
      </div>
      <div class="resultado__factura">
          <h3>Fecha de la Factura:</h3>
          <h4>{{ fechaFactura | formatearFecha }}</h4>
      </div>
      <div class="resultado__factura">
          <h3>Importe de la Factura (€):</h3>
          <h4>{{ importeFactura }}</h4>
      </div>
      <div class="resultado__factura">
          <h3>Importe de la Factura con IVA (€):</h3>
          <h4>{{ calcularIva }}</h4>
      </div>
      <div class="resultado__factura">
          <h3>Servicio:</h3>
          <h4>{{ servicioFactura }}</h4>
      </div>

    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            nombreEmpresa: '',
            fechaFactura: '',
            servicioFactura: '',
            importeFactura: null,
        }
    },
    computed:{
      calcularIva() {
            return this.importeFactura * 1.21;
        }
    },
    filters: {
      formatearFecha(fecha) {
          return fecha.split('-').reverse().join('/');
      },      
    }
};
</script>

<style scoped>
.contenedor__facturacion {
  float: left;
  width: 100%;
  margin-top: 20px;
}
.contenedor__elemento__facturacion {
  float: left;
  padding: 0 15px;
  box-sizing: border-box;
}
.editor--facturacion {
  width: 20%;
  display: flex;
  flex-direction: column;
}
.elemento__facturacion {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.elemento__facturacion input{
    padding: 5px;
}
.label__facturacion {
  margin-bottom: 5px;
}
.datos--facturacion {
  width: 80%;
  padding-bottom: 20px;
  border: 1px solid #c7c7c7;
}
.contenedor__titulo__factura {
  float: left;
  width: 100%;
  text-align: center;
}
.contenedor__titulo__factura {
  text-transform: uppercase;
}
.resultado__factura{
    float: left;
    width: 24%;
    min-height: 86px;
    margin-bottom: 10px;
    margin: 5px;
    border: 1px solid #c7c7c7;
    padding: 5px 15px;
    box-sizing: border-box;
}
.resultado__factura h3, .resultado__factura h4{
    margin: 0;
    padding-bottom: 15px;;
}
</style>