Vue.directive('input-mask', {
	bind: function(el) {
		new Inputmask().mask(el);
	},
});

Vue.component('file-reader', {
    methods: {
        loadDataFromFile: function(ev) {
          const file = ev.target.files[0];
          const reader = new FileReader();

          reader.onload = e => this.$emit("load", e.target.result);
          reader.readAsDataURL(file);
        },
    },
    template: "<input class='btn' type='file' v-on:change='loadDataFromFile' />"
});



var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#wrapper-app',
    data: {
        activeSection: 0,
        img: '',
        scale: 'CMAJOR',
        fileName: ''
    },
    methods:{
        imgPreviewChange: function(e){
            let input = e.target;
            let imgData = document.getElementById('image-data');
            let imgPrev = document.getElementById('image-preview');
            let reader = new FileReader();

            /*reader.onload = function (e) {
                this.$emit('load', e.target.result);
                imgPrev.setAttribute('src', e.target.result);
                imgData.setAttribute('src', e.target.result);
            }*/
            reader.onload = e => this.$emit('load', e.target.result);

            reader.readAsDataURL(input.files[0]);
        },
        incrementSection: function(){
            //if (this.img !== '')
                this.activeSection += 1;
        },
        decrementSection: function(){
            //if (this.img !== '')
                this.activeSection -= 1;
        }
    }
});
