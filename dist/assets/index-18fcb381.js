import{H as t}from"./index-d6cc38ca.js";let u=e=>t({url:"/admin/product/saveSkuInfo",method:"post",data:e}),l=e=>t({url:`/admin/product/findBySpuId/${e}`,method:"get"}),o=e=>t({url:`/admin/product/deleteSpu/${e}`,method:"delete"}),a=(e,d)=>t({url:`/admin/product/list/${e}/${d}`,method:"get"}),n=e=>t({url:`/admin/product/cancelSale/${e}`,method:"get"}),p=e=>t({url:`/admin/product/onSale/${e}`,method:"get"}),i=e=>t({url:`/admin/product/getSkuInfo/${e}`,method:"get"}),m=e=>t({url:`/admin/product/deleteSku/${e}`,method:"delete"});export{u as a,i as b,n as c,o as d,m as e,l as g,p as o,a as s};
