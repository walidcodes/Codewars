// Node Mania

function searchKFromEnd(linkedList, k) {
  return Number(`${linkedList}`.split(" -> ").at(-k)) || null;
}
