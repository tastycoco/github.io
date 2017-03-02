/**
 * Created by Ryan on 2/26/2017.
 */
(function(fb) {
    function Sky(option) {
        this.x = option.x;
        this.y = option.y;
        this.ctx = option.ctx;
        this.img = option.img;
        this.width = this.img.width;
        this.height = this.img.height;
        this.speed = option.speed;
    }

    Sky.prototype = {
        constructor: Sky,
        draw: function () {
            this.x -= this.speed;
            //当前图片整个从画布出去之后，需要将其挪到后面
            if (this.x < -this.width) {
                this.x += 2 * this.width;
            }
            this.ctx.drawImage(this.img, this.x, this.y);
        }
    }

    fb.Sky = Sky;
})(FlappyBird);