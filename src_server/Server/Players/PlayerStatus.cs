using Server.Common;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace Server.Players
{
    internal class PlayerStatus
    {
        // Выполняет ли какое либо действие в данный момент
        public bool InAction { get; set; }

        // Список объектов с которыми игрок может в данные момент взаимодействовать
        public List<IUsable> InteractObjects { get; } = new List<IUsable>();
    }
}
