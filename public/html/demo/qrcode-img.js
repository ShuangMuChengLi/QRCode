import QRious from 'qrious';
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
        },
        tag: {
            type: String,
            default: 'canvas',
        },
        middleImg:{
            type:String,
        }
    },
    template:'<canvas id="hyhQrcode"></canvas>',
    render(createElement) {
        return createElement(this.tag, this.$slots.default);
    },
    watch: {
        url() {
            this.generate();
        },
        size() {
            this.generate();
        },
    },
    mounted() {
        this.generate();
        let c=document.getElementById("hyhQrcode");
        let cxt=c.getContext("2d");
        let img=new Image()
        let size = this.size;
        let imgSize = size/5;
        let marginSize = size/2 - imgSize/2;
        img.onload = function() {
            cxt.drawImage(img,marginSize,marginSize,imgSize,imgSize);
        }
        img.src=this.middleImg;
    },
    methods: {
        generate() {
            new QRious(Object.assign({
                element: this.$el,
                value: this.url,
                level:"Q",
                size: this.size,
            },));
        },
    },
}

