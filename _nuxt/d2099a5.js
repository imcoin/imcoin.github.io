(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8,15],{713:function(t,e,n){"use strict";n.r(e),e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""}},watch:{market:function(t){this.marketInfo=t}}}},714:function(t,e,n){"use strict";n.r(e);n(227);var o={ZIL:"https://file.coinex.com/2018-07-21/5FA63FE7BF734E99AE71D29F1DC0C0BE.png",BAL:"https://file.coinex.com/2020-07-29/5DA962F54C054BD3A9E51F6C460EF4D8.png",BCHN:"https://file.coinex.com/2020-09-23/43234D679AEA97CD9B019671E60DAD91.png","1INCH":"https://file.coinex.com/2020-12-25/A57C7382A9FA12869E6671CC85608FAB.jpeg",AAVE:"https://file.coinex.com/2020-10-19/D81D6A34A18D7151583E106AFF7A0C05.png",ACM:"https://file.coinex.com/2019-11-17/E06AF293C4224839972A854C16E5A229.png",ADA:"https://file.coinex.com/2018-07-14/1AB5EC764F474AE982D14D947AC4E4DE.png",AE:"https://file.coinex.com/2019-08-19/003BC7FE473147329E86E4CF9C9D1D31.png",ALGO:"https://file.coinex.com/2019-06-18/E57D2FF961294B48907590030BF7667E.png",ANT:"https://file.coinex.com/2020-02-17/2FBF6A8AF2B94F6FB96339BA8C740EDB.png",API3:"https://file.coinex.com/2020-12-23/CAB7F6AC5E0E89A20F5B6CA5D896377B.jpeg",ARDR:"https://file.coinex.com/2019-09-02/FFF0D8BD8F974467B738A41B34D22662.png",ARRR:"https://file.coinex.com/2019-10-28/3D3D26DA5B9E48E4AE9177D8FBAB12CB.png",AST:"https://file.coinex.com/2020-07-02/CBC49F6E547E4082872F07C75494203D.png",ATOM:"https://file.coinex.com/2019-05-31/EE3A84D16324446B8EF8DCC1DD8E84BF.png",AUCTION:"https://file.coinex.com/2021-02-25/6DAB1D374024FBACD7AE58E6B6567A4A.jpeg",AVAX:"https://file.coinex.com/2020-09-23/1C8283E74FC3D378CD2D949CB051AC3A.png",AYA:"https://file.coinex.com/2020-05-18/EEA90A88F10846D1BB3E41E8CB8EE2D4.png",BADGER:"https://file.coinex.com/2021-01-28/2310236809D5D450A7A5685E29121CD0.png",BAT:"https://file.coinex.com/2019-03-06/1C7D82876E1C463A84EABADA9EB52C9D.png",BCH:"https://file.coinex.com/2020-11-20/7F1C412915FC1FC9853E7E66497E3158.png",BCHA:"https://file.coinex.com/2020-09-23/3764A4E837CE1BDFD63607FFD38B6F0A.png",BCN:"https://file.coinex.com/2020-04-09/8A694ED47A4E45838778C7CA324F8D02.png",BEAM:"https://file.coinex.com/2020-01-15/CAC72D3056BB4B739C5E25D56296914C.png",BKK:"https://file.coinex.com/2019-12-19/8E375E2A28C64CD2A8B634D976E91FDB.png",BNB:"https://file.coinex.com/2020-02-12/3D542F446285458DA1EDD6A428E4961B.png",BNT:"https://file.coinex.com/2020-06-19/32D387B5830F43D19E0278663AF4D538.png",BOT:"https://file.coinex.com/2020-09-17/8EA25A94FD3E7582A5B197D0BF332B46.jpeg",BSV:"https://file.coinex.com/2019-03-01/FA6BE26B32C247839B2DE1D9A2EAB232.png",BTC:"https://file.coinex.com/2018-07-14/333CC02C095C49E29863F6B6D49E022D.png",BTM:"https://file.coinex.com/2018-07-24/33C74ED9AD7048CC8B046D35305DB637.png",BTS:"https://file.coinex.com/2020-07-14/AA9D98604DF64EC382F43DE751A3F077.png",BTT:"https://file.coinex.com/2019-03-01/DBAB33D233444F0F8699B408AF2132C9.png",BTU:"https://file.coinex.com/2018-10-11/61B3F6DFA9584DDAA760E74B12D6FAD3.png",CAKE:"https://file.coinex.com/2021-02-22/6594D1E8B679F123C7698964A55E1A56.png",CET:"https://file.coinex.com/2018-07-24/CFE4EAD0CC324280AF9972B194A40FE1.png",CFX:"https://file.coinex.com/2020-11-09/E3019681DF7A64B533B33B8767BCED9B.jpeg",CHZ:"https://file.coinex.com/2020-04-23/3E63D2DE942442C791994BEB083A14BA.png",CKB:"https://file.coinex.com/2019-08-12/03034D5D7CA9415982CC4631780580FE.png",CMT:"https://file.coinex.com/2018-07-21/35B24ADBC09E4E48A4624FA7A419D3A8.png",CNN:"https://file.coinex.com/2018-08-13/26209B3C6AED4B4D830D817C375605BA.png",CODY:"https://file.coinex.com/2018-08-01/97974F46456A416E8743E41697764BC1.png",COMBO:"https://file.coinex.com/2021-02-08/BDC31B8B951D5BB43BE8EB1AFEE20468.png",COMP:"https://file.coinex.com/2020-06-29/3FE59F151E1C4856A9A5A674EA4FBDEC.png",COVER:"https://file.coinex.com/2020-12-11/E490CC5B228ED9FD013BDFAEC5FAAEC1.jpeg",CREAM:"https://file.coinex.com/2020-09-17/17240C8BA31DD745D8BF652F93B6A72C.png",CRO:"https://file.coinex.com/2021-02-07/7836A6DFE8C32F8D207A1110015F8C7D.png",CRV:"https://file.coinex.com/2020-08-17/1D5C3991162C4DD78097E44B511582E6.png",CTXC:"https://file.coinex.com/2018-07-22/2832BF5025E04D559A782719CA47E184.png",CVP:"https://file.coinex.com/2021-01-29/9AFC37BE4CB84686DF175FD6B00BFF14.jpeg",DAI:"https://file.coinex.com/2020-03-17/78C03C4ACE214454955A36E848B6CC6F.png",DASH:"https://file.coinex.com/2018-07-24/C8CBFFBD16B5496F9D3CA68180F2CEF2.png",DCR:"https://file.coinex.com/2018-07-21/9E8E277097A64386A90216CDD0E5D13C.png",DERO:"https://file.coinex.com/2019-05-15/70A5A022529F4ED2A739DEE224733720.png",DGB:"https://file.coinex.com/2019-07-25/09522B2CA8654DA48FB212EFE5EE831B.png",DGTX:"https://file.coinex.com/2020-12-04/CD7D4020A0D2D5F86D2AE2ABF2897479.jpeg",DIA:"https://file.coinex.com/2020-09-01/1A4AA6B80A0C5DBF8CA0850F59495617.png",DMD:"https://file.coinex.com/2020-09-11/1B873215C991CE84C2EFC9AC06CE1F36.png",DODO:"https://file.coinex.com/2021-02-23/747A30073A4490CDDA85ADEF45864187.png",DOGE:"https://file.coinex.com/2018-07-21/10388A345CCE4FA6A16E238FD2955029.png",DOT:"https://file.coinex.com/2020-11-12/10C3FFACA7CE77A5E717C5BA087EDE70.jpeg",DXD:"https://file.coinex.com/2020-08-31/FBB1733A74426B0DB4D67A4D4BC90DC0.png",EGT:"https://file.coinex.com/2018-07-14/5E7A9858BC854057B6AE293D13C3534F.png",ELA:"https://file.coinex.com/2019-08-30/3870D826F6A7411B8DFE9DCC583D66F5.png",EMC:"https://file.coinex.com/2020-05-08/11DA0E6446004016A0A0380A8483EB2C.png",ENJ:"https://file.coinex.com/2019-03-06/E8CE23B4F6CB4FF6879391397C5BE055.png",EOS:"https://file.coinex.com/2018-07-23/BABBA667D02E4B639D1AA3FD0D074A12.png",EOSC:"https://file.coinex.com/2019-09-19/F5EBA6897AD84171AC3531D1A6867FDA.png",ERG:"https://file.coinex.com/2020-05-19/78DAB97C3CE2499FA06F7D1CEA93B6B9.png",ETC:"https://file.coinex.com/2018-07-24/FBB037600CB340E18208974F42348D51.png",ETH:"https://file.coinex.com/2018-07-24/6F74A9D735814E1A8AE81163E051B15E.png",FCH:"https://file.coinex.com/2020-02-18/2A20F5C896A441B28C1123962C697DE1.png",FIL:"https://file.coinex.com/2020-10-16/D5510C4CBD02E7DBC9C6EDE48B659693.png",FIRO:"https://file.coinex.com/2018-07-16/1F54B77C36B34E65947773D0FA9EA64A.png",FTT:"https://file.coinex.com/2019-07-29/2791972FC513439B8C0E0A7497FA07F3.png",GAS:"https://file.coinex.com/2019-08-05/DC6B427368DD4A6F957882FE0812C492.png",GEN:"https://file.coinex.com/2020-08-17/2F5C28DA8CFC435EB3A3A00183C16C71.png",GHST:"https://file.coinex.com/2020-12-21/D30F3159F536BAF814321C29F6EECB1A.png",GLM:"https://file.coinex.com/2018-08-13/EAEF95E9F96245B9A7AC1E5E102E48D8.png",GNO:"https://file.coinex.com/2020-07-03/34BB7C486D8444638A231C350DA469CE.png",GRIN:"https://file.coinex.com/2019-06-27/3353B843457D497580BD2682836B3E9D.png",GRT:"https://file.coinex.com/2020-12-19/4D58AC74A82B4A31BFD857237EFAC581.png",GUSD:"https://file.coinex.com/2019-07-11/8C5E51B68621449098299543841A46B9.png",HBAR:"https://file.coinex.com/2020-03-10/12ED36193CE7492B8E80ADD140D559E2.png",HC:"https://file.coinex.com/2018-07-24/B0ADED2CB2154D6A9D009FD7B74C4257.png",HEGIC:"https://file.coinex.com/2020-12-11/C7570F897A3B20C5FAB77C5E10522184.png",HNS:"https://file.coinex.com/2020-03-05/56C6C966E14B4C83883A99B757850887.png",HOT:"https://file.coinex.com/2018-07-14/37AC49070BA64B558ABD6519595AEE9E.png",HT:"https://file.coinex.com/2020-01-08/E1BCBDCE88A2456FA014BC0160596CB2.png",HYDRO:"https://file.coinex.com/2018-07-24/04922A96AC4242ACB7443498A0F903E0.png",ICX:"https://file.coinex.com/2019-07-19/8B6A969A78434C9DBE6B14CFDC1F3E8B.png",IFT:"https://file.coinex.com/2020-09-11/15DC75851630F8DD05330D49D883E3C7.png",INJ:"https://file.coinex.com/2021-01-20/83B81F17E4F312EBAC31EA0AB9A8CF7E.png",IOST:"https://file.coinex.com/2019-08-26/6C1D975319D2424AAFFA317E8828966F.png",IOTA:"https://file.coinex.com/2018-07-14/06655EE27ED14C989A998993D45670B7.png",IRIS:"https://file.coinex.com/2021-01-28/C7794A798130F319A50450B09BD08F39.png",JRT:"https://file.coinex.com/2020-06-24/7ADC36C829484D328F663E5ADACE2171.png",JST:"https://file.coinex.com/2020-08-11/A887AF946F2E449C9FBD8487331BF238.png",KAN:"https://file.coinex.com/2018-07-24/A5166EAA932740C0B60D394BCEA2AAE3.png",KAVA:"https://file.coinex.com/2020-12-21/EAF3175F71CCFEC6270747D18339F3B8.png",KDA:"https://file.coinex.com/2020-01-17/29F5FD155CF541A8AE052A1430EBDBBF.png",KEEP:"https://file.coinex.com/2021-01-22/892D59AE0AE65B8E126856EE9B444837.jpeg",KMD:"https://file.coinex.com/2019-07-18/BD4AB9A1509B48B9A25EB067FC37ED5E.png",KNC:"https://file.coinex.com/2020-02-24/187CF2B8C36B4C48AEB999F1ED9A8C46.png",KP3R:"https://file.coinex.com/2020-12-11/CFF0D522B04C8A29265A354B24AA1382.png",KSM:"https://file.coinex.com/2019-12-25/E9891CFE68164369BEF8FC21FD119DFB.png",KTON:"https://file.coinex.com/2020-09-04/36DF16E81FFA57571D7005C364502367.png",KUN:"https://file.coinex.com/2020-12-04/5D768BF34638A6EAA115EE7FC227B089.png",LAMB:"https://file.coinex.com/2019-04-19/5154E8DB6D394E35B3309C90CCA83E53.png",LBC:"https://file.coinex.com/2019-12-18/5F6B656859664BCA8B065C2C1E5FA095.png",LC:"https://file.coinex.com/2020-04-13/EE57DA4FDED04857B03ED1056A36C3FE.png",LFC:"https://file.coinex.com/2018-07-24/70C221E51D9442DA8F5E01154BC2D47E.png",LINK:"https://file.coinex.com/2019-03-08/15038BD73DDF45D2961E4C2B8193C512.png",LIT:"https://file.coinex.com/2021-02-07/A2E34C42A842705FB73250CDD36F96F4.png",LON:"https://file.coinex.com/2020-12-23/8E3F300AC3117142A376DB535B6DCB65.png",LOOM:"https://file.coinex.com/2018-07-21/FF04B40D2FF449289AFE20A288C47DCD.png",LRC:"https://file.coinex.com/2020-07-01/081193B009F6445FAE5D7AC3CE70CA59.png",LSK:"https://file.coinex.com/2019-07-11/1AA808DBC4C44557A1C726C689346F21.png",LTC:"https://file.coinex.com/2019-02-14/996138392B60400884FE3F1EB2F7C3E5.png",LUNA:"https://file.coinex.com/2020-12-29/70B7FE3A5B19B9B3CE0BE179C64B7A4F.png",MANA:"https://file.coinex.com/2020-03-31/C8C3DBC103A14C7FAC075077FEEE2FA0.png",MASK:"https://file.coinex.com/2021-02-25/B0A11626F1FBB5F4F894F08D48CDCF92.jpeg",MATIC:"https://file.coinex.com/2019-12-25/AAB2CC45603B4E86B09C9588E34344C2.png",MIR:"https://file.coinex.com/2021-02-07/77971170DA6D2595847B0CFE6A2C0E78.png",MKR:"https://file.coinex.com/2019-03-05/D5EE4E02211F4D278AC62C59CAD732B5.png",MLN:"https://file.coinex.com/2020-07-04/349C9C7FC2EB4B8E9F5D5F31C024C9C6.png",NANO:"https://file.coinex.com/2018-07-21/19AA3949A33F4F1EAAD7A5118A15995C.png",NBS:"https://file.coinex.com/2020-10-26/937D74B17BCF878655EC2B039A7F5B9B.jpeg",NEAR:"https://file.coinex.com/2020-12-08/92491F5840B7D0AC5E2B0DFD35CBE051.png",NEO:"https://file.coinex.com/2018-07-14/C55FD4E532BE4C4DBE8FD5C5D3F0E0C4.png",NMC:"https://file.coinex.com/2020-05-06/B59657785F3741319EE8015B76F1F4DB.png",NMR:"https://file.coinex.com/2020-07-17/756BA16D7634411083EAE6E65C926A26.png",NNB:"https://file.coinex.com/2019-04-04/230323A6515E4D598F5D1A324B2D203A.png",NPXS:"https://file.coinex.com/2020-06-09/275A8217771045B5B968E9D16E665967.png",NRG:"https://file.coinex.com/2020-03-19/8D777C10DCEA414EB4F57B6F75E806B9.png",OCEAN:"https://file.coinex.com/2021-01-05/C875DBC93E69C38A28C14F494DD8AB7C.png",OKB:"https://file.coinex.com/2020-01-10/74131D0F7FF14C58B622C32911572F6D.png",OLT:"https://file.coinex.com/2018-07-24/6F8C85DD7CE44C98BF2EC4805AA89FAE.png",OMG:"https://file.coinex.com/2018-07-22/7DFD0FC8C8894A8F9A26E96C77B12D4C.png",ONES:"https://file.coinex.com/2020-09-17/7F9A2D7E47429647FE4FF3ACB297584F.png",ONG:"https://file.coinex.com/2019-04-24/AAB7CCEF9F534BD682D2C487D57612E6.png",ONT:"https://file.coinex.com/2019-03-05/4DB47B44B03943BABFDE944CD961A77C.png",OXT:"https://file.coinex.com/2019-12-15/563EB4C910514CD0925A628B0623C605.png",PAX:"https://file.coinex.com/2019-03-06/1B1AA9BE7B124EA4AFD2D02F3F4F0159.png",PERP:"https://file.coinex.com/2021-02-23/EF11C0FEBC5404A1EF9D8FBD88BE0362.jpeg",PGN:"https://file.coinex.com/2019-11-21/CB820B110C9640F092B7740E5D7577A9.png",PHNX:"https://file.coinex.com/2020-06-28/5B2BB49874B74C3A969D5580154F3875.png",PIVX:"https://file.coinex.com/2020-11-20/29E63AC1A92FCA61DF1CA41DEA58CDBC.png",PNK:"https://file.coinex.com/2020-08-13/BD99D56AB62744A5B1BE3325FF270A13.png",POLS:"https://file.coinex.com/2021-01-28/A292D75192DD56FEE9FF412772AF84FA.png",POWR:"https://file.coinex.com/2020-05-14/04BC5FF7EEC24BE2AB5A2E08A7943335.png",QTUM:"https://file.coinex.com/2018-07-24/94817A519F5D49019BC5F1B1C2E5ACC6.png",RAD:"https://file.coinex.com/2021-02-26/4181E246BB1E05439BC0EE0260745A54.png",REEF:"https://file.coinex.com/2021-02-07/D6C45E8AA1BD6B9BAB20F23BF09BBB77.png",REN:"https://file.coinex.com/2020-06-30/3CC8E84513784BD4A0860139533A2579.png",REP:"https://file.coinex.com/2020-02-05/174CF43E70B44A268F796E63601ED9E6.png",REVV:"https://file.coinex.com/2021-01-28/CC0C9F40F45FE943E95C83CEC522DA33.png",RING:"https://file.coinex.com/2020-09-04/3CAB4A18712DE74683E195F581F0AA3B.jpeg",RSR:"https://file.coinex.com/2020-07-21/6B5F1F002853469D9D1F92097A6B67AC.png",RVN:"https://file.coinex.com/2019-06-13/FAA01A0DD7904420BB6F063C4603C821.png",SAI:"https://file.coinex.com/2019-08-21/25B2C4190D1A41AFB1E5FB45FE52E557.png",SC:"https://file.coinex.com/2018-07-21/AED724A896F04513BEDEC5CAC0583918.png",SCRT:"https://file.coinex.com/2020-12-28/BD6432B8C1F6DE083E92E64B5F9A3681.png",SEELE:"https://file.coinex.com/2020-04-27/43E074256900495383DBCF481A22264E.png",SERO:"https://file.coinex.com/2020-02-27/48B3638B3040461A9AC48B9703892ACD.png",SIMPLE:"https://file.coinex.com/2020-04-29/563B78C934424FFBBD5762F56AB05B07.png",SKL:"https://file.coinex.com/2021-01-14/DDB096905A1011168C997CE048CEF873.png",SNT:"https://file.coinex.com/2020-03-03/B0CD3617517C4E05B2070476C3CADE0E.png",SNX:"https://file.coinex.com/2019-12-23/7456B5FE251B4B07BA0FFADEC465C432.png",SOL:"https://file.coinex.com/2021-02-07/A27F0D27DD81B537A0B28C22AD8B68AA.png",SPICE:"https://file.coinex.com/2019-07-30/B5BBEDECFBA34296B5C9149777F9F5BF.png",SPOK:"https://file.coinex.com/2019-09-16/58438E2163704A5B9EBB8C6688C801D0.png",STAKE:"https://file.coinex.com/2021-02-26/3491858CF3BB491CB47EAEBB30944D84.png",STORJ:"https://file.coinex.com/2020-03-12/29FA28C789344CA7A0A6193E4DA6C8C3.png",STX:"https://file.coinex.com/2021-01-29/3E1EB9300ECC5A73E1833419D0E992E3.png",SUMO:"https://file.coinex.com/2019-12-24/F33ECED79CDA4411A29DB923E3E4DA59.png",SUN:"https://file.coinex.com/2020-09-11/9410F72003E2A15B8B09808615F83D98.png",SUSHI:"https://file.coinex.com/2020-09-03/FBE18C5CD881C55A96B75A010AAD0905.png",SWRV:"https://file.coinex.com/2020-09-11/F783439815F6534C6300AFBB89209BE7.png",SYS:"https://file.coinex.com/2019-07-11/FA92FFD4D737400881D114DE0DA77B6A.png",TCT:"https://file.coinex.com/2018-07-24/BA843FB3895948FFB1429E7ED4130813.png",TORN:"https://file.coinex.com/2021-02-09/137F0AF77E34AED39C2D39F2D0E08EDA.png",TRTL:"https://file.coinex.com/2019-05-27/EA1E222CF93D4A36806CCDBC0309F6D2.png",TRX:"https://file.coinex.com/2020-06-23/6EF50DF26D86441D8CD87D3EE818FE34.png",TUSD:"https://file.coinex.com/2019-03-05/89EBB7EFFF0F4D78AD4BACDA9AD7CCD4.png",ULT:"https://file.coinex.com/2018-10-11/30E75D32B2864B6C9F4384D317530396.png",UMA:"https://file.coinex.com/2020-07-29/C611E73FEA8B4F3E98020A847AB68257.PNG",UNI:"https://file.coinex.com/2020-09-17/5A03D8B4D4977A7812B30DD3723311AB.png",USDC:"https://file.coinex.com/2018-10-11/3EF6B52D65F64B9284202DCC709336F3.png",USDH:"https://file.coinex.com/2019-06-11/C0709BC1B77446409EFE0A843EAB1DB7.png",USDT:"https://file.coinex.com/2018-07-17/A7AC5747219B40B49487F7AE723C8B63.png",VET:"https://file.coinex.com/2018-07-21/D05E3A544E1B48D1BD36AAE67A1FD91C.png",VIAT:"https://file.coinex.com/2019-03-22/2F93C00FC8E04741B1684BC9D7764AFA.png",VSYS:"https://file.coinex.com/2019-09-03/5E7D809636544208806E82ECBBEEDBCB.png",VTHO:"https://file.coinex.com/2019-08-05/9A1347C0DE054426AD1929D31350767C.png",WAVES:"https://file.coinex.com/2019-08-02/0E515D9AB9C3431D8E6D4CD313217D6A.png",WINGS:"https://file.coinex.com/2018-07-24/4ACF9554965E4785A6887C8419DB063A.png",WNXM:"https://file.coinex.com/2020-08-12/8B3B2FDF65A446E99F78606ABC4063DD.PNG",WOO:"https://file.coinex.com/2020-12-08/AAD233F392C7F149E5D87716BBE3F99F.jpeg",XDAG:"https://file.coinex.com/2020-11-27/316FF393D82FB6988FFC63DC59D42EBE.png",XEM:"https://file.coinex.com/2018-07-29/4DA562B309844E81B831F5227DB59F15.png",XLM:"https://file.coinex.com/2018-07-21/83A84DE9A5664256B98A81E24FB08325.png",XMR:"https://file.coinex.com/2018-07-22/C7E49AA26CF74C7AB25E2E446D5E022C.png",XRP:"https://file.coinex.com/2018-07-22/89C65460F5D34029A11615D4EA55E5DA.png",XTZ:"https://file.coinex.com/2018-07-21/541D392AC2234BD6B1F0BB96261CEFA6.png",XVG:"https://file.coinex.com/2019-08-12/E847F9A1F5214540A7DD00D96E96BDEA.png",YFI:"https://file.coinex.com/2020-07-24/CADC0D65663241A28FB71A1FDA27D5B6.png",YFII:"https://file.coinex.com/2020-09-17/7AE7E8EF9D30AA93ED6F0DA21ADF2C9B.png",YUSRA:"https://file.coinex.com/2021-02-01/F508F4F587862DD951273CA868EDF195.jpeg",ZEC:"https://file.coinex.com/2018-07-24/81CA6EC2794A4B479EAE08F005BE260A.png",ZEN:"https://file.coinex.com/2020-02-20/9367D868CFE944E0928B1F428DA20AC9.png",ZER:"https://file.coinex.com/2020-02-25/C1C2BCAB9BDC48D6B01763E33A87D779.png",ZRX:"https://file.coinex.com/2018-07-23/23BD90B422264A658181FF1958D7DAE7.png"},c={props:{url:{type:String,default:""},name:{type:String,default:""}},data:function(){return{src:this.url,loaded:!1,title:this.name,srcSource:o}},computed:{finnalSrc:function(){return this.src||o[this.title]||""}},watch:{name:function(t){this.title=t},url:function(t){this.src=t},finnalSrc:function(t){this.loadImg(t)}},mounted:function(){this.loadImg(this.finnalSrc)},methods:{loadImg:function(t){var e=this,img=new Image;img.onload=function(){e.loaded=!0},img.src=t}}},A=n(123),component=Object(A.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-center overflow-hidden inline-block text-center",class:{"bg-gray-400 shadow-sm rounded-full":!t.loaded}},[t.loaded?n("img",{staticClass:"w-full h-full",attrs:{src:t.finnalSrc}}):n("p",{staticClass:"text-white text-center w-full"},[t._v(t._s(t.title[0]))])])}),[],!1,null,null,null);e.default=component.exports},716:function(t,e,n){var content=n(727);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("cef2a08e",content,!0,{sourceMap:!1})},717:function(t,e,n){"use strict";n.r(e);n(125),n(227),n(107);var o=n(61),c=n(149),A=n(714),C=n(713),E=n(117),D=n(725);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={components:{Logo:A.default},mixins:[C.default],data:function(){return{}},computed:F(F(F({},Object(c.c)(["legal"])),Object(c.b)({assetList:"asset/assetList"})),{},{assetListData:function(){return(this.assetList||[]).map((function(t){return F(F({},t),{},{total:Object(E.a)(t.available)+Object(E.a)(t.frozen)})}))},totalMoney:function(){var t=this,e="0";return(this.assetList||[]).forEach((function(n){e=e.plus(t.$toLegal(Object(E.a)(n.available)+Object(E.a)(n.frozen),n.name))})),e}}),mounted:function(){var t=this;this.$socket.on("asset.update",(function(e){e.params&&e.params[0]&&t.$store.commit("asset/UPDATE_ASSET",e.params[0])}))}};l.methods?Object.assign(l.methods,{$t:function(t){if(!this.$lang&&!D.zh_Hans_CN)return t;var e=D[this.$lang]||D.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):l.methods={$t:function(t){if(!this.$lang&&!D.zh_Hans_CN)return t;var e=D[this.$lang]||D.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var f=l,h=(n(726),n(123)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-account bg-white p-10 flex flex-col px-15"},[n("p",[n("span",[t._v("≈")]),t._v(" "),n("span",{staticClass:"text-16 text-gray-800"},[t._v(t._s(t.totalMoney))]),t._v(" "),n("span",{staticClass:"text-12 text-gray-600"},[t._v(t._s(t.legal))])]),t._v(" "),n("el-table",{staticClass:"w-full h-full",attrs:{data:t.assetListData,height:"100%"}},[n("el-table-column",{attrs:{label:t.$t("币种")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex items-center"},[n("Logo",{key:e.row.name,staticClass:"h-25 w-25 min-w-25",attrs:{name:e.row.name}}),t._v(" "),n("p",{staticClass:"text-14 ml-5"},[t._v(t._s(e.row.name))])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("可用/冻结"),align:"right",sortable:"","sort-by":"total"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[n("p",{staticClass:"text-12"},[t._v(t._s(e.row.available||"0.000"))]),t._v(" "),n("p",{staticClass:"text-12"},[t._v(t._s(e.row.frozen||"0.000"))])])]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(714).default})},725:function(t){t.exports=JSON.parse('{"en_US":{"可用/冻结":"可用/冻结","币种":"币种"},"zh_Hans_CN":{"可用/冻结":"可用/冻结","币种":"币种"},"zh_Hant_HK":{"可用/冻结":"可用/凍結","币种":"幣種"}}')},726:function(t,e,n){"use strict";n(716)},727:function(t,e,n){var o=n(150)(!1);o.push([t.i,".c-account{height:100%}.c-account .el-table .cell{padding-left:0;padding-right:0}",""]),t.exports=o}}]);