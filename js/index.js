window.onload=function () {
    let home = document.getElementById("home")
    home.onmouseenter = function () {
        home.style.color = "red";
    }
    home.onmouseleave = function () {
        home.style.color = "#ffffff"
    }

    // for (let i=0;i<list.length;i++){
    //     list[i].onmouseenter=function () {
    //         list[i].style.backgroundColor="blue"
    //
    //     }
    //     list[i].onmouseleave=function () {
    //         list[i].style.backgroundColor="#ffffff"
    //     }
    //
    // }

    let tablists = document.querySelectorAll(".tablists>li")
    tablists.forEach(function (elem, index) {
        tablists.onmouseenter = function () {
            for (let i = 0; i < tablists.length; i++) {
                tablists[i].classList.remove("contentRightListHot")
            }
            this.classList.add("contentRightListHot")
        }
    })

    let buttonprev = document.querySelector(".button-prev")
    let buttonnext = document.querySelector(".button-next")
    let bannerImg = document.querySelectorAll("li.choose")
    let list = document.querySelectorAll(".pagelist > li")
    let current = 0, next = 0;
    let w = bannerImg[0].offsetWidth;
    let flag = true;
    buttonnext.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        next++;
        if (next == bannerImg.length) {
            next = 0;
        }
        bannerImg[next].style.left = w + "px";
        animate(bannerImg[current], {left: -w});
        animate(bannerImg[next], {left: 0}, function f() {
            flag = true;
        });

        list[current].classList.remove("hot")
        list[next].classList.add("hot")
        current = next;
    }
    buttonprev.onclick = function () {
        next--;
        if (!flag) {
            return;
        }
        flag = false;
        if (next < 0) {
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + "px";
        animate(bannerImg[current], {left: w}, function f() {
            flag = true;
        });
        animate(bannerImg[next], {left: 0});
        list[current].classList.remove("hot")
        list[next].classList.add("hot")
        current = next;
    }
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            if (current === i) {
                return;
            }
            next = i;
            if (current < next) {
                bannerImg[next].style.left = w + "px";
                animate(bannerImg[current], {left: -w});
                animate(bannerImg[next], {left: 0});
            } else {
                bannerImg[next].style.left = -w + "px";
                animate(bannerImg[current], {left: w}
                );
                animate(bannerImg[next], {left: 0});
            }
            list[current].classList.remove("hot")
            list[next].classList.add("hot")
            current = next


        }

    }

    //     index++;
    //     if (index==bannerImg.length){
    //         index=0;
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex=1;
    //     });
    //     Array.prototype.forEach.call(list,function (elem) {
    //         elem.classList.remove("hot")
    //     })
    //     list[index].classList.add("hot")
    //     bannerImg[index].style.zIndex=999
    //
    // }
    // buttonprev.onclick=function () {
    //     index--
    //     if (index<0){
    //         index=bannerImg.length-1;
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex=1;
    //     });
    //     Array.prototype.forEach.call(list,function (elem) {
    //         elem.classList.remove("hot")
    //     })
    //     list[index].classList.add("hot")
    //     bannerImg[index].style.zIndex=999
    //
    // }
    let choose = document.querySelector("ul.choose")
    console.log(choose);
    let t = setInterval(buttonnext.onclick, 3000)
    choose.onmouseenter = function () {
        clearInterval(t)

    };

    //     for ( var i=0;i<list.length;i++){
    //         list[i].onclick=function () {
    //             Array.prototype.forEach.call(list,function (elem) {
    //                 elem.classList.remove("hot")
    //             });
    //             bannerImg.forEach(function (ele) {
    //                 ele.style.zIndex=1;
    //             });
    //             list[index].classList.add("hot")
    //             bannerImg[index].style.zIndex=999
    //         }
    //     }
    // list[i].onmouseleave = function () {
    //     t = setInterval(buttonnext.onclick, 3000)
    // }
    // choose.onmouseleave = function () {
    //     t = setInterval(buttonnext.onclick, 3000)
    // }

    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll(".lazyload");
    let positionArr = [];
    imgs.forEach(function (ele) {
        parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
    });
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrolltop);
        for (let i = 0; i < positionArr.length; i++) {
            if (scrolltop + viewH >= positionArr[i] + 50) {
                if (!imgs[i].src) {
                    imgs[i].src = imgs[i].getAttribute('aa');
                }
            }
        }
    }

}