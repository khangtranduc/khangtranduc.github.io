const n=async e=>await fetch(`/texts/${e}`).then(async t=>{if(t.ok)return await t.text();throw new Error("not found")});export{n as g};
