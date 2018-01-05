<template>
    <div>
        <hyh-qrcode
            :url="qrcode_url"
            :size="500"
            :middleImg="middleImg"
        ></hyh-qrcode>
    </div>
</template>
<script>
    import Vue from "vue";
    import qrcode from "../demo/hyh-qrcode.vue";
//    let qrcode = require('../demo/hyh-qrcode.vue');
    let es6Test = require('../../js/service/es6');
    export default {
        data () {
            return {
                qrcode_url:"https://www.baidu.com/",
                middleImg:"../../img/o_photo.png",
            }
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
        components: {
            'hyh-qrcode':qrcode,
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "../../css/index";
</style>
