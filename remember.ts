const magik = magikcraft.io;

function remember(name = "default") {
    const here = magik.hic();
    magik.memento.setItem(name, here);
}