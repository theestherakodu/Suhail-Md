const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349061141421";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_35_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDg2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiajVvR3dOQUNIQVh2TEFiSWtVVkh1SVFSVTVyQnk5MytESysrVnZ4RnU5QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNDdwaHg1ZmVTd21qNVp6VkRnajJJd1wiLFxuICBcInBob25lSWRcIjogXCI2YTUwZGJjYS0yMmY4LTRjYjMtOWIwNi01MTEwZmYxZGZjYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgOTgsXG4gICAgICAxNzEsXG4gICAgICA0OSxcbiAgICAgIDQ4LFxuICAgICAgNzgsXG4gICAgICAxMTEsXG4gICAgICAxMDYsXG4gICAgICAxNTAsXG4gICAgICA4MyxcbiAgICAgIDEzNixcbiAgICAgIDE0LFxuICAgICAgNzcsXG4gICAgICAyMDcsXG4gICAgICAyMDAsXG4gICAgICAyNixcbiAgICAgIDExMSxcbiAgICAgIDcsXG4gICAgICA4MyxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMTI2LFxuICAgICAgMTE1LFxuICAgICAgMTcyLFxuICAgICAgMTA0LFxuICAgICAgMTkzLFxuICAgICAgMTQsXG4gICAgICAyMyxcbiAgICAgIDE4NSxcbiAgICAgIDI1LFxuICAgICAgNjcsXG4gICAgICAyMSxcbiAgICAgIDY5LFxuICAgICAgMTIyLFxuICAgICAgMTU1LFxuICAgICAgMTM2LFxuICAgICAgOTQsXG4gICAgICAyNDYsXG4gICAgICAyNDksXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0srRjI0WURFT3IzckxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS0JCU2U1eU9ZRWZrREVQMUxBS2QvVi9rdVVzdCtNUTNvOU52djdOemwxVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzbDZYZHJsdmFKV0VNYnFHdzhaTmlmYnJTU0tZNGVhS3Q3bW15MisvOXppQjFMOWhFS29JY2t5Q1crSTkwUFNrb0VFS1VrSHoyaVFXUWRMOWZZV21DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLbHF1TkZIcThyZkgzRUlVUTJBVCtUNXZWOHFLWXVZaVRscHcyRGR4U1BzSEdzdi93THhJTitGQXRYdTZJUWg5SUl4OGRIbHhuQ1pmRzM3SXE4ZmZpdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjExNDE0MjE6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGVlc3RoZXJha29kdVwiLFxuICAgIFwibGlkXCI6IFwiNjQ1MzYyNjI1MjQ5OTY6MThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYxMTQxNDIxOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzAzNzI2XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
