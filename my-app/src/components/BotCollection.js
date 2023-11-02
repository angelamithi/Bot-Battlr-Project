import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botData, addBotToArmy }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {botData.map((bot) => (
          <BotCard key={bot.id} bot={bot} addBotToArmy={addBotToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
