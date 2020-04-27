function swiper(selector,imgList){
        var swiperDiv = document.querySelector(selector)
        lunbo()
        function createSwiperHtml(){
           var imgListDiv = document.createElement('div')
           imgListDiv.className = 'imgList'
           imgList.forEach((item) => {
                imgListDiv.innerHTML = imgListDiv.innerHTML+'<div class="imgItem active" style="background-image: url('+item+');"></div>'
           })
           
           swiperDiv.appendChild(imgListDiv)
        }
        var preBtn = document.querySelector(selector+'.pre')
        var nxtBtn = document.querySelector(selector+'.nxt')
        var imgListDiv = document.querySelectorAll(selector+'.imgItem')
        var currentImg = 0;
        var alist = document.querySelectorAll(selector+'.ball');
        var timmer;
        function lunbo() { 
           timmer = setInterval(() => {
                if(currentImg<4){
                    currentImg++
                }else{
                    currentImg=0
                }   
                randerImg()
            }, 2000);
        };
        //停止和重启定时器
        function stop(fn) { 
           clearInterval(timmer)
           fn()    
        }
        //绑定点击事件
        nxtBtn.onclick = function () {
            currentImg  =  currentImg+1
            if(currentImg>=imgListDiv.length){
                currentImg = 0
            }
            randerImg()
            stop(lunbo)
        }
        preBtn.onclick = function () {
            currentImg  =  currentImg-1
            if(currentImg<0){
                currentImg = imgListDiv.length-1;
            }
            randerImg()
            stop(lunbo)
        }
        function randerImg() { 
            //初始化将所有图片的active去掉
            imgListDiv.forEach((item,i)=>{
                item.classList.remove('active');
            })
            alist.forEach((item)=>{
                item.classList.remove('active');
            })
            imgListDiv[currentImg].classList.add('active')
            alist[currentImg].classList.add('active')
        }
        
        alist.forEach((item,i)=>{
            item.onclick = () => {
                currentImg = i;
                randerImg()
                stop(lunbo)
            }
        })
    
}