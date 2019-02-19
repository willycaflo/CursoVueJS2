new Vue({
    el: '#vm',
    data: {
        contador: 0,
        x: 0,
        y: 0
    },
    methods: {
        mostrarUbicacion: function(evento){
            this.x = evento.clientX;
            this.y = evento.clientY;
        },
        sumar:function(cantidad){
            this.contador += cantidad;
        }
    },
});
