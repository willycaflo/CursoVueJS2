var app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'Aprende Vue.js Fácilmente'
    },
    methods:{
        mostrarMensaje: function(){
            return this.mensaje;
        }
    }
});
