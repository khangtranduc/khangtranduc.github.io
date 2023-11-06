const a=async e=>await fetch(`/texts/${e}`).then(async t=>t.ok?await t.text():"");export{a as g};
