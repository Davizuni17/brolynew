// - OfcKing >> https://github.com/OfcKing

const _0xa19aa5=_0x360b;(function(_0x433b09,_0x50cd39){const _0x45dc9f=_0x360b,_0x2a6250=_0x433b09();while(!![]){try{const _0x35ba0f=parseInt(_0x45dc9f(0x11f))/0x1+-parseInt(_0x45dc9f(0x120))/0x2*(-parseInt(_0x45dc9f(0x122))/0x3)+parseInt(_0x45dc9f(0x12e))/0x4*(parseInt(_0x45dc9f(0x124))/0x5)+parseInt(_0x45dc9f(0x131))/0x6*(-parseInt(_0x45dc9f(0x128))/0x7)+parseInt(_0x45dc9f(0x11e))/0x8*(-parseInt(_0x45dc9f(0x132))/0x9)+-parseInt(_0x45dc9f(0x13d))/0xa*(parseInt(_0x45dc9f(0x138))/0xb)+parseInt(_0x45dc9f(0x13c))/0xc*(parseInt(_0x45dc9f(0x11a))/0xd);if(_0x35ba0f===_0x50cd39)break;else _0x2a6250['push'](_0x2a6250['shift']());}catch(_0x96910){_0x2a6250['push'](_0x2a6250['shift']());}}}(_0x239d,0x2ce00));function _0x360b(_0x5c8e4c,_0x498977){const _0x239dbc=_0x239d();return _0x360b=function(_0x360be5,_0x1d5d0e){_0x360be5=_0x360be5-0x112;let _0x2dcbd1=_0x239dbc[_0x360be5];return _0x2dcbd1;},_0x360b(_0x5c8e4c,_0x498977);}import _0x3fb815 from'fs';import _0x28a38f from'path';const marriagesFile=_0x28a38f[_0xa19aa5(0x149)]('./src/database/casados.json');let proposals={};function loadMarriages(){const _0x41c41e=_0xa19aa5;if(_0x3fb815[_0x41c41e(0x133)](marriagesFile)){const _0x1fff70=_0x3fb815['readFileSync'](marriagesFile,_0x41c41e(0x125));return JSON[_0x41c41e(0x114)](_0x1fff70);}else return{};}function saveMarriages(_0x20aaf8){const _0x3a17a1=_0xa19aa5;_0x3fb815[_0x3a17a1(0x130)](marriagesFile,JSON['stringify'](_0x20aaf8,null,0x2));}function _0x239d(){const _0x3386a0=['mentionedJid','189LQUfTp','help','✧\x20Debes\x20ser\x20mayor\x20de\x2018\x20años\x20para\x20casarte.','url','✧\x20Debes\x20mencionar\x20a\x20alguien\x20para\x20aceptar\x20o\x20proponer\x20matrimonio.\x0a>\x20Ejemplo\x20»\x20*','data','8fUysRi','\x20se\x20han\x20divorciado.','writeFileSync','69546CxaasO','452457ZOBSTv','existsSync','✐\x20@','✧\x20¡No\x20puedes\x20proponerte\x20matrimonio\x20a\x20ti\x20mismo!','log','\x20te\x20ha\x20propuesto\x20matrimonio,\x20¿aceptas?\x0a>\x20✐\x20Aceptar\x20»\x20*','3729022FwnxoO','git+https://github.com/JoseXrl15k/Nino-Nakano.git','tags','*\x0a>\x20Puedes\x20proponer\x20matrimonio\x20a\x20otra\x20persona.','1020BCqzXH','10sdRsyy','group','marry\x20*@usuario*','Nino-Nakano','marry','./package.json','getName','utf-8','name','divorce','split','user','resolve','jid','repository','test','*\x20@','error','reply','parse','readFileSync','Error\x20al\x20leer\x20package.json:','✧\x20@','fromMe','command','91559DkPCdI','\x20♡¸.•*\x0a\x0a`Disfruten\x20de\x20su\x20luna\x20de\x20miel`\x0a\x0a✩.･:｡≻─────\x20⋆♡⋆\x20─────.•:｡✩','✧\x20Tú\x20no\x20estás\x20casado/a\x20con\x20nadie.','chat','48sIxZhI','267043tUukLi','42314mKcagH','users','3DkfXMV','✩.･:｡≻─────\x20⋆♡⋆\x20─────.•:｡✩\x0a¡Se\x20han\x20Casado!\x20ฅ^•ﻌ•^ฅ*:･ﾟ✧\x0a\x0a*•.¸♡\x20Esposo/a\x20@','626375WOuVUK','utf8','sender'];_0x239d=function(){return _0x3386a0;};return _0x239d();}let marriages=loadMarriages();function isYaemoriBotMD(){const _0x20f021=_0xa19aa5;try{const _0x33f9fd=JSON[_0x20f021(0x114)](_0x3fb815[_0x20f021(0x115)](_0x20f021(0x142),_0x20f021(0x144)));if(_0x33f9fd[_0x20f021(0x145)]!==_0x20f021(0x140))return![];if(_0x33f9fd[_0x20f021(0x14b)][_0x20f021(0x12b)]!==_0x20f021(0x139))return![];return!![];}catch(_0x5e1fcc){return console[_0x20f021(0x112)](_0x20f021(0x116),_0x5e1fcc),![];}}let handler=async(_0x371482,{conn:_0x1ac0a5,command:_0x2ddd4f,usedPrefix:_0x58e259,args:_0x546c85})=>{const _0x38b401=_0xa19aa5;if(!isYaemoriBotMD()){await _0x371482['reply']('✧\x20Comando\x20no\x20disponible\x20por\x20el\x20momento.');return;}const _0x20f3d6=/^(marry)$/i[_0x38b401(0x14c)](_0x2ddd4f),_0x405aaa=/^(divorce)$/i['test'](_0x2ddd4f);async function _0x5bd077(_0x5612eb){const _0x2ebda8=_0x38b401;await _0x371482['reply']('✐\x20Ocurrió\x20un\x20error.'),console[_0x2ebda8(0x136)](_0x5612eb);}switch(!![]){case _0x20f3d6:let _0x5c2f11=global['db'][_0x38b401(0x12d)][_0x38b401(0x121)][_0x371482[_0x38b401(0x126)]];if(_0x5c2f11['age']<0x12){await _0x371482['reply'](_0x38b401(0x12a));return;}let _0xd4ad70=_0x371482['sender'];if(marriages[_0xd4ad70]){await _0x1ac0a5[_0x38b401(0x113)](_0x371482[_0x38b401(0x11d)],'✧\x20Ya\x20estás\x20casado/a\x20con\x20*@'+marriages[_0xd4ad70]['split']('@')[0x0]+'*\x0a>\x20Puedes\x20divorciarte\x20con\x20el\x20comando:\x20*#divorce*',_0x371482,{'mentions':[marriages[_0xd4ad70]]});return;}if(!_0x371482[_0x38b401(0x127)]||_0x371482[_0x38b401(0x127)]['length']===0x0){await _0x1ac0a5['reply'](_0x371482[_0x38b401(0x11d)],_0x38b401(0x12c)+(_0x58e259+_0x2ddd4f)+'\x20@'+_0x1ac0a5['user'][_0x38b401(0x14a)]['split']('@')[0x0]+'*',_0x371482,{'mentions':[_0x1ac0a5[_0x38b401(0x148)][_0x38b401(0x14a)]]});return;}let _0x54b1f6=_0x371482[_0x38b401(0x127)][0x0];if(marriages[_0x54b1f6]){await _0x1ac0a5['reply'](_0x371482[_0x38b401(0x11d)],_0x38b401(0x117)+_0x54b1f6['split']('@')[0x0]+'\x20ya\x20está\x20casado/a\x20con:\x20*@'+marriages[_0x54b1f6][_0x38b401(0x147)]('@')[0x0]+_0x38b401(0x13b),_0x371482,{'mentions':[_0x54b1f6,marriages[_0x54b1f6]]});return;}if(_0xd4ad70===_0x54b1f6){await _0x371482[_0x38b401(0x113)](_0x38b401(0x135));return;}if(proposals[_0x54b1f6]&&proposals[_0x54b1f6]===_0xd4ad70){delete proposals[_0x54b1f6];let _0x2dabf3=_0x1ac0a5[_0x38b401(0x143)](_0xd4ad70),_0x1fa0e2=_0x1ac0a5[_0x38b401(0x143)](_0x54b1f6);marriages[_0xd4ad70]=_0x54b1f6,marriages[_0x54b1f6]=_0xd4ad70,saveMarriages(marriages),global['db'][_0x38b401(0x12d)][_0x38b401(0x121)][_0xd4ad70][_0x38b401(0x141)]=_0x1fa0e2,global['db'][_0x38b401(0x12d)][_0x38b401(0x121)][_0x54b1f6][_0x38b401(0x141)]=_0x2dabf3,await _0x1ac0a5[_0x38b401(0x113)](_0x371482[_0x38b401(0x11d)],_0x38b401(0x123)+_0xd4ad70[_0x38b401(0x147)]('@')[0x0]+'\x20♡¸.•*\x0a*•.¸♡\x20Esposo/a\x20@'+_0x54b1f6[_0x38b401(0x147)]('@')[0x0]+_0x38b401(0x11b),_0x371482,{'mentions':[_0xd4ad70,_0x54b1f6]});}else{let _0x4d4b12=_0x371482[_0x38b401(0x127)]&&_0x371482[_0x38b401(0x127)][0x0]?_0x371482[_0x38b401(0x127)][0x0]:_0x371482[_0x38b401(0x118)]?_0x1ac0a5['user']['jid']:_0x371482['sender'];proposals[_0xd4ad70]=_0x54b1f6,await _0x1ac0a5[_0x38b401(0x113)](_0x371482['chat'],'♡\x20@'+_0x4d4b12['split']`@`[0x0]+',\x20@'+_0xd4ad70[_0x38b401(0x147)]('@')[0x0]+_0x38b401(0x137)+(_0x58e259+_0x2ddd4f)+_0x38b401(0x14d)+_0xd4ad70[_0x38b401(0x147)]('@')[0x0],_0x371482,{'mentions':[_0xd4ad70,_0x4d4b12]});}break;case _0x405aaa:let _0x29621f=_0x371482[_0x38b401(0x126)];if(!marriages[_0x29621f]){await _0x371482[_0x38b401(0x113)](_0x38b401(0x11c));return;}let _0x1d18c0=marriages[_0x29621f];delete marriages[_0x29621f],delete marriages[_0x1d18c0],saveMarriages(marriages);let _0x5313a1=_0x1ac0a5[_0x38b401(0x143)](_0x29621f),_0x24ec1f=_0x1ac0a5[_0x38b401(0x143)](_0x1d18c0);global['db'][_0x38b401(0x12d)]['users'][_0x29621f][_0x38b401(0x141)]='',global['db'][_0x38b401(0x12d)][_0x38b401(0x121)][_0x1d18c0][_0x38b401(0x141)]='',await _0x1ac0a5[_0x38b401(0x113)](_0x371482[_0x38b401(0x11d)],_0x38b401(0x134)+_0x29621f[_0x38b401(0x147)]('@')[0x0]+'\x20y\x20@'+_0x1d18c0['split']('@')[0x0]+_0x38b401(0x12f),_0x371482,{'mentions':[_0x29621f,_0x1d18c0]});break;}};handler[_0xa19aa5(0x13a)]=['rg'],handler[_0xa19aa5(0x129)]=[_0xa19aa5(0x13f),_0xa19aa5(0x146)],handler[_0xa19aa5(0x119)]=['marry',_0xa19aa5(0x146),'divorciarse'],handler[_0xa19aa5(0x13e)]=!![],handler['register']=!![];export default handler;
