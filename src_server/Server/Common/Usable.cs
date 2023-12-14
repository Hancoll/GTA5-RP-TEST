using GTANetworkAPI;
using System;
using System.Collections.Generic;
using System.Text;

namespace Server.Common
{
    internal abstract class Usable : IUsable, IEntityComponent
    {
        public static string ComponentName => nameof(Usable);

        public abstract void Use(Player player);
    }
}
