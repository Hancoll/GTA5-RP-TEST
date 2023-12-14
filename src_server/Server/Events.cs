using GTANetworkAPI;
using Server.Players;

namespace Server
{
    internal class Events : Script
    {
        [ServerEvent(Event.PlayerConnected)] 
        public void OnPlayerConnected(Player player)
        {
            var players = Common.Repository.Players;
             
            if (!players.TryGetValue(player, out var _))
                players.Add(player, new PlayerStatus());
        }
    }
}
