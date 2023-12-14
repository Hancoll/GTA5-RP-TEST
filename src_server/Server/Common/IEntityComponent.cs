using System;
using System.Collections.Generic;
using System.Text;

namespace Server.Common
{
    internal interface IEntityComponent
    {
        static string ComponentName { get; }
    }
}
