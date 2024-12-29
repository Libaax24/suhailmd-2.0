const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_42_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwLFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS0MwazhuaUFrMWd1SkFVV0FVRlVhQ0d5T2hJNXBlTGd4QktrOER6aC9MQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidHlObWYzd0ZSVFNJSEVuLUU2REVpZ1wiLFxuICBcInBob25lSWRcIjogXCI4YTA3ODg4Yy04MWQ5LTRjMzQtYmUzMS1hNjk3MDIwZWVkMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAyMzIsXG4gICAgICAxODYsXG4gICAgICAyMTQsXG4gICAgICAxODEsXG4gICAgICAxNDcsXG4gICAgICAxMDMsXG4gICAgICA1NCxcbiAgICAgIDE2OSxcbiAgICAgIDgyLFxuICAgICAgMTg2LFxuICAgICAgMTA3LFxuICAgICAgOTgsXG4gICAgICAxODQsXG4gICAgICAyNDYsXG4gICAgICAxOTUsXG4gICAgICAxODksXG4gICAgICAxODcsXG4gICAgICA5OSxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDIzOCxcbiAgICAgIDIyMixcbiAgICAgIDEwNCxcbiAgICAgIDkyLFxuICAgICAgMjA0LFxuICAgICAgNjcsXG4gICAgICAxODAsXG4gICAgICAyOCxcbiAgICAgIDIzNyxcbiAgICAgIDI1LFxuICAgICAgMjE5LFxuICAgICAgMTM0LFxuICAgICAgMTQsXG4gICAgICAxNzcsXG4gICAgICAxMTksXG4gICAgICA5MyxcbiAgICAgIDEyNixcbiAgICAgIDQ0LFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktKSDREQUhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODQ0MDQzNDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA5OTM4NzQ3Njc0ODc3OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEQzd1lZQ0VQcVR4cnNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEcUwxRVViY0puVnNBbFkzR29na0RrM0JOYW9XWkwxTFVmajZuQk1PK0ZrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjc5VG9aTHN1ekJtTlVhdlRLdjB6aDRpRnduUE1maFNWLzhiVDU5ekVvMDF5b0RHNGlQeTlMWWdZbVZOa1NGSk5YU0dVTnJ0b0lBeCsrYmlzYlhYTkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFFd3l4QWdQRGVoL1A0aEk3c1hOVEJKMmIrMTJsZWdNV2xWVVZCdjh5V29FVGd2UzVyOHFEMmQ1bWJ1RkNZVExra0ZOeUVuWnVkdTFiN25RKzdBTkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY4NDQwNDM0OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0OTQxNDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDWmdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNaZy5qc29uIjogIntcImtleURhdGFcIjpcIndUcjdNdHVhTzZLSncrN2JEMDdwR0pySGIvZmV5TkpQMUY0UDRCdHIrcFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTUwNTM0MTI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU0OTA3NTYyNjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
