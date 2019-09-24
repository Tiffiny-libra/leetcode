/**
 *  给定一副牌，每张牌上都写着一个整数。

    此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

    每组都有 X 张牌。
    组内所有的牌上都写着相同的整数。
    仅当你可选的 X >= 2 时返回 true。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // deck = [0,0,0,1,1,1,2,2,2] //[1,1] //[1,1,1,2,2,2,3,3]// [1,2,3,4,4,3,2,1]  //[1,1,2,2,2,2]
    let all = []
    while(deck.length>0){   // 统计重复率
        let count = 0
        count = deck.filter(s=>s===deck[0]).length
        deck = deck.filter(s=>s!==deck[0])
        all.push(count)
    }
    console.log('all Serise: ',all)
    let allY=[],max = all.sort()[0]
    for(i=2;i<=max;i++){ // 算重复率中的公约数(除去1)
       all.every(s=> s%i === 0) && allY.push(i)
    }
    console.log('all Yue: ',allY)
    return allY.length>=1 // 看除去1的公约数的个数是否大于等于1,
};