const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256762612066";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_05_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI3LFxuICAgICAgICA0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgxLFxuICAgICAgICA0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICA4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZUpYeDNXQ1VtUU9HU3JGL2N1bllTUWRSQTdpaHVxaFUxQ2NESHAvL3oybz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRWtJcGhKOEpUUkc0YTBpQm9ucGV2d1wiLFxuICBcInBob25lSWRcIjogXCI3ZDRiZjJmOS1hM2RhLTQxZDctOTI2ZC1iYTEyMjc1YzFkYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMjAsXG4gICAgICAyMjgsXG4gICAgICAyMDksXG4gICAgICAzMixcbiAgICAgIDg0LFxuICAgICAgMTYwLFxuICAgICAgMjIxLFxuICAgICAgMTAsXG4gICAgICA2NixcbiAgICAgIDE5MSxcbiAgICAgIDMwLFxuICAgICAgMjIyLFxuICAgICAgNCxcbiAgICAgIDEwMSxcbiAgICAgIDExNyxcbiAgICAgIDQ1LFxuICAgICAgMTQ4LFxuICAgICAgNjEsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDIyMixcbiAgICAgIDI0OSxcbiAgICAgIDIxMixcbiAgICAgIDE3OSxcbiAgICAgIDE5NyxcbiAgICAgIDE1LFxuICAgICAgNTQsXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAxNjYsXG4gICAgICA4LFxuICAgICAgMTEwLFxuICAgICAgMTQ4LFxuICAgICAgMTgwLFxuICAgICAgMTgyLFxuICAgICAgMjAxLFxuICAgICAgMjUyLFxuICAgICAgMTk5LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUZLSllXU0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc2MjYxMjA2Njo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIs6UypnhtI/Kj/CdlobwnZaR8J2WlPCdlpPwnZaK8J2XmfCdl7zwnZe/8J2XsvCdmIPwnZey8J2Xv+KIh1wiLFxuICAgIFwibGlkXCI6IFwiMjM5MjQ3MjQ0MTgxNTY5Ojg1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xPZTNQTUVFSWIydHNBR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZU53ZmM1YTF4Uy9zWks4L3lNSW5PR1Y4ZjVtcUlBbFB3dVFYekZuN01oWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzRUxUT3ZVK2NaYStFUFRqck5DbUZWMmxnbjBXMjA4NHhtUVJicHdZZXo4N3BqQmh2Tm1CSnplSGZSWGxqNkZscFBjN1BFaEsyVmhJc2U2RWM5K0xDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4TXdZSTBZNXdmUkRaOFdsWWt4NGRoYXBhMkk4OUtzeGhkOXZCY2E0QmZlbTZlTEM4MkE1UlcveU1KQ0g1NzhFMVVRZ2x2UnpPWUx0aUVXY1BUbmRCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NjI2MTIwNjY6ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTczMDMyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpCb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkJvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmVLWFBoWG1iVzVJTTA3bUxtMHNWSHZPcWNpV0E0VVpHYnMxdVdhV3JSUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE2NDI1NTIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ0ODEwOTU5MDk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
