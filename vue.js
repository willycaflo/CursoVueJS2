new Vue({
    el: '#vm',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        mostrarUbicacion: function(evento){
            this.x = evento.clientX;
            this.y = evento.clientY;
        }
    },
});
