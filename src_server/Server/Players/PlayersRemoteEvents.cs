using GTANetworkAPI;
using Server.Common;

namespace Server.Players
{
    internal class PlayersRemoteEvents : Script
    {
        [RemoteEvent("CLIENT:SERVER::CLIENT_ENTER_COLSHAPE")]
        public void OnClientEnterColshape(Player player, ColShape colShape)
        {
            var usable = colShape.GetData<IUsable>(Usable.ComponentName);

            if (usable is null)
                return;

            if (Repository.Players[player].InteractObjects.Contains(usable))
                return;

            Repository.Players[player].InteractObjects.Add(usable);
        }

        [RemoteEvent("CLIENT:SERVER::CLIENT_EXIT_COLSHAPE")]
        public void OnClientExitColshape(Player player, ColShape colShape)
        {
            var usable = colShape.GetData<IUsable>(Usable.ComponentName);

            if (usable is null)
                return;

            if (!Repository.Players[player].InteractObjects.Contains(usable))
                return;

            Repository.Players[player].InteractObjects.Remove(usable);
        }

        [RemoteEvent("CLIENT:SERVER::CLIENT_INTERACT")]
        public void OnClientInteract(Player player)
        {
            if (Repository.Players[player].InteractObjects.Count == 0)
                return;

            var firstElement = 0;
            var interactObject = Repository.Players[player].InteractObjects[firstElement];
            Repository.Players[player].InteractObjects.RemoveAt(firstElement);

            interactObject.Use(player);
        }
    }
}
