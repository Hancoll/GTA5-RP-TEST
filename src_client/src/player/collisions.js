const ENTER_COLSHAPE_REMOTE_EVENT = "CLIENT:SERVER::CLIENT_ENTER_COLSHAPE";
const EXIT_COLSHAPE_REMOTE_EVENT = "CLIENT:SERVER::CLIENT_EXIT_COLSHAPE";

mp.events.add("playerEnterColshape", (player, colShape) => {
    mp.events.callRemote(ENTER_COLSHAPE_REMOTE_EVENT, player, colShape); 
});

mp.events.add("playerExitColshape", (player, colShape) => {
    mp.events.callRemote(EXIT_COLSHAPE_REMOTE_EVENT, player, colShape); 
});