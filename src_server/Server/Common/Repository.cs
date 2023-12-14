using GTANetworkAPI;
using Server.Players;
using System.Collections.Generic;

namespace Server.Common
{
    internal class Repository
    {
        public static IDictionary<Player, PlayerStatus> Players { get; } = new Dictionary<Player, PlayerStatus>();

        public static IEnumerable<IUsable> UsableObjects { get; } = new List<IUsable>();
    }
}
