/**
 * Created by Ryan on 2/26/2017.
 */
(function(fb) {
    function Land(option) {
        this.ctx = option.ctx;
        this.x = option.x;
        this.y = option.y;
        this.img = option.img;
        this.width = this.img.width;
        this.height = this.img.height;
        this.speed = option.speed;
    }

    Land.prototype = {
        constructor: Land,
        draw: function () {
            this.x -= this.speed;
            if (this.x < -this.width) {
                this.x += 4 * this.width;
            }
            this.ctx.drawImage(this.img, this.x, this.y);
        }
    };
    
    fb.Land = Land;
})(FlappyBird);