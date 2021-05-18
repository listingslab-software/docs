Hello,
 
Identify works properly and it returns the relevant channel, depending in which network the user is (mobile or wifi) and also there is a check on user_agent. It may therefore happen that a user in mobile network which has a non mobile user agent, is returned as wifi user.
 
If API action „identify” returns in the callback….
channel = wap -> means the user is in mobile network (3g/4g/etc…) and uses a mobile device. With this you should also receive user’s operator, IP and Alias. Note that in Germany MSISDN is usually not provided during identify.
channel = web -> means the user is in Wifi/on desktop. In such case there is no operator and no Alias.
In both cases there will be a transaction id (in xml path /result/transactions/transaction/).
 
In case of channel wap, you continue regularly with API action “start-subscription” and reference on the previous “identify” by re-using the previously retrieved transaction id in parameter ‘transaction’. If you do not re-use the transaction id, Dimoco will do another identify, which may lead to longer loading times.
A redirect will be required and the user will experience the mobile network flow on the MNO’s payment pages, which is not limited to a click flow *.
 
In case of channel web, you display an MSISDN entry field. The user enters the mobile phone number you do action “operator-lookup” in order to detect the user’s operator** (in the callback xml path /result/customer/operator). If you have a valid operator (DE_O2 or DE_VODAFONE), you continue with API action “start-subscription” by adding parameter msisdn={user’s mobile phone number} and the operator (if previously detected). The User's MSISDN must be formatted as defined by ITU-T E.164 ( = international format without leading + or 0).
A redirect will be required as well and the user will experience the wifi flow, which is usually the TAN flow.
 
*Please bear in mind, that the opt-in flow in Germany, which the user will experience in mobile network, strongly depends on the MNO’s settings. Means, although the user is in 3G/4G/5G/etc…, he/she still might see a TAN flow.
For DE_O2 in both cases (web and wap) the user sees a TAN flow by default and has to solve a simple math exercise. In case of mobile network there is no MSISDN entry.
For DE_VODAFONE users the opt-in flow is adjusted dynamically, depending on the user’s purchase history and google recapcha rating and the user’s device, so it may vary between a pure CLICK flow and TAN flow (with or without MSISDN entry page).
 
**operator lookup can be omitted on your side and DIMOCO will do it automatically during “start-subscription”.
If you do OL on your own, you may know the user’s operator before attempting the subscription and you can exit the user at this point already.
If you omit it, you will receive the user’s operator in the final “start-subscription” callback, hence a subscription attempt may fail entirely, if the user has an invalid operator or any operator for which the service is not setup.
You may need to consider this in your signup logic.
Note: OL may cause costs, which are defined on the signed pricelist as “HLR Lookup”. If you do the operator lookup yourself, please actually use the returned operator to avoid double OLs (double costs). I don’t have any insight what was signed/agreed on and you may check with GoMobee – sometimes HLR lookup is signed with no fee at all.
 
BR
P
 
Von: Poljanec, Tilen <Tilen.Poljanec@dimoco.eu> 
Gesendet: Mittwoch, 12. Mai 2021 12:55
An: Subocz, Philipp <Philipp.Subocz@dimoco.eu>
Betreff: FW: Identify Response for DE
 
Forwarded :D
 
Tilen POLJANEC
Service Implementation Manager
Service Delivery
01_Email SIgnatures_v3_96dpi
DIMOCO Carrier Billing GmbH
Europaring F15/302, A-2345 Brunn / Vienna, Austria
P: +43/1/33 66 888-2049, M: +43/664-969 9049   
E:: t.poljanec@dimoco.eu
Upcoming events  |  Blog  |  Twitter  |  LinkedIn
01_Email SIgnatures_v3_96 dpi
 
From: Barney Grossman <barney@advicator.com> 
Sent: 11 May 2021 14:11
To: Poljanec, Tilen <Tilen.Poljanec@dimoco.eu>
Cc: Chris Advicator <chris@advicator.com>; Maracic, Veljko <Veljko.Maracic@dimoco.eu>
Subject: Identify Response for DE
 
Hi Tilen,
 
How are you? 
 
When we re-integrated DE for GoMoBee, it was only needed to serve the click flow landing page as wifi wasn't an option, which was fine as the Dimoco Identify response was incorrectly displaying WEB or WAP for Data or Wifi (sorry, I forget which way around the issue was). However now GoMoBee is ready for wifi they require logic to either show MSISDN entry (for WEB) or Button to click (for WAP), which means we'll need to get the Identify response correctly so we can serve the correct version of the page. 
 
Would you be able to have a look into this to confirm? I'm on skype if you want to go through it so we can help get them live quickly
 
If you need GoMoBee URLs we have http://gaming.gstorehub.com/hpd7clzf  and http://apps.gstore.me/hxn5n0jf (note that the MSISDN won't show until we've got the identify confirmed as fixed then we build the logic our side) 

Thanks,
Barney Grossman
Chief Geek - Advicator
 
Image removed by sender.