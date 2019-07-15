const app = new Vue({
    el: "#app",
    data: {
        title: "Tareas Pendientes",
        tareas: [],
        asunto: '',
        fecha: '',
        hora: ''
    },
    created: function(){
        let datosDb = JSON.parse(localStorage.getItem('tareas'));
        this.tareas = (datosDb !== null) ? datosDb : []; 
    },
    methods: {
        agregarTarea: function(){
            this.tareas.push({asunto: this.asunto, fecha: this.fecha, hora: this.hora, estado: false});
            this.limpiar();
            this.actualizarDb();
        },
        tareaCompletada: function(i){
            this.tareas[i].estado = true;
            this.actualizarDb();
        },
        quitarTarea: function(i){
            this.tareas.splice(i, 1);
            this.actualizarDb();
        },
        actualizarDb: function(){
            localStorage.setItem('tareas', JSON.stringify(this.tareas));
        },
        limpiar: function(){
            this.asunto = '';
            this.fecha = '';
            this.hora = '';
        }
    }
})