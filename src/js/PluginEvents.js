import Util from "./Util";

const PluginEvents = Util.objectCreateWithAdder("PLUGIN_EVENTS_");

["APPS_STORE_CHANGE"].forEach(PluginEvents.add);

export default PluginEvents;
