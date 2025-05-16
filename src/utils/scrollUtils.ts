export const scrollToElement = (destination: string) => {
    const destinationEl = document.getElementById(destination);

    if (destinationEl) {
        let headerOffset = 120;
        if(window.innerWidth < 768) {
            headerOffset = 100;
        } 
        const destinationY = Math.max(destinationEl.offsetTop - headerOffset, 0);
        window.scrollTo({
            top: destinationY,
            left: 0,
            behavior: 'smooth'
        });
    }
};
