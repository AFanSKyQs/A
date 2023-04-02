import {thuMUp} from "./DianZan.js";
import {CatEyeBoxOffice} from "./CatsEyeBoxOffice.js";
import {YiyanDinZhen} from "./YiyanDinZhen.js";
import {Complaint} from "./ReplyComplaint.js";
import {OnOFF} from "./ON-OFF.js";
import {AT_Xiaozuo7_CxkEmo} from "./AT_Xiaozuo7_CxkEmo.js";
import {AchievementTop} from "./ChestAndAcheTop/AchieveTop.js";
import ChestTop from "./ChestAndAcheTop/ChestTop.js";
import {ChestGroupTop} from "./ChestAndAcheTop/ChestGroupTop.js";
import plugin from "../../../../lib/plugins/plugin.js";
import {cx, cxbz, hc, hx} from "./Znb233_Js/Znb233_Cx.js";
import {updateDioTu, updateLongTu} from "../../models/UpdateImg.js";
import {addDioTuSend, sendDioTu, sendDioTuNum} from "./DioLongTu/DioTu.js";
import {addLongTuSend, sendLongTu, sendLongTuNum} from "./DioLongTu/LongTu.js";

let urls_one = "http://api.andeer.top/API/word_pic1.php"

export class SmallFunctionsindex extends plugin {
    constructor() {
        super({
            name: 'FanSky小功能Index',
            dsc: 'FanSky小功能',
            event: 'message',
            priority: 3141,
            rule: [
                {
                    reg: /^#?(点赞|赞我|点zan)$/,
                    fnc: 'thuMUp',
                }, {
                    reg: /^#?(电影|猫眼|实时)?票房$/,
                    fnc: 'CatEyeBoxOffice'
                }, {
                    // 清空所有Axios、OpenAIList、userCount
                    reg: /^#?(一眼丁真|一眼鼎真|一眼定真|一眼顶针|遗言顶针|遗言鼎真|遗言丁真|遗言定真)$/i,
                    fnc: 'YiyanDinZhen'
                }, {
                    reg: /.*/i,
                    fnc: 'Complaint',
                    log: false
                }, {
                    reg: /#(发病|发电|发癫|发疯)/,
                    fnc: 'Complaint'
                }, {
                    reg: /^#(开启|打开|open|关闭|启用)(fan|Fansky|Fan|fans)点赞$/,
                    fnc: 'OnOFF'
                }, {
                    reg: /^#?(鸡哥|ikun|小黑子|小ji子|小鸡子|村路人|纯路人|纯鹿人|个人练习生|真虾头|感觉没必要|一眼丁鸡|一眼丁ji|cxk)$/i,
                    fnc: 'AT_Xiaozuo7_CxkEmo'
                }, {
                    reg: '^#成就(排行|排名|查询|统计)(.*)$',
                    fnc: 'achieveTop'
                }, {
                    reg: '^#宝箱(排行|排名|查询|统计)(.*)$',
                    fnc: 'ChestGroupTop'
                }, {
                    reg: "^#?(抽象帮助|cxbz)",
                    fnc: "cxbz",
                }, {
                    reg: "^#?(抽象|cx)",
                    fnc: "cx",
                }, {
                    reg: "^#?(还抽|hc)",
                    fnc: "Hc",
                }, {
                    reg: "^#?(化学|hx)",
                    fnc: "Hx",
                }, {
                    reg: /^#(更新|下载|载入|加载)(d|弔|吊|屌|diao|dio|碉|雕|貂)图$/,
                    fnc: "updateDioTu"
                }, {
                    reg: /^#(更新|下载|载入|加载)(l|long|龙|隆|聋|L|笼|浓|农|弄)图$/,
                    fnc: "updateLongTu"
                }, {
                    reg: '^#?(来点|给点|发|来|要)?(Diao|Dio|dio|D|d|弔|屌|叼|掉|迪奥|雕|貂|碉|鵰|刁|吊|diao)图$',
                    fnc: 'sendDioTu'
                }, {
                    reg: '^#?(加|增加|增|add|加入)(Diao|d|D|Dio|dio|弔|屌|叼|掉|迪奥|雕|貂|碉|鵰|刁|吊|diao)图(.*)',
                    fnc: 'addDioTuSend'
                }, {
                    reg: '^#?(有多少|现在有多少|how|有几个)(Diao|Dio|dio|D|d|弔|屌|叼|掉|迪奥|雕|貂|碉|鵰|刁|吊|diao)图(.*)$',
                    fnc: 'sendDioTuNum'
                }, {
                    reg: '^#?(来点|给点|发|来|要)?(long|龙|nong|聋|隆|l|L)图$',
                    fnc: 'sendLongTu'
                }, {
                    reg: '^#?(加|增加|增|add|加入)(long|龙|nong|聋|隆|l|L)图(.*)',
                    fnc: 'addLongTuSend'
                }, {
                    reg: '^#?(有多少|现在有多少|how|有几个)(long|龙|nong|聋|隆|l|L)图(.*)$',
                    fnc: 'sendLongTuNum'
                }
            ]
        })
    }

    async sendLongTuNum(e) {
        await sendLongTuNum(e)
        return true
    }

    async addLongTuSend(e) {
        await addLongTuSend(e)
        return true
    }

    async sendLongTu(e) {
        await sendLongTu(e)
        return true
    }

    async sendDioTuNum(e) {
        await sendDioTuNum(e)
        return true
    }

    async addDioTuSend(e) {
        await addDioTuSend(e)
        return true
    }

    async sendDioTu(e) {
        await sendDioTu(e)
        return true
    }

    async updateLongTu(e) {
        await updateLongTu(e)
        return true
    }

    async updateDioTu(e) {
        await updateDioTu(e)
        return true
    }

    async Hx(e) {
        await hx(e)
    }

    async Hc(e) {
        await hc(e)
    }

    async cx(e) {
        await cx(e)
    }

    async cxbz(e) {
        await cxbz(e)
    }

    async achieveTop(e) {
        let msg = e.original_msg || e.msg
        if (!msg) {
            return false
        }
        if (msg.includes("排行榜")) {
        }
        let Static = await AchievementTop(e)
        if (!Static || Static === false) {
            return false
        }
    }

    async ChestGroupTop(e) {
        let msg = e.original_msg || e.msg
        if (!msg) {
            return false
        }
        if (msg.includes("排行榜")) {
            let Static = await ChestGroupTop(e)
            if (!Static || Static === false) {
                return false
            }
        } else {
            let Static = await ChestTop(e)
            if (!Static || Static === false) {
                return false
            }
        }
        return true
    }

    async AT_Xiaozuo7_CxkEmo(e) {
        let Static = await AT_Xiaozuo7_CxkEmo(e)
        if (!Static || Static === false) {
            return false
        }
    }

    async OnOFF(e) {
        let Static = await OnOFF(e)
        if (!Static || Static === false) {
            return false
        }
    }

    async thuMUp(e) {
        let Static = await thuMUp(e)
        if (!Static || Static === false) {
            return false
        }
    }

    async CatEyeBoxOffice(e) {
        let Static = await CatEyeBoxOffice(e)
        if (!Static || Static === false) {
            return false
        }
    }

    async YiyanDinZhen(e) {
        let Static = await YiyanDinZhen(e)
        if (!Static || Static === false) {
            return false
        }
    }

    async Complaint(e) {
        let Static = await Complaint(e)
        if (!Static || Static === false) {
            return false
        }
    }

}
