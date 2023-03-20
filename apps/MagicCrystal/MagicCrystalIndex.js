import {CardList, FirstSignTime, SingleTest} from "./SignIn.js";
import plugin from "../../../../lib/plugins/plugin.js";
export class MagicCrystalIndex extends plugin {
    constructor() {
        super({
            name: '打卡',
            dsc: '打卡，签到',
            event: 'message',
            priority: 3141,
            rule: [
                {
                    reg: /^#?(打卡|冒泡|冒泡泡)$/,
                    fnc: 'MagicCrystalSign',
                },
                {
                    reg: /^签到$/,
                    fnc: 'MagicCrystalSign',
                },
                {
                    reg: /^🌨️🔥$/,
                    fnc: 'MagicCrystalSign',
                },
                {
                    reg: /^#?(首次|最开始|第一次|第1次|第one次)(打卡|冒泡|签到|冒泡泡)时间?$/,
                    fnc: 'FirstSignTime',
                }
                ,
                {
                reg: /^#?(打卡|冒泡)(用户|统计|记录|总计)$/,
                    fnc: 'CardList',
                }
            ]
        })
    }
    async MagicCrystalSign(e) {
        let Static= await SingleTest(e)
        if(!Static || Static===false){
            return false
        }
    }
    async FirstSignTime(e) {
        let Static=await FirstSignTime(e)
        if(!Static || Static===false){
            return false
        }
    }
    async CardList(e) {
        let Static=await CardList(e)
        if(!Static || Static===false){
            return false
        }
    }
}