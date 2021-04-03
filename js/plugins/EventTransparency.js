var Ciart = Ciart || {};
Ciart.ET = Ciart.ET || {};

Ciart.ET.Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function (mapId, eventId) {
  Ciart.ET.Game_Event_initialize.call(this, mapId, eventId);

  if (this.event().meta.transparent) {
    console.log('asds');
    this.setTransparent(true);
  }
};
