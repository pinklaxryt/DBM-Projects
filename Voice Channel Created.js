{
  "name": "v-channel-created",
  "temp": "channelcreated",
  "event-type": "14",
  "_id": "YOeFC",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled1",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "isenabled",
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
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "vcc_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "vcc_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "logcount",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "3",
      "varName": "channelcreated",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelcreated",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelcreated",
      "info": "4",
      "storage": "1",
      "varName2": "limit",
      "name": "Store Voice Channel Info"
    },
    {
      "title": "Voice Channel Created",
      "author": "",
      "color": "#20fc3a",
      "timestamp": "true",
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
      "fieldName": "Name",
      "message": "${tempVars(\"name\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "limit",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Limit",
      "message": "${tempVars(\"limit\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Limit",
      "message": "No Limit Set",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "ID : ${tempVars(\"id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "vcc_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "vcc_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "vcc_system",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    }
  ]
}