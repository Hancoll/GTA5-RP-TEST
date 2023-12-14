const PLANT_SEED_REMOTE_EVENT = "CLIENT:SERVER::CLIENT_PLANT_SEED";

export function plantSeed() {
    mp.events.callRemote(PLANT_SEED_REMOTE_EVENT); 
}