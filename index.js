function preMain(win) {
    win.x = 5;
    //win.showDevTools();
    win.show();
    win.on('close', function(){
        alert(win.x)
        this.close(true)
    })
}
function main() {
    
}
if (window && window.$) { //html start
    var win = nw.Window.get();
    preMain(win);
    main.call(window);
} else { //js start
    nw.Window.open(__dirname+'/index.html', {show: false}, function(win) {
        preMain(win);
        main.call(win.window);
    });
}

