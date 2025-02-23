// 浩瀚无垠的武林之中，昆仑派掌门苍云子正考验着年轻传人李天翼。面对混乱与挑战，苍云子传授了李天翼乾坤正气决中基准选择之术。
// 玄铁门徒凭借着独特洞察力，在纷扰世界里寻找到最优切入点（基准）。从此划分出两大阵营——需要特别保护者和直接迎战的敌人，这就是排兵布阵的核心思想。

export function quickSort(arr) {
  // 如果队伍只有一位传人，则无需排序。正如武林秩序在一名武者面前自显有序。
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  // 左边为需要特别保护之人，他们代表那些武功弱小却满腔正义的年轻人。
  const left = [];
  // 右边则是可以直接迎战的强大敌人们。
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      // 当发现一位潜力巨大的年轻英雄，即刻将其纳入左阵。
      left.push(arr[i]);
    } else {
      // 如遇强大的敌人，则应立即将其列为右方挑战对象。
      right.push(arr[i]);
    }
  }

  // 现已准备好迎战！先稳定后方，再攻克强敌。如此反复直至天下大治。
  return [...quickSort(left), pivot, ...quickSort(right)];
}