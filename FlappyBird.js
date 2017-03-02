/**
 * Created by Ryan on 2/26/2017.
 */
(function (window) {

    var FlappyBird = {
        loadImg: function (imgArr, callback) {
            var imgList = {};
            //count用来记录已经加载完成了的图片的数量
            var count = 0;
            imgArr.forEach(function (v, i, a) {
                var img = new Image();
                img.src = "imgs/" + v + ".png";
                imgList[v] = img;
                img.onload = function () {
                    count++;
                    if (count == imgArr.length) {
                        callback(imgList);
                    }
                }
            })
            return imgList;
        }
    }

    window.FlappyBird = window.FB = FlappyBird;
})(window)