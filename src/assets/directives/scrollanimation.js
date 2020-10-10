const animatedScrollerObserver = new IntersectionObserver(
    (entries, animatedScrollerObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollerObserver.unobserve(entry.target);
            }
        });
    }
);
export default 
{
    bind(el)
    {
        el.classList.add('before-enter');
        animatedScrollerObserver.observe(el);   
        
    }
}