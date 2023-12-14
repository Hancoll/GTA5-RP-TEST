using GTANetworkAPI;
using Server.Common;
using System.Drawing;

namespace Server.Farming
{
    internal class FarmingRemoteEvents : Script
    {
        private const string PlantingScenario = "WORLD_HUMAN_GARDENER_PLANT";
        private const int PlantingTime = 2000; // 2 sec
        private const int TimeToGrowUp = 5000; // 5 sec
        private const uint WeedObject = 452618762;

        [RemoteEvent("CLIENT:SERVER::CLIENT_PLANT_SEED")]
        public void OnClientPlantSeed(Player player)
        {
            if (Repository.Players[player].InAction)
                return;

            player.PlayScenario(PlantingScenario);
            Repository.Players[player].InAction = true;

            // Выполнить с задержкой
            NAPI.Task.Run(() => {
                player.StopAnimation();
                Repository.Players[player].InAction = false;

                var weedPosition = player.Position + new Vector3(0, 0.25, -1);
                var weedRotation = player.Rotation;

                NAPI.Task.Run(() =>
                {
                    var weed = NAPI.Object.CreateObject(WeedObject, weedPosition, weedRotation, dimension: NAPI.GlobalDimension);
                    var collider = NAPI.ColShape.CreateCylinderColShape(weedPosition, 1, 2);
                    IUsable plant = new Plant(weed);

                    collider.SetData(Usable.ComponentName, plant);
                }, TimeToGrowUp);
            }, PlantingTime);
        }
    }
}
