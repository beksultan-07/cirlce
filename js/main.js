let getRandom = function(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min
}




let body = $('body')

function getBigger(x, y){

    for(let i = 1; i <= $('span').length; i++){
        setTimeout (function(){
            if(i%2 === 0){
                for(let j = 0; j<=200; j++){
                    setTimeout (function(){
                        $(`.circle${i}`).css({
                            padding: `${j}px`, 
                            left: x-j+'px',
                            top: y-j+'px',
                            background: '#000'
                        })
                    }, 60*(j+1+i))
                }
            }else{
                for(let j = 0; j <200; j++){
                    setTimeout (function(){
                        $(`.circle${i}`).css({
                            padding: `${j}px`, 
                            left: x-j+'px',
                            top: y-j+'px',
                            background: `rgb(${148},${187},${233})`,
                            background: `radial-gradient(circle, rgba(${148},${187},${233},${1}) ${8}%, rgba(${176},${21},${193},${1}) ${88}%)`
                        })
                    }, 60*(j+1+i))
                }

            }
        })
    }

}

function createTag(){
    for(let i = 1; i <10; i++){
        let circle2 = `<span class="circle${i}"></span>`
        body.append(circle2)
        
    }
}
createTag()

function gePosition(x, y){
    for(let i = 0; i < $('span').length; i++){
        $(`.circle${i}`).css({
            top: y + 'px',
            left: x + 'px'
        })

        getBigger(x, y)
    }
}

$("body").click(function(e){
    var xClick = (e.pageX - $(this).offset().left) - ($('span').width() / 2);
    var yClick = (e.pageY - $(this).offset().top) - ($('span').height() / 2);
    gePosition(xClick, yClick)
});



