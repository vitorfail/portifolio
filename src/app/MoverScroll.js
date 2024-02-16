 export default function MoverScroll(cl){
    let t = (document.querySelector(cl)).offsetTop;
    window.scrollTo({ top: t-100, behavior: 'smooth' });
}