// Copyright notice:

/*--------------------------------------------------------------------------------------------- 
* Original work: Copyright (c) 2023-2024 Veljko Vuckovic @Refloow.com All rights reserved.

* Code origin: /
* Developer name: Veljko Vuckovic
* Licensed under the MIT License. See LICENSE in the project root for license information.
* Published License: LICENSE.MD file

* Contact information:
  Discord Support Server: https://discord.gg/D8WCtDD
  Main developer steam: https://steamcommunity.com/id/MajokingGames/ 
  
 --------------------------------------------------------------------------------------------*/

 /* 

// legal advice: PERMISSIONS AND RIGHTS

* License does not prohibit modification, distribution, private/commercial use or sale of copies as long as the original LICENSE file
 and authors copyright notice are left as they are in the project files.
* Copyright notice could be included ones or multiple times within the file.
* Copyright notice should not be removed even within the larger works (Larger modifications applied).
* Original file tags cannot be removed without creators exclusive permission.
* Adding own tags in files is possible in case of modification - even in that case original tags must be kept.
* Year on the copyright notice breakdown:
* Generally, the “year of first publication of the work” refers to the year in which the work was first distributed to the public (first year mentioned)
* Any year after represents the year of added modifications.
* Copyright cannot expire so therefore you cannot remove copyright notice if its not updated to the latest year.
* Editing existing copyright notice(s) is also prohibited.

===================================================================================
Removing copyright notice & distributing, using or selling the software without
the original license and copyright notice is licence agreement breach and its considered criminal offense and piracy.
===================================================================================

*/
	



// Checking if all modules are correctly installed

try {
    // Checking if required modules were correctly installed
    colors = require('colors');
    // Checking if module steam-user is correctly installed
    SteamUser = require("steam-user");
    // Checking if module steam-totp is correctly installed
    SteamTotp = require("steam-totp");
    // Checking if module steam-tradeoffer-manager is correctly installed
    TradeOfferManager = require("steam-tradeoffer-manager");
    // Checking if module steamcommunity is correctly installed 
    SteamCommunity = require("steamcommunity");
  
  } catch (ex) {
    // If modules are not installed showing an clear error message to user.
    console.log(`\n\n\n| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install. (run install.bat file) \n\n\n`);
    console.log(ex);
    process.exit(1);
  }

    // Basic display information on app start
    
    // ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    /////////////////////////////////////////////////////////////////////
    
    // COPYRIGHT NOTICE. DO NOT EDIT & REMOVE
    //  ONES AGAIN:
    
    //       Removing copyright notice & distributing, using or selling the software without
    // the original license and notice above is license agreement breach and its considered criminal offense.
    
      console.log(`\n\n                    (((((((                `.cyan);
      console.log(`                 (((((((((((((((              `.cyan);
      console.log(`              ((((((((((((((((((((((.           `.cyan);
      console.log(`          ((((((((((.        ((((((((((((       8888888b.          .d888888                              `.cyan);
      console.log(`        (((((((((    ,((((((    ((((((((((      888   Y88b        d88P" 888                              `.cyan);
      console.log(`        (((((((((((   ((((((((   (((((((((      888    888        888   888                              `.cyan);
      console.log(`        (((((((((((   (((((    /((((((((((      888   d88P .d88b. 888888888 .d88b.  .d88b. 888  888  888`.cyan);
      console.log(`        ((((((((((.  (      ((((((((((((((      8888888P" d8P  Y8b888   888d88""88bd88""88b888  888  888`.cyan);
      console.log(`        ((((((((((   %%%%%     (((((((((((      888 T88b  88888888888   888888  888888  888888  888  888`.cyan)
      console.log(`        (((((((%%%   %%%%%%%%*     (((((((      888  T88b Y8b.    888   888Y88..88PY88..88PY88b 888 d88P`.cyan)
      console.log(`        (((#%%%%%%%  %%%%%%%%%%%%   %%%(((      888   T88b "Y8888 888   888 "Y88P"  "Y88P"  "Y8888888P"`.cyan)
      console.log(`        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.       888   T88b "Y8888 888   888 "Y88P"  "Y88P"  "Y8888888P"`.cyan)
      console.log(`            %%%%%%%%%%%%%%%%%%%%%%%%%           `.cyan)
      console.log(`                 %%%%%%%%%%%%%%%%               `.cyan)
      console.log(`                     %%%%%%%%                   \n` .cyan)                             
      console.log(
        "                               ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀".red
      );                             
    console.log('        This software has been developed by Veljko Vuckovic at - Refloow and published for free at GitHub.org'.cyan);
    console.log('                           Code origin: https://github.com/Refloow/Steam-Script-Auth' .yellow);
    console.log('                        Original work: Copyright (c) 2023-2024 (Refloow.com) All rights reserved. ' .green);
    console.log('      Official version of the software is FREE discord server for support: https://discord.gg/XZtwJ4WW6T');
      console.log(
        "                               ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n".red);
      console.log(
        "                      Removing copyright notice above & distributing, using or selling the software without \n           the original license and notice above is licence agreement breach and its considered criminal offense.\n"
          .yellow
      );
      console.log(
        "All confirmed trades will be will be accepted in authenticator after next 15 secounds \n(close to cancel this action before 15 sec pass)\n"
      );
    /////////////////////////////////////////////////////////////////////
    // ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀


// Setting a timeout for login, this ensures that app waits 15 sec before starting 
//(in case of abrupt close and running again while new code is not generated by the time authenticator will result in rate limit by steam)
// This ensures a fresh code to authorize the app is always available on start
setTimeout(resume, 15000);

// Setting a timeout after which app whill call the function close which will close the app (makes it a bit more user friendly)
setTimeout(close, 40000);

// This is a simple function that closes the app
function close() {
  process.exit();
}

// Importing config
let CONFIG = require("../!authenticator/SETTINGS/config.js")

// Defining name of the client variable for SteamUser which is a library module thats imported
// Defining name of the manager variable for TradeOfferManager which is a library module thats imported
// Defining name of the community variable for SteamCommunity which is a library module thats imported
let refloow = new SteamUser(),
manager = new TradeOfferManager({
    "steam": refloow,
    "language": "en",
    "pollInterval": "10000",
    "cancelTime": "7200000" // 2 hours in ms
}),
community = new SteamCommunity();


// This is rest of the code wrapped in a function which is done to ensure its not run before the timer of 15 sec to ensure the login code exists
function resume() {
    // Login is in function for a relog if needed, but its not implemented here
    function logon() {
    refloow.logOn({
        accountName: CONFIG.USERNAME,
        password: CONFIG.PASSWORD,
        twoFactorCode: SteamTotp.getAuthCode(CONFIG.SHAREDSECRET),
    });
    }

    // Calling the login event
    logon();

    // On login event, prompt the login with the id of the account authenticator is logged on with
    refloow.on("loggedOn", (details, parental) => {
        refloow.getPersonas([refloow.steamID], (personas) => {
            console.log("| [Steam] |: Logged on steam as #" + refloow.steamID + "");
        });
        // Setting status to online (for test, doesnt matter really)
        refloow.setPersona(1);
    });
    }

    // Setting up the web session cookies
    refloow.on("webSession", (sessionID, cookies) => {
        manager.setCookies(cookies, (ERR) => {
            if (ERR) {
                console.log("| [WebSession] |: An error occurred while setting cookies.");
            } else {
                console.log('| [WebSession] |: Websession Created And Cookies Set.');
            }
        community.setCookies(cookies);
        community.startConfirmationChecker(1000, CONFIG.IDENTITYSECRET);
        console.log('| [Authenticator] |: All pending confirmation trades are being accepted...'.green);
        })
    });

    // On event on newConfirmation within the authenticator confirm all trades
    community.on("newConfirmation", (CONF) => {
        console.log("| [Steam] |: New confirmation.");
        community.respondToConfirmation(CONFIG.IDENTITYSECRET, CONF.id, accept, (ERR) => {
            if (ERR) {
                console.log("| [Steam] |: An error occurred while accepting confirmation: " + ERR);
            } else {
                console.log("| [Steam] |: Confirmation accepted.");
            }
        });
});


