// 侠客江湖中，有一种绝学叫做快速分派，用它可以以惊人的速度将混乱的阵型重新排列为井然有序
// 出师之前，若你手下的剑士人数少于等于一，则无需动手施展这等高深武艺
if (arr.length <= 1) return arr;

// 先选出一个带头大哥，我们将他称之为'桩心'
const pivot = arr[0];

// 然后便是分派的过程，分成两大阵营：弱者居左，强者居右
const left = [];
const right = [];

// 遍历剩余的剑士，按照其实力与桩心的实力对比决定去向
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) { // 若其能力值小于桩心，则入左阵
      left.push(arr[i]);
    } else { // 否则，他实力强劲，归右营
      right.push(arr[i]);
    }
}

// 终于到了决战时刻，依次按弱强顺序排布这些剑士
return [...quickSort(left), pivot, ...quickSort(right)];
