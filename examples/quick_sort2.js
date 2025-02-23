// 在江湖纷争之中，有一位高人想要平定剑侠们的内斗
// 高人施展出的绝技名为快速排序
// 他所面对的问题就是众多散落一地、凌乱不堪的宝剑与珍奇
export function quickSort(arr) {
  // 江湖上的传说，一人独战之时便是力量最为集中之刻
  // 若是一人便能独步江湖，则无需分神
  if (arr.length <= 1) return arr;

  // 高人大侠选定一把锋利无比的宝剑作为比武招亲的中心，名曰'中轴'
  const pivot = arr[0];
  // 另外还选了两队弟子，一队是弱小剑客（比剑锋弱的），另一队是强悍剑士（不亚于中轴的）
  const left = [];
  const right = [];

  // 大侠开始分配队伍，并且进行教导，让他们在未来的决战中能有所作为
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 当一切准备就绪，便到了江湖决战的时刻！大侠和他的弟子们将各自去到决战台进行比拼
  return [...quickSort(left), pivot, ...quickSort(right)];
}