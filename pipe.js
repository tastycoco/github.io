/**
 * Created by Ryan on 2/26/2017.
 */


(function(fb) {
    function Pipe(option) {
        this.ctx = option.ctx;
        this.x = option.x;
        this.imgTop = option.imgTop;
        this.imgBottom = option.imgBottom;
        this.height = this.imgTop.height;
        this.width = this.imgTop.width;
        this.spaceHeight = 135;
        this.topY = 0;
        this.bottomY = 0;
        this.speed = option.speed;

        this.initY();
    }

    Pipe.prototype = {
        constructor: Pipe,
        draw: function () {
            this.x -= this.speed;
            if (this.x < -this.width * 3) {
                this.x += this.width * 3 * 6;
                //因为每次管道重新出现都应该重新设置y值
                this.initY();
            }

            this.ctx.drawImage(this.imgTop, this.x, this.topY);
            this.ctx.drawImage(this.imgBottom, this.x, this.bottomY);

            this.ctx.rect(this.x, this.topY, this.width, this.height);
            this.ctx.rect(this.x, this.bottomY, this.width, this.height);

            // this.ctx.fill();
        },
        initY: function () {
            //随机计算一个上面的管道的y值
            this.topY = -parseInt(Math.random() * 240 + 120);
            //根据上面管道的y值 计算出来下面管道的y值
            this.bottomY = this.topY + this.height + this.spaceHeight
        }
    };
    
    fb.Pipe = Pipe;
})(FlappyBird)