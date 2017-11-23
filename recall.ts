const magik = magikcraft.io;

function recall(name = "default.place"){
    const there = magik.memento.getItem(name);
    magik.dixit(there.toString());
}