import { plantSeed } from '../farming/planting'

const INTERACT_KEY = 0x45; // E key
const USE_ITEM_KEY = 0x47; // G key
const INTERACT_REMOTE_EVENT = "CLIENT:SERVER::CLIENT_INTERACT";

mp.keys.bind(USE_ITEM_KEY, true, () => {
    // test
    plantSeed();
});

mp.keys.bind(INTERACT_KEY, true, () => {
    mp.events.callRemote(INTERACT_REMOTE_EVENT); 
});