$(document).ready(function(){$(".masthead").visibility({once:!1,onBottomPassed:function(){$(".fixed.menu").transition("fade in")},onBottomPassedReverse:function(){$(".fixed.menu").transition("fade out")}}),$(".ui.sidebar").sidebar("attach events",".toc.item")}),$(window).scroll(function(){var t=window.scrollY,n=document.getElementById("container-about"),e=$("#image-about"),i=$("#content-about");$(n).length&&t+400>=n.offsetTop&&0==e.transition("is visible")&&(e.transition("horizontal flip",1e3),i.transition("fade left",1e3))});