$(document).ready(function(){$(".start-menu").visibility({once:!1,onBottomPassed:function(){$(".fixed.menu").transition("fade in")},onBottomPassedReverse:function(){$(".fixed.menu").transition("fade out")}}),$(".ui.sidebar").sidebar("attach events",".toc.item")}),$(window).scroll(function(){var t=window.scrollY,n=document.getElementById("container-about"),i=document.getElementById("container-staff"),o=$("#staff-first-row-container"),e=$("#staff-second-row-container"),a=$("#image-about"),s=$("#content-about");$(n).length&&t+400>=n.offsetTop&&0==a.transition("is visible")&&(a.transition("horizontal flip",1e3),s.transition("fade left",1e3)),$(i).length&&t+100>=i.offsetTop&&0==o.transition("is visible")&&(o.transition("horizontal flip",1),$("#staff-first-row-container .column").transition({animation:"scale",reverse:"auto",interval:200}),setTimeout(function(){e.transition("horizontal flip",1),$("#staff-second-row-container .column").transition({animation:"scale",reverse:"auto",interval:200})},1e3))});