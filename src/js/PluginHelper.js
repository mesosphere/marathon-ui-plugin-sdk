import PluginDispatcher from "./PluginDispatcher";

var PluginHelper = {
  callAction: function (action, data) {
    PluginDispatcher.dispatch({
      actionType: action,
      data: data
    });
  },

  injectComponent: function (component, placeId) {
    PluginDispatcher.dispatch({
      eventType: "INJECT_COMPONENT",
      placeId: placeId,
      component: component
    });
  },

  registerMe: function () {
    PluginDispatcher.dispatch({
      eventType: "STARTUP_COMPLETE"
    });
  }
};

export default PluginHelper;
