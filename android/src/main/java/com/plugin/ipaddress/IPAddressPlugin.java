package com.plugin.ipaddress;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "IPAddress")
public class IPAddressPlugin extends Plugin {

    private IPAddress implementation = new IPAddress();
}
