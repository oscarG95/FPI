var elVue = new Vue({
    el: "#AppVue",
    data: {
        cantidad: 10,
        clientes: null,
        aceptado: 0,
        rechazado: 0,
        fnFiltro: '',
    },
    methods: {
        obtenerClientes: function () {
            axios
                .get('https://randomuser.me/api/?results=' + this.cantidad)
                .then(response => {
                    this.clientes = response.data.results;

                })
        },
        aceptarCliente: function (posicion) {
            //aceptado++;

            this.aceptado++;
            this.clientes.splice(posicion, 1);
            //alert("cliente: "+ posicion);
        },

        rechazarCliente: function (posicion) {
            this.rechazado++;
            this.clientes.splice(posicion, 1);
        },
        /*  computed:{
             filtrar: function(){
                 var fnFiltro = this.fnFiltro;
                 return this.clientes.filter(function(el) {
                     return data.name.first.toLowerCase().indexOf(fnFiltro.toLowerCase()) !== -1;
                   });
             }
         } */

    }

})