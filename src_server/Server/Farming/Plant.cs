using GTANetworkAPI;
using Server.Common;

namespace Server.Farming
{
    internal class Plant : Usable
    {
        private const string PlantingScenario = "WORLD_HUMAN_GARDENER_PLANT";
        private const int PlantingTime = 2000; // 2 sec
        protected readonly Object plantObject;

        public Plant(Object plantObject)
        {
            this.plantObject = plantObject;
        }

        public override void Use(Player player)
        {
            Collect(player);
        }

        protected void Collect(Player player)
        {
            if (Repository.Players[player].InAction)
                return;

            player.PlayScenario(PlantingScenario);
            Repository.Players[player].InAction = true;

            // Выполнить с задержкой
            NAPI.Task.Run(() => {
                player.StopAnimation();
                Repository.Players[player].InAction = false;
                plantObject.Delete();    
            }, PlantingTime);
        }
    }
}
