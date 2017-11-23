const magik = magikcraft.io;

function remember(name = "default.place") {
    const here = magik.hic();
    magik.memento.setItem(name, here);
}