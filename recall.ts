const magik = magikcraft.io;

function recall(name = "default.place"){
    const there = magik.memento.getItem(name);
    magik.dixit("Recalling:" + name);
    if(there) {
        magik.dixit(there.toString());
    } else {
        magik.dixit("No memory to recall");
    }
}