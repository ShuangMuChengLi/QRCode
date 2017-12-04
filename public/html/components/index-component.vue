<template>
    <div>
        <qr-code text="https://www.baidu.com/"></qr-code>
        <p>aaa</p>
    </div>
</template>

<script>
    let es6Test = require('../../js/service/es6');
    import VueQRCodeComponent from 'vue-qrcode-component'

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                config: {
                    value: "https://www.baidu.com",
                    imagePath: './examples/assets/logo.png',
                    filter: 'color'
                },
                downloadButton: true
            }
        },
        watch: {

        },
        created:function () {
	        es6Test();
	        class Point{
		        constructor(...args){
			        this.args = args
		        }
		        *[Symbol.iterator](){
			        for(let arg of this.args){
				        yield arg;
			        }
		        }
	        }
	        let o = new Point('hello' , 'world');
	        for(let x of o){
		        console.log(x);
	        }
        },
        mounted:function () {

        },
        methods: {

        },
        components: {'qr-code':VueQRCodeComponent},
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "../../css/index";
</style>
