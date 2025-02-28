const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU05Q3JBdVRCd3JIWVYxbnJEbWF6YjQ4aFNjY2JZZDVneXovWFR3UGFHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG03eFZqZm5tbGszQ1RRUWJTV0V1bnBCWmRCWWdiS1JWMWkzWjRWR01rOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQlFHaEZYN2NuQWFSUWthUXlKYk1TOVRkeGFJRDdNcmU4eDdDWWZ6SG4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dW5pMnJZU3VNd25qQXg4Y1ZwcEdaL013VlRmaTJFOXUzRzRrV2FQZlFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLNXVSam1hTk4zd3o0NGpjOUFyNlRKdm56RWpKVS8rUy9lTk1hMzZGVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR2WmZtWUFhdmJHQmhhSFM2T2N3VkNtRVVmZDFRMnBiZ1R6UEo2K1k5WFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpPanNKRFNaM21XTlkvc0RZeVhmRU01ZGtEZUhGU1RCaHl3dUU1M1FYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkdNVC9xWXVKa3lFWW9CZTQxeEJLV05wVHZmMWVFRjhsOHcxQjhuVExSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRvbWp0UHc2ZmFBN2laZ2FKZTUrcU9nQmcvRTB6d2ExT1kzZEJDdlhBY3hpUFBzYkRoTWhnck96bjAzOGl3TWV2RU0xZHZHRGhkNmRmc0hlUTNoWmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiIwdzNZQ3FyS0kyTEZpY2RtZzVCL1JZV3lRWGxnUEZGYkduZzQ3WlhYQ2tzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNKZkNpZXNDRUthZ21Mc0dHQ3NnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFRGtIMW9zSWl2YnM3WWNUa29UbjZGQjRYY0tGYWV2VnFUQnYzQkJ0alVJPSIsImFjY291bnRTaWduYXR1cmUiOiJQMGpkaW05R3p6UzhOWXdXQ3FwTnZ6YXRTYlNsTUdZRlU0MjdUeUU2MW9sbjZ5ZzZvMzQrVFpSUG1JYnZPV05Ja29yeXZqU2dDbkJoOE5RZkdadjJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiazRnbmxXZldzSTdYS0phcFZrK01iTGtpNkVjWDJQK1EyNHcrd1RWUFFvM0gvcmhQWjlCQnhOcWxkN0FlR2REbFJyb0hEZi80YmxtK0loZzVKTVRkZ0E9PSJ9LCJtZSI6eyJpZCI6IjIzNzY5NjkwMDYxMjo3NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZm38J2aivCdmpfwnZqcIPCdmoPwnZqO8J2ajPCdmpEg4oCgIiwibGlkIjoiMTIxNjU1Mzg0ODY2ODY4Ojc1QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTY5MDA2MTI6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkE1QjlhTENJcjI3TzJIRTVLRTUraFFlRjNDaFducjFha3diOXdRYlkxQyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NzQyMDY4LCJsYXN0UHJvcEhhc2giOiJJWG9EcCJ9",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Lh6602b/Manul-Ofc-X.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR IM ONLINE I'M KERM-MD-V1 WHATSAPP BOT\n\n> 𝖡𝖸 𝖪𝖦𝖳𝖤𝖢𝖧",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩1』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
