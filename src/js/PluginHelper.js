import PluginDispatcher from "./PluginDispatcher";
import PluginEvents from "./PluginEvents";

var PluginHelper = {
  callAction: function (action, data) {
    PluginDispatcher.dispatch({
      actionType: action,
      data: data
    });
  },

  injectComponent: function (component, placeId) {
    PluginDispatcher.dispatch({
      eventType: PluginEvents.INJECT_COMPONENT,
      placeId: placeId,
      component: component
    });
  },

  registerMe: function () {
    PluginDispatcher.dispatch({
      eventType: PluginEvents.STARTUP_COMPLETE
    });
  }
};

export default PluginHelper;
