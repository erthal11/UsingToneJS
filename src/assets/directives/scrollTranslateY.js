const animatedScrollerObserver = new IntersectionObserver(
    (entries, animatedScrollerObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter-2');
                animatedScrollerObserver.unobserve(entry.target);
            }
        });
    }
);
export default 
{
    bind(el)
    {
        el.classList.add('before-enter2');
        animatedScrollerObserver.observe(el);   
        
    }
}