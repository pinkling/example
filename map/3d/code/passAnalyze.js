import _0x164035 from'./analyser.js';import _0xc82068 from'./config.js';export default class PassAnalyze extends _0x164035{constructor(_0x56407f,_0x29c9d9){super(_0x56407f);this['opt']=_0x29c9d9;this['analyser']();}['analyser'](){var BpTqqm={'JuIEU':'viewer\x20is\x20required.'};if(!Cesium['defined'](this['_viewer'])){throw new Cesium['DeveloperError'](BpTqqm['JuIEU']);}if(!this['opt']){return![];}this['passPrototype']=new PassPrototype(this);}}class PassPrototype{constructor(_0x3c1883){var PmZhiy={'KiijL':'0|3|1|14|7|5|6|10|12|8|13|2|4|11|9','NKBqG':'测试站No.1','UimLK':'测试站No.2','YuyMQ':'测试站No.3','awNPZ':'测试站No.4','EKqWW':'测试站No.5','mDGnp':'测试站No.6','cKDTa':'测试站No.7','kNolW':'测试站No.8','dNEYF':'测试站No.9'};var BdbSWY=PmZhiy['KiijL']['split']('|'),HeNlno=0x0;while(!![]){switch(BdbSWY[HeNlno++]){case'0':this['_that']=_0x3c1883;continue;case'1':this['viewer']=_0x3c1883['_viewer'];continue;case'2':this['czmlDataSource']=null;continue;case'3':this['options']=_0x3c1883['opt'];continue;case'4':this['analyzeResult']=null;continue;case'5':this['mouseManager']=_0x3c1883['mouseManager'];continue;case'6':this['_passEntity']=[];continue;case'7':this['tools']=_0x3c1883['Tools'];continue;case'8':this['_groundPonit']=[];continue;case'9':this['load']();continue;case'10':this['_radars']=[];continue;case'11':this['groundPoint']=[{'name':PmZhiy['NKBqG'],'lat':42.414136487719354,'lon':100.52056873233481,'alt':0x0,'scope':0x190},{'name':PmZhiy['UimLK'],'lat':42.42522146204617,'lon':109.85947530942975,'alt':0x0,'scope':0x898},{'name':PmZhiy['YuyMQ'],'lat':33.1819896042328,'lon':109.5591230090901,'alt':0x0,'scope':0x118},{'name':PmZhiy['awNPZ'],'lat':32.019262705194734,'lon':101.73699414432289,'alt':0x0,'scope':0x3e8},{'name':PmZhiy['EKqWW'],'lat':27.496123837273654,'lon':103.82420725508969,'alt':0x0,'scope':0x7d0},{'name':PmZhiy['mDGnp'],'lat':26.949808853110465,'lon':114.53228575748204,'alt':0x0,'scope':0x4b0},{'name':PmZhiy['cKDTa'],'lat':35.685974970635534,'lon':93.2030228474047,'alt':0x0,'scope':0x258},{'name':PmZhiy['kNolW'],'lat':24.73499910338626,'lon':106.24244324184826,'alt':0x0,'scope':0x320},{'name':PmZhiy['dNEYF'],'lat':41.73492679655367,'lon':121.17656582042726,'alt':0x0,'scope':0x3e8}];continue;case'12':this['_interPoints']=[];continue;case'13':this['_sateLine']=[];continue;case'14':this['entitys']=_0x3c1883['entitys'];continue;}break;}}['load'](){if(!this['options']['data']){return![];}this['parseCzml'](this['options']['data']['czml']);}['parseCzml'](_0x476a10){var mTcXjW={'owfsK':'轨迹线','WNwgC':function(_0x5146f3,_0x489eaf){return _0x5146f3==_0x489eaf;},'kNiPT':function(_0x2b459f,_0x55bcbd){return _0x2b459f(_0x55bcbd);},'iPZch':'未获取到实体信息'};let newCzml=_0x476a10['replace'](/[\n\r]/g,'');Cesium['CzmlDataSource']['load'](JSON['parse'](newCzml))['then'](_0x3275a3=>{var RzgYUs={'pzoIV':mTcXjW['owfsK']};this['czmlDataSource']=_0x3275a3;this['viewer']['clock']['shouldAnimate']=!![];this['viewer']['clock']['multiplier']=0x78;if(mTcXjW['WNwgC'](_0x3275a3['entities']['_entities']['_array']['length'],0x0)){mTcXjW['kNiPT'](alert,mTcXjW['iPZch']);return![];}let czmlLine=[];for(let i in _0x3275a3['entities']['_entities']['_array']){let sateEntity=_0x3275a3['entities']['_entities']['_array'][i],sate_position=sateEntity['position']['_property']['_values'],satePostionMsg=this['tools']['dataCluster'](sate_position,0x3),positions=[];for(let ii in satePostionMsg){positions['push']({'x':satePostionMsg[ii][0x0],'y':satePostionMsg[ii][0x1],'z':satePostionMsg[ii][0x2]});}czmlLine['push'](positions);}this['parseGroundPoint']()['then'](_0xf3cf55=>{var EvovMx={'WjCEW':RzgYUs['pzoIV']};this['compute'](czmlLine,_0x14822d=>{this['analyzeResult']=_0x14822d;for(let i in czmlLine){let line=this['entitys']['createLine'](czmlLine[i],EvovMx['WjCEW'],new Cesium['PolylineDashMaterialProperty']({'color':Cesium['Color']['RED']}));this['_sateLine']['push'](line);}this['viewer']['dataSources']['add'](this['czmlDataSource']);});});});}['parseGroundPoint'](){var gTGdys={'hOYaJ':function(_0x5e0813,_0x12b13b){return _0x5e0813*_0x12b13b;},'NkupA':'ellipsoid','fohsC':function(_0x5232b6,_0x8a1c70){return _0x5232b6+_0x8a1c70;},'gqfWi':'/Cesium/Apps/SampleData/kml/facilities/GroundStation.png','NXCTS':function(_0xaad554,_0x400231){return _0xaad554==_0x400231;},'zxMjs':function(_0x4306b2,_0x3c9c55){return _0x4306b2(_0x3c9c55);},'tsYam':function(_0xfae924,_0x3dd0b8){return _0xfae924(_0x3dd0b8);},'bYzRe':function(_0x24cfd8){return _0x24cfd8();}};let $this=this;function createRadar(_0x5edfb9){let rentity=$this['entitys']['createEntity']();rentity['name']=_0x5edfb9['name'];rentity['position']=_0x5edfb9['position'];rentity['ellipsoid']=$this['entitys']['getEllipsoid']({'r':gTGdys['hOYaJ'](_0x5edfb9['scope'],0x3e8)});rentity['ide']=gTGdys['NkupA'];rentity['pid']=_0x5edfb9['id'];$this['_radars']['push']($this['entitys']['add'](rentity));}function createGroundPoint(_0x442364){let dentity=$this['entitys']['createEntity']();dentity['name']=_0x442364['name'];dentity['position']=Cesium['Cartesian3']['fromDegrees'](_0x442364['lon'],_0x442364['lat'],_0x442364['alt']);dentity['label']=$this['entitys']['getLabel'](_0x442364['name']);dentity['billboard']=$this['entitys']['getBillboard'](gTGdys['fohsC'](_0xc82068['STATICDIR'],gTGdys['gqfWi']));dentity['scope']=_0x442364['scope'];let dentityObj=$this['entitys']['add'](dentity);$this['_groundPonit']['push'](dentityObj);return dentityObj;}return new Promise((_0x523fc9,_0x5bf73f)=>{if(gTGdys['NXCTS'](this['groundPoint']['length'],0x0))return![];for(let i in this['groundPoint']){let items=this['groundPoint'][i];gTGdys['zxMjs'](createRadar,gTGdys['tsYam'](createGroundPoint,items));}gTGdys['bYzRe'](_0x523fc9);});}['createData'](_0x1fa378){var UNobfe={'qOOXg':'--\x20计算完成,重新绘制\x20--','IGUxN':function(_0x363971,_0x5830be){return _0x363971>_0x5830be;},'Cxpzb':function(_0x468156,_0xd88537){return _0x468156==_0xd88537;}};console['log'](UNobfe['qOOXg']);for(let i in this['_radars']){this['entitys']['remove'](this['_radars'][i]);}for(let i in this['_groundPonit']){this['entitys']['remove'](this['_groundPonit'][i]);}if(UNobfe['IGUxN'](_0x1fa378['length'],0x0)){for(let i in _0x1fa378){this['_passEntity']['push'](this['entitys']['add'](_0x1fa378[i][0x0]['object']['id']));}for(let i in _0x1fa378){for(let j in this['_groundPonit']){if(UNobfe['Cxpzb'](_0x1fa378[i][0x0]['object']['id']['pid'],this['_groundPonit'][j]['id'])){this['_passEntity']['push'](this['entitys']['add'](this['_groundPonit'][j]));break;}}}}this['_radars']=[];this['_groundPonit']=[];}['parseData'](_0x5e362b,_0xa3d476,_0x25313c){var ksQdHD={'xxkmv':function(_0x3e6308,_0x3d6f16){return _0x3e6308==_0x3d6f16;},'qthvs':function(_0x12188d,_0x4fc260){return _0x12188d-_0x4fc260;},'UJLXL':function(_0x3c2c22,_0x45fd8a){return _0x3c2c22+_0x45fd8a;},'Icgkv':function(_0x125582,_0x13b7bf){return _0x125582+_0x13b7bf;},'hfjDT':function(_0x23717f,_0x1be339){return _0x23717f+_0x1be339;},'QaHVp':'起点:\x20','uzUKy':'距离:\x20','tveZs':function(_0x4a3f64,_0x4811c5){return _0x4a3f64/_0x4811c5;},'IWZuG':'公里\x0a','qPrVq':function(_0x36635d,_0x1e9bcb){return _0x36635d!=_0x1e9bcb;},'xBHqW':function(_0x8fbf79,_0x53ab52){return _0x8fbf79+_0x53ab52;},'ZClDw':'终点:\x20','RBaAX':function(_0x5ece7f,_0x7a7979){return _0x5ece7f<_0x7a7979;},'CGwHU':'--\x20计算中\x20--','FiPki':function(_0x599b58,_0x31958a){return _0x599b58>_0x31958a;},'FBvMD':function(_0x428565,_0x4f8899){return _0x428565(_0x4f8899);},'PUjRF':function(_0x1e63a1,_0x44b540){return _0x1e63a1>=_0x44b540;},'eHagG':function(_0x2f18df,_0x5a7271){return _0x2f18df==_0x5a7271;},'Vgpum':function(_0x16b76a,_0x23e955,_0x10aae7){return _0x16b76a(_0x23e955,_0x10aae7);},'MiqNx':function(_0x339b78,_0xf988f6,_0x3e9146){return _0x339b78(_0xf988f6,_0x3e9146);},'AILYs':'相交点为空'};console['log'](ksQdHD['CGwHU']);let $this=this;try{if(ksQdHD['FiPki'](_0x5e362b['length'],0x0)){const interPoints=this['tools']['groupBy'](_0x5e362b,function(_0x3d6540){return[_0x3d6540['pid']];});function createInterPoint(_0x1a856e,_0x31d0e0){let start_position,end_position,distance;if(ksQdHD['xxkmv'](_0x31d0e0,undefined)){end_position=_0xa3d476[ksQdHD['qthvs'](_0xa3d476['length'],0x1)];}else{end_position=_0x31d0e0['position'];}start_position=_0x1a856e['position'];distance=$this['tools']['_distance'](start_position,end_position);let pentity=$this['entitys']['createPoint'](start_position,ksQdHD['UJLXL'](ksQdHD['Icgkv'](ksQdHD['Icgkv'](ksQdHD['hfjDT'](ksQdHD['hfjDT'](ksQdHD['QaHVp'],_0x1a856e['object']['id']['name']),'\x0a'),ksQdHD['uzUKy']),ksQdHD['tveZs'](distance,0x3e8)['toFixed'](0x3)),ksQdHD['IWZuG']),!![]);pentity['name']=_0x1a856e['object']['id']['name'];pentity['oid']=_0x1a856e['id'];$this['_passEntity']['push'](pentity);if(ksQdHD['qPrVq'](_0x31d0e0,undefined)){let pentity2=$this['entitys']['createPoint'](end_position,ksQdHD['xBHqW'](ksQdHD['xBHqW'](ksQdHD['ZClDw'],_0x31d0e0['object']['id']['name']),'\x0a'),!![]);pentity2['name']=_0x31d0e0['object']['id']['name'];pentity2['oid']=_0x31d0e0['id'];$this['_passEntity']['push'](pentity2);}}function boolValue(_0x3f31c6){var nMeoFX={'GdUhB':function(_0x204276,_0x397694){return ksQdHD['xxkmv'](_0x204276,_0x397694);},'DkGyE':function(_0x254358,_0x5d38d6){return ksQdHD['xxkmv'](_0x254358,_0x5d38d6);}};let newItems=[],startItems=[],stopItems=[];let lonlat=$this['mouseManager']['worldToLonlat'](_0x3f31c6[0x0]['position']);for(let i=0x0;ksQdHD['RBaAX'](i,_0x3f31c6['length']);i++){let lonlat_i=$this['mouseManager']['worldToLonlat'](_0x3f31c6[i]['position']);if(ksQdHD['RBaAX'](Math['abs'](ksQdHD['qthvs'](lonlat['lat'],lonlat_i['lat'])),0.1)){_0x3f31c6[i]['height']=lonlat_i['alt'];_0x3f31c6[i]['lon']=lonlat_i['lon'];_0x3f31c6[i]['lat']=lonlat_i['lat'];startItems['push'](_0x3f31c6[i]);}else{_0x3f31c6[i]['height']=lonlat_i['alt'];_0x3f31c6[i]['lon']=lonlat_i['lon'];_0x3f31c6[i]['lat']=lonlat_i['lat'];stopItems['push'](_0x3f31c6[i]);}}let startMinHeight=Math['min']['apply'](Math,startItems['map'](function(_0x52816a){return _0x52816a['height'];})),stopMinHeight=Math['min']['apply'](Math,stopItems['map'](function(_0x37c520){return _0x37c520['height'];}));startItems['map'](function(_0x3f312c){if(nMeoFX['GdUhB'](startMinHeight,_0x3f312c['height'])){newItems[0x0]=_0x3f312c;}}),stopItems['map'](function(_0x111cd8){if(nMeoFX['DkGyE'](stopMinHeight,_0x111cd8['height'])){newItems[0x1]=_0x111cd8;}});console['log'](newItems);return newItems;}for(let i in interPoints){if(ksQdHD['xxkmv'](interPoints[i]['length'],0x1)){ksQdHD['FBvMD'](createInterPoint,interPoints[i][0x0]);}else if(ksQdHD['PUjRF'](interPoints[i]['length'],0x2)){let items=interPoints[i];items=ksQdHD['FBvMD'](boolValue,items);if(ksQdHD['xxkmv'](items['length'],0x1)){ksQdHD['FBvMD'](createInterPoint,items[0x0]);}else{if(ksQdHD['eHagG'](items['length'],0x2)){ksQdHD['Vgpum'](createInterPoint,items[0x0],items[0x1]);}else{ksQdHD['MiqNx'](createInterPoint,items[0x0],items[ksQdHD['qthvs'](items['length'],0x1)]);console['log'](items);}}}}ksQdHD['FBvMD'](_0x25313c,interPoints);}else{ksQdHD['FBvMD'](alert,ksQdHD['AILYs']);return![];}}catch(_0x33e709){console['log'](_0x33e709);}}['analyzeInter'](_0x28fa85){var JvBzbv={'zNaiB':function(_0x4f0f82,_0x4e8d46){return _0x4f0f82<_0x4e8d46;},'kYicj':function(_0x4ef653,_0x4948a6){return _0x4ef653|_0x4948a6;},'kPcOZ':function(_0x7a8e7e,_0x5a0d35){return _0x7a8e7e==_0x5a0d35;},'XYQjs':function(_0x2a6cc3,_0x552c81){return _0x2a6cc3+_0x552c81;},'allFG':function(_0x21af15,_0x53dc4b){return _0x21af15>_0x53dc4b;},'wkQwm':'ellipsoid','SKjUv':function(_0xb51815,_0x4b3c64){return _0xb51815(_0x4b3c64);}};return new Promise((_0xc3014,_0x1e315f)=>{let radarLine=[];for(let i=0x0;JvBzbv['zNaiB'](i,_0x28fa85['length']);i++){if(JvBzbv['kYicj'](JvBzbv['kPcOZ'](_0x28fa85[i]['x'],0x0),JvBzbv['kPcOZ'](_0x28fa85[i]['y'],0x0)))continue;if(!_0x28fa85[JvBzbv['XYQjs'](i,0x1)])continue;let interPoint=this['_that']['getIntersectObj'](_0x28fa85[i],_0x28fa85[JvBzbv['XYQjs'](i,0x1)],[],![]);if(JvBzbv['allFG'](interPoint['length'],0x0)){for(let i in interPoint){if(interPoint[i]['object']){if(JvBzbv['kPcOZ'](interPoint[i]['object']['id']['ide'],JvBzbv['wkQwm'])){interPoint[i]['pid']=interPoint[i]['object']['id']['pid'];radarLine['push'](interPoint[i]);}}}}}JvBzbv['SKjUv'](_0xc3014,radarLine);});}['compute'](_0x5037f2,_0x9034c9){var xzcWMn={'CCoky':function(_0x39ea0e,_0x53cc35){return _0x39ea0e-_0x53cc35;},'HrBgO':function(_0xd8036a,_0x413359){return _0xd8036a==_0x413359;},'oIDwo':function(_0x265d36,_0x38606f){return _0x265d36(_0x38606f);},'WoTEo':function(_0x241938,_0x61e790){return _0x241938>_0x61e790;},'qRaaU':function(_0x2f3dad,_0x4627c7,_0x273f37){return _0x2f3dad(_0x4627c7,_0x273f37);}};if(xzcWMn['HrBgO'](_0x5037f2['length'],0x0)){return![];}xzcWMn['qRaaU'](setTimeout,()=>{var cBuTgp={'kdIom':function(_0x122669,_0x1c8980){return xzcWMn['oIDwo'](_0x122669,_0x1c8980);}};new Promise((_0x4a0077,_0x244d51)=>{var lsJAgz={'zNDSz':function(_0xa7118b,_0x505313){return xzcWMn['CCoky'](_0xa7118b,_0x505313);},'OzaWc':function(_0x57a5b3,_0x283db3){return xzcWMn['HrBgO'](_0x57a5b3,_0x283db3);},'KlXNF':function(_0x5195bb,_0x260dc4){return xzcWMn['oIDwo'](_0x5195bb,_0x260dc4);}};for(let i in _0x5037f2){let sate=_0x5037f2[i];if(xzcWMn['WoTEo'](sate['length'],0x0)){this['analyzeInter'](sate)['then'](_0x2aed41=>{var hjqWGC={'lsOYZ':function(_0x2e0e9a,_0x30400d){return lsJAgz['zNDSz'](_0x2e0e9a,_0x30400d);},'yOIuI':function(_0x2d08e3,_0x20b72c){return lsJAgz['OzaWc'](_0x2d08e3,_0x20b72c);},'XJHET':function(_0x2d9e68,_0x21bf25){return lsJAgz['zNDSz'](_0x2d9e68,_0x21bf25);},'tWqRA':function(_0x119840,_0x10bda0){return lsJAgz['KlXNF'](_0x119840,_0x10bda0);}};this['parseData'](_0x2aed41,sate,_0x3a76cb=>{let startPonint=this['entitys']['createPoint'](sate[0x0],'起点',!![]);let stopPonint=this['entitys']['createPoint'](sate[hjqWGC['lsOYZ'](sate['length'],0x1)],'终点',!![]);if(hjqWGC['yOIuI'](i,hjqWGC['XJHET'](_0x5037f2['length'],0x1))){this['createData'](_0x3a76cb);hjqWGC['tWqRA'](_0x4a0077,_0x3a76cb);}});});}}})['then'](_0x4ca975=>{cBuTgp['kdIom'](_0x9034c9,_0x4ca975);});},0x7d0);}['createNodeTree'](_0x1ba26f){var LYwsJX={'temXP':'收缩面板'};let Options=function(){for(let key in _0x1ba26f){this[key]=_0x1ba26f[key];}};let option=new Options();let gui=new dat['GUI']();gui['__closeButton']['innerHTML']=LYwsJX['temXP'];for(let key in _0x1ba26f){gui['add'](option,key)['name'](_0x1ba26f[key]['name'])['onChange'](function(_0x58e689){for(let i in this['_passEntity']){if(this['_passEntity'][i]['pid']){}}});}}}