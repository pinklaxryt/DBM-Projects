{
  "name": "togglelog",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "nrrth",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "type",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "vchannel_created",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled1",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis1",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled1",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled1",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled1",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "vchannel_deleted",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled2",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis2",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled2",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled2",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled2",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "role_update",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled3",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis3",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled3",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled3",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled3",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "role_created",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled11",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis11",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled11",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled11",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled11",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "role_deleted",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled12",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis12",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled12",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled12",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled12",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "channel_created",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled4",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis4",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled4",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled4",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled4",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "channel_deleted",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled5",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis5",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled5",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled5",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled5",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "channel_updated",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled6",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis6",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled6",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled6",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled6",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "member_join",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled7",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis7",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled7",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled7",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled7",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "member_leave",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled8",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis8",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled8",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled8",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled8",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "msg_delete",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled9",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis9",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled9",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled9",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled9",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "msg_edit",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled10",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "enabledis10",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled10",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled10",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully disabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled10",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Successfully enabled **${tempVars(\"type\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": ":x: Invalid parameter.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Valid Parameters",
      "message": "vchannel_created\nvchannel_deleted\nrole_update\nrole_created\nrole_deleted\nchannel_created\nchannel_deleted\nchannel_updated\nmember_join\nmember_leave\nmsg_delete\nmsg_edit\nALL\n",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ]
}