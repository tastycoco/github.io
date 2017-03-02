/**
 * Created by Ryan on 2/26/2017.
 */

(function(fb){
    function Bird(option){
        this.casH = option.casH;
        this.landH = option.landH;
        this.ctx = option.ctx;
        this.x = option.x;
        this.y = option.y;
        this.img = option.img;
        this.width = this.img.width / 3;
        this.height = this.img.height;
        this.speed = 0;
        this.acc = 0.0005;
        this.maxAngle = 45;
        this.maxSpeed = 0.3;
        this.imgIndex = 0;
    }
    Bird.prototype = {
        constructor: Bird,
        draw: function (deltaTime) {
            //根据时间差求出来下落的距离
            var deltaY = this.speed * deltaTime + this.acc * deltaTime * deltaTime / 2;
            //根据时间差求出来当前的速度
            this.speed = this.speed + this.acc * deltaTime;
            //根据当前速度求出来当前鸟头的角度
            var currentAngle = this.speed / this.maxSpeed * this.maxAngle;
            if(currentAngle > this.maxAngle){
                currentAngle = this.maxAngle;
            }

            //因为下面要对画布进行平移以及旋转变换，所以要保存一下正常的画布状态
            this.ctx.save();

            //让小鸟的y坐标 += 下落的高度
            this.y += deltaY;
            
            //直接将画布原点平移到小鸟的中心
            this.ctx.translate(this.x + this.width /2, this.y + this.height / 2);
            //将画布旋转鸟头需要旋转的角度
            this.ctx.rotate(this.angleToRadian(currentAngle));
            //在原点位置画出小鸟的图片
            this.ctx.drawImage(this.img, this.width * this.imgIndex, 0, this.width, this.height, - this.width/2, - this.height /2, this.width, this.height);

            //imgIndex用来控制帧动画
            this.imgIndex ++;
            this.imgIndex %= 3;

            //将之前保存的正常的状态恢复
            this.ctx.restore();
        },
        angleToRadian: function (angle){
            return angle / 180 * Math.PI;
        }
    };
    
    fb.Bird = Bird;
})(FlappyBird)
